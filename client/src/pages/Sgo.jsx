import { lazy, Suspense, useEffect, useRef, useState } from "react";

import SearchBar from "../components/SearchBar";
import RecipeDetail from "../components/RecipeDetail";
import FullImageModal from "../components/FullImageModal";
import ImageWithLoader from "../components/ImageWithLoader";
import DrawerMenu from "../components/DrawerMenu";

import { fmt, valid, strip0 } from "../utils/format";
import { calculateIngredientPrice } from "../utils/priceResolver";
import { fetchRecipes, seedRecipes, updateRecipe, createRecipe, fetchIngredients, saveIngredient, fetchStockCounts, saveStockCount, fetchMonthlyStock, seedMonthlyStock, saveMonthlyStockItem, fetchLocationStock, saveLocationStockItem, deleteLocationStockItem, reorderLocationStock } from "../api";
import useTheme from "../hooks/useTheme";
import useOnlineStatus from "../hooks/useOnlineStatus";
import monthlyStockSeed from "../monthlyStock";
import { getQueue, enqueue, setQueue as persistQueue } from "../utils/offlineQueue";

const EditRecipeForm = lazy(() => import("../components/EditRecipeForm"));
const MonthlyStockList = lazy(() => import("../components/MonthlyStockList"));
const IngredientEditModal = lazy(() => import("../components/IngredientEditModal"));
const StandingOrders = lazy(() => import("./StandingOrders"));
const StockCountList = lazy(() => import("../components/StockCountList"));
const CountStockLayout = lazy(() => import("../components/CountStockLayout"));
const LocationCountList = lazy(() => import("../components/LocationCountList"));

export default function Sgo() {
  const { theme, toggleTheme } = useTheme();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isGridLeaving, setIsGridLeaving] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [qtyInputs, setQtyInputs] = useState({});
  const baseQty = useRef({});
  const [fullImage, setFullImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentView, setCurrentView] = useState("recipes"); // "recipes" | "prices"
  const [recipeTab, setRecipeTab] = useState("sale"); // "sale" | "staff"
  const [ingredients, setIngredients] = useState([]);
  const [editingIngredient, setEditingIngredient] = useState(null);
  const [stockCounts, setStockCounts] = useState([]);
  const [monthlyStock, setMonthlyStock] = useState([]);
  const [locationStock, setLocationStock] = useState([]);
  const [countStockMode, setCountStockMode] = useState(null); // null | "layout" | "<location name>"
  const [pendingSyncCount, setPendingSyncCount] = useState(() => getQueue().length);
  const online = useOnlineStatus();

  /* ---------------------- load recipes ---------------------- */
  useEffect(() => {
    async function load() {
      try {
        let data = await fetchRecipes();
        if (data.length === 0) {
          const { default: staticRecipes } = await import("../recipes");
          await seedRecipes(staticRecipes);
          data = await fetchRecipes();
        }
        setRecipes(data);
      } catch {
        const { default: staticRecipes } = await import("../recipes");
        setRecipes(staticRecipes);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  /* ---------------------- load ingredient overrides ---------------------- */
  useEffect(() => {
    fetchIngredients().then(setIngredients).catch(() => {});
  }, []);

  /* ---------------------- load physical stock counts ---------------------- */
  useEffect(() => {
    fetchStockCounts().then(setStockCounts).catch(() => {});
  }, []);

  /* ---------------------- load monthly stock order sheet ---------------------- */
  useEffect(() => {
    async function load() {
      try {
        let data = await fetchMonthlyStock();
        if (data.length === 0) {
          await seedMonthlyStock(monthlyStockSeed);
          data = await fetchMonthlyStock();
        }
        setMonthlyStock(data);
      } catch {
        // leave empty — view shows its own loading/empty state
      }
    }
    load();
  }, []);

  /* ---------------------- load per-location stock counts ---------------------- */
  useEffect(() => {
    fetchLocationStock().then(setLocationStock).catch(() => {});
  }, []);

  /* ---------------------- sync queued offline counts ---------------------- */
  const flushLocationStockQueue = async () => {
    let queue = getQueue();
    if (queue.length === 0) return;

    while (queue.length > 0) {
      const action = queue[0];
      try {
        if (action.type === "save") await saveLocationStockItem(action.payload);
        else if (action.type === "delete") await deleteLocationStockItem(action.payload.id);
        queue = queue.slice(1);
        persistQueue(queue);
        setPendingSyncCount(queue.length);
      } catch {
        break; // still can't reach the server — stop and retry later
      }
    }

    if (queue.length === 0) {
      // fully synced — refetch so local placeholder ids/order match the server
      try {
        const fresh = await fetchLocationStock();
        setLocationStock(fresh);
      } catch {}
    }
  };

  useEffect(() => {
    if (online) flushLocationStockQueue();
  }, [online]);

  // navigator.onLine only catches a fully-down connection — on a flaky/low-data
  // connection the browser still reports "online" while requests keep failing,
  // so also retry periodically whenever something is still queued.
  useEffect(() => {
    if (pendingSyncCount === 0) return;
    const interval = setInterval(flushLocationStockQueue, 20000);
    return () => clearInterval(interval);
  }, [pendingSyncCount]);

  /* ---------------------- navigation ---------------------- */
  const openRecipe = (recipe) => {
    if (!recipe) return;
    setEditMode(false);

    if (selectedRecipe) {
      setIsLeaving(true);
      setTimeout(() => {
        setIsLeaving(false);
        setHistory((h) => [
          ...h,
          { recipe: selectedRecipe, query, scrollY: window.scrollY },
        ]);
        setSelectedRecipe(recipe);
        setMultiplier(1);
        setQuery("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 250);
    } else {
      setIsGridLeaving(true);
      setTimeout(() => {
        setIsGridLeaving(false);
        setHistory((h) => [
          ...h,
          { recipe: null, query, scrollY: window.scrollY },
        ]);
        setSelectedRecipe(recipe);
        setMultiplier(1);
        setQuery("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 250);
    }
  };

  const goBack = () => {
    setEditMode(false);
    setIsLeaving(true);
    setTimeout(() => {
      setIsLeaving(false);
      if (history.length > 0) {
        const prev = history[history.length - 1];
        setHistory((h) => h.slice(0, -1));
        setSelectedRecipe(prev.recipe);
        setQuery(prev.query || "");
        setMultiplier(1);
        setTimeout(() => {
          window.scrollTo({ top: prev.scrollY || 0, behavior: "smooth" });
        }, 50);
      } else {
        setSelectedRecipe(null);
        setMultiplier(1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 250);
  };

  /* ---------------------- quantity logic ---------------------- */
  useEffect(() => {
    if (!selectedRecipe) return;
    const base = {};
    const seeded = {};
    selectedRecipe.ingredients.forEach((ing) => {
      const q = Number(ing.quantity) || 0;
      base[ing.item] = q;
      seeded[ing.item] = fmt(q);
    });
    baseQty.current = base;
    setQtyInputs(seeded);
  }, [selectedRecipe]);

  useEffect(() => {
    if (!selectedRecipe) return;
    setQtyInputs((prev) => {
      const next = { ...prev };
      selectedRecipe.ingredients.forEach((ing) => {
        const base = baseQty.current[ing.item] || 0;
        next[ing.item] = fmt(base * multiplier);
      });
      return next;
    });
  }, [multiplier, selectedRecipe]);

  const onQtyChange = (item, raw) => {
    const v = strip0(raw);
    setQtyInputs((p) => ({ ...p, [item]: v }));
    if (v === "" || v.endsWith(".")) return;
    if (!valid(v)) return;
    const num = parseFloat(v);
    const base = baseQty.current[item] || 0;
    setMultiplier(base === 0 ? 0 : num / base);
  };

  const onQtyBlur = (item) => {
    const v = qtyInputs[item];
    if (v === "" || v?.endsWith(".")) {
      const base = baseQty.current[item] || 0;
      setQtyInputs((p) => ({ ...p, [item]: fmt(base * multiplier) }));
    }
  };

  const onSaveIngredient = async (draft) => {
    const saved = await saveIngredient(draft);
    setIngredients((prev) => {
      const idx = prev.findIndex((i) => i._id === saved._id);
      return idx >= 0 ? prev.map((i) => (i._id === saved._id ? saved : i)) : [...prev, saved];
    });
    setEditingIngredient(null);
  };

  const onSaveStockCount = async (draft) => {
    const saved = await saveStockCount(draft);
    setStockCounts((prev) => {
      const idx = prev.findIndex((c) => c._id === saved._id);
      return idx >= 0 ? prev.map((c) => (c._id === saved._id ? saved : c)) : [...prev, saved];
    });
  };

  const onSaveMonthlyStockItem = async (draft) => {
    const saved = await saveMonthlyStockItem(draft);
    setMonthlyStock((prev) => {
      const idx = prev.findIndex((i) => i._id === saved._id);
      return idx >= 0 ? prev.map((i) => (i._id === saved._id ? saved : i)) : [...prev, saved];
    });
  };

  const onSaveLocationStockItem = async (draft) => {
    // Apply immediately so counting keeps working with no connection.
    setLocationStock((prev) => {
      const idx = prev.findIndex((i) => i.location === draft.location && i.name === draft.name);
      if (idx >= 0) return prev.map((i, k) => (k === idx ? { ...i, ...draft } : i));
      const localId = `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      return [...prev, { ...draft, _id: localId, order: prev.filter((i) => i.location === draft.location).length }];
    });

    try {
      const saved = await saveLocationStockItem(draft);
      setLocationStock((prev) => {
        const idx = prev.findIndex((i) => i.location === draft.location && i.name === draft.name);
        return idx >= 0 ? prev.map((i, k) => (k === idx ? saved : i)) : [...prev, saved];
      });
    } catch {
      // no connection (or too slow to complete) — queue it and sync once back online
      const queue = enqueue({ type: "save", payload: draft });
      setPendingSyncCount(queue.length);
    }
  };

  const onDeleteLocationStockItem = async (id) => {
    setLocationStock((prev) => prev.filter((i) => i._id !== id));
    if (String(id).startsWith("local-")) return; // never made it to the server — nothing to delete there
    try {
      await deleteLocationStockItem(id);
    } catch {
      const queue = enqueue({ type: "delete", payload: { id } });
      setPendingSyncCount(queue.length);
    }
  };

  const onReorderLocationStock = async (location, ids) => {
    try {
      const updated = await reorderLocationStock(location, ids);
      setLocationStock((prev) => [...prev.filter((i) => i.location !== location), ...updated]);
    } catch {
      // ignore — local drag order already reflects intent, will resync on next load
    }
  };

  /* ---------------------- drawer navigation ---------------------- */
  const navigateTo = (view) => {
    setCurrentView(view);
    setQuery("");
    setEditMode(false);
    setAddMode(false);
    setCountStockMode(null);
  };

  /* ---------------------- toggle active ---------------------- */
  const toggleActive = async (recipe) => {
    const newActive = !recipe.active;
    const optimistic = { ...recipe, active: newActive };
    // Update UI immediately so the button responds
    setRecipes((prev) => prev.map((r) => (r._id === recipe._id ? optimistic : r)));
    if (selectedRecipe?._id === recipe._id) setSelectedRecipe(optimistic);
    try {
      const updated = await updateRecipe(recipe._id, { ...recipe, active: newActive });
      // If backend strips the active field, keep the local value
      const final = { ...updated, active: updated.active ?? newActive };
      setRecipes((prev) => prev.map((r) => (r._id === final._id ? final : r)));
      if (selectedRecipe?._id === final._id) setSelectedRecipe(final);
    } catch {
      // Revert on error
      setRecipes((prev) => prev.map((r) => (r._id === recipe._id ? recipe : r)));
      if (selectedRecipe?._id === recipe._id) setSelectedRecipe(recipe);
    }
  };

  /* ---------------------- edit / add ---------------------- */
  const saveRecipe = async (draft) => {
    if (draft._id) {
      const saved = await updateRecipe(draft._id, draft);
      setRecipes((prev) => prev.map((r) => (r._id === saved._id ? saved : r)));
      setSelectedRecipe(saved);
      setEditMode(false);
    } else {
      const saved = await createRecipe(draft);
      setRecipes((prev) => [...prev, saved]);
      setSelectedRecipe(saved);
      setAddMode(false);
    }
  };

  /* ---------------------- filtering ---------------------- */
  const lcQuery = query.toLowerCase().trim();

  const visibleRecipes = [...recipes]
    .filter((r) => (r.type || "sale") === recipeTab)
    .filter((r) => (lcQuery ? r.name.toLowerCase().includes(lcQuery) : true))
    .sort((a, b) => a.name.localeCompare(b.name));

  /* ---------------------- known ingredient images ---------------------- */
  const knownImages = {};
  ingredients.forEach((ov) => {
    const key = ov.name?.toLowerCase().trim();
    if (ov.image && key) knownImages[key] = ov.image;
  });
  recipes.forEach((r) => {
    r.ingredients?.forEach((ing) => {
      const key = ing.item?.toLowerCase().trim();
      if (ing.image && key && !knownImages[key]) knownImages[key] = ing.image;
    });
  });

  /* ---------------------- known ingredient names ---------------------- */
  const knownNamesSeen = new Set();
  const knownNames = [];
  ingredients.forEach((ov) => {
    const key = ov.name?.toLowerCase().trim();
    if (key && !knownNamesSeen.has(key)) { knownNamesSeen.add(key); knownNames.push(ov.name); }
  });
  recipes.forEach((r) => {
    r.ingredients?.forEach((ing) => {
      const key = ing.item?.toLowerCase().trim();
      if (key && !knownNamesSeen.has(key)) { knownNamesSeen.add(key); knownNames.push(ing.item); }
    });
  });
  knownNames.sort((a, b) => a.localeCompare(b));

  /* ---------------------- known monthly stock item names (for Count Stock add form) ---------------------- */
  const monthlyStockNames = [];
  const monthlyStockUnits = {};
  monthlyStock.forEach((item) => {
    if (!item.name) return;
    monthlyStockNames.push(item.name);
    const key = item.name.toLowerCase().trim();
    if (item.unit && !monthlyStockUnits[key]) monthlyStockUnits[key] = item.unit;
  });
  monthlyStockNames.sort((a, b) => a.localeCompare(b));

  /* ---------------------- location counts, grouped by item name (for Monthly Stock display) ---------------------- */
  const countedByName = {};
  locationStock.forEach((item) => {
    if (!item.name || !(item.qty > 0)) return;
    const key = item.name.toLowerCase().trim();
    if (!countedByName[key]) countedByName[key] = [];
    countedByName[key].push({ location: item.location, qty: item.qty, unit: item.unit });
  });

  /* ---------------------- render ---------------------- */
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-2 pb-14 flex flex-col items-center overflow-x-hidden">
      <div className="max-w-md w-full">
        <SearchBar
          query={query}
          placeholder={
            currentView === "prices"
              ? "Search monthly stock..."
              : currentView === "inventory"
              ? "Search inventory..."
              : "Search recipes..."
          }
          showBack={currentView === "recipes" && !!selectedRecipe && !editMode && !addMode}
          onBack={goBack}
          onChange={(v) => {
            setQuery(v);
            if (currentView === "recipes") {
              setSelectedRecipe(null);
              setEditMode(false);
            }
          }}
          onMenu={() => setShowDrawer(true)}
          onEdit={currentView === "recipes" && selectedRecipe && !editMode && !addMode ? () => setEditMode(true) : undefined}
          onAdd={currentView === "recipes" && !selectedRecipe && !addMode ? () => setAddMode(true) : undefined}
        />

        {/* Monthly stock order sheet view */}
        {currentView === "prices" && countStockMode === null && (
          <Suspense fallback={<p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">Loading...</p>}>
            <MonthlyStockList
              items={monthlyStock}
              onSaveItem={onSaveMonthlyStockItem}
              onCountStock={() => setCountStockMode("layout")}
              countedByName={countedByName}
            />
          </Suspense>
        )}

        {/* Count Stock — location layout */}
        {currentView === "prices" && countStockMode === "layout" && (
          <Suspense fallback={<p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">Loading...</p>}>
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={() => setCountStockMode(null)}
                className="text-sm text-gray-500 dark:text-gray-400 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded"
              >
                ← Back
              </button>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">Count Stock</span>
            </div>
            <CountStockLayout onSelectLocation={(loc) => setCountStockMode(loc)} />
          </Suspense>
        )}

        {/* Count Stock — per-location item list */}
        {currentView === "prices" && countStockMode !== null && countStockMode !== "layout" && (
          <Suspense fallback={<p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">Loading...</p>}>
            <LocationCountList
              location={countStockMode}
              items={locationStock.filter((i) => i.location === countStockMode)}
              onBack={() => setCountStockMode("layout")}
              onSaveItem={onSaveLocationStockItem}
              onDeleteItem={onDeleteLocationStockItem}
              onReorder={onReorderLocationStock}
              knownNames={monthlyStockNames}
              knownUnits={monthlyStockUnits}
              online={online}
              pendingSyncCount={pendingSyncCount}
              onRetrySync={flushLocationStockQueue}
            />
          </Suspense>
        )}

        {/* Physical stock count view */}
        {currentView === "inventory" && (
          <Suspense fallback={<p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">Loading...</p>}>
            <StockCountList
              recipes={recipes}
              counts={stockCounts}
              onImage={setFullImage}
              onSaveCount={onSaveStockCount}
            />
          </Suspense>
        )}

        {/* Standing orders view */}
        {currentView === "standingOrders" && (
          <Suspense fallback={<p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">Loading...</p>}>
            <StandingOrders />
          </Suspense>
        )}

        {/* Add new recipe form */}
        {currentView === "recipes" && addMode && (
          <Suspense fallback={<p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">Loading...</p>}>
            <EditRecipeForm
              recipe={{ name: "", image: "", ingredients: [], method: "", type: recipeTab }}
              onSave={saveRecipe}
              onCancel={() => setAddMode(false)}
              knownImages={knownImages}
              knownNames={knownNames}
            />
          </Suspense>
        )}

        {/* Menu / Staff meal tabs */}
        {currentView === "recipes" && !selectedRecipe && !addMode && (
          <div className="flex gap-2 mt-2 mb-1">
            {[
              { key: "sale", label: "Menu" },
              { key: "staff", label: "Staff Meal" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setRecipeTab(tab.key)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                  recipeTab === tab.key
                    ? "bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700"
                    : "bg-white text-gray-400 border-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:border-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Recipe grid */}
        {currentView === "recipes" && !selectedRecipe && !addMode && (
          <div
            className={
              isGridLeaving
                ? "animate-slide-out-left"
                : "animate-slide-in-right"
            }
          >
            {loading ? (
              <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">
                Loading recipes...
              </p>
            ) : visibleRecipes.length > 0 ? (
              <div className="grid grid-cols-3 gap-2 mt-2">
                {visibleRecipes.map((recipe, i) => (
                  <div
                    key={recipe._id || recipe.name}
                    className="grid-card-pop will-change-transform relative flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md animate-fade-slide-in cursor-pointer"
                    style={{ animationDelay: `${i * 40}ms` }}
                    onClick={() => openRecipe(recipe)}
                  >
                    {recipe.image ? (
                      <ImageWithLoader
                        src={recipe.image}
                        alt={recipe.name}
                        wrapperClass="w-full aspect-square"
                        imgClass="w-full h-full object-cover"
                        loading="lazy"
                        rounded="rounded-none"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 text-center px-1 leading-tight">
                          Image not available
                        </span>
                      </div>
                    )}
                    <span className="text-[11px] text-gray-700 dark:text-gray-300 font-medium text-center px-1 py-1 leading-tight line-clamp-2">
                      {recipe.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">
                {query
                  ? `No recipes found for "${query}"`
                  : `No ${recipeTab === "sale" ? "menu" : "staff meal"} recipes yet`}
              </p>
            )}
          </div>
        )}

        {/* Recipe detail / edit */}
        {currentView === "recipes" && selectedRecipe && !addMode && (
          <div
            className={
              isLeaving ? "animate-slide-out-right" : "animate-slide-in-right"
            }
          >
            {editMode ? (
              <Suspense fallback={<p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10">Loading...</p>}>
                <EditRecipeForm
                  recipe={selectedRecipe}
                  onSave={saveRecipe}
                  onCancel={() => setEditMode(false)}
                  knownImages={knownImages}
                  knownNames={knownNames}
                />
              </Suspense>
            ) : (
              <RecipeDetail
                recipe={selectedRecipe}
                qtyInputs={qtyInputs}
                onQtyChange={onQtyChange}
                onQtyBlur={onQtyBlur}
                onOpenRecipe={openRecipe}
                onImage={setFullImage}
                onEdit={() => setEditMode(true)}
                isActive={!!selectedRecipe.active}
                onToggleActive={() => toggleActive(selectedRecipe)}
                allRecipes={recipes}
                getPrice={(item, qty, unit) =>
                  calculateIngredientPrice({
                    ingredientName: item,
                    usedQty: Number(qty),
                    usedUnit: unit,
                  })
                }
              />
            )}
          </div>
        )}

        {fullImage && (
          <FullImageModal src={fullImage} onClose={() => setFullImage(null)} />
        )}
      </div>

      {editingIngredient && (
        <Suspense fallback={null}>
          <IngredientEditModal
            ingredient={editingIngredient}
            onSave={onSaveIngredient}
            onCancel={() => setEditingIngredient(null)}
          />
        </Suspense>
      )}

      <DrawerMenu
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        currentView={currentView}
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <footer className="fixed bottom-0 inset-x-0 border-t dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 py-3 text-center text-sm text-gray-600 dark:text-gray-400">
        Powered by <strong>TingTong</strong>
      </footer>
    </div>
  );
}
