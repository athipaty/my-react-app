import { useEffect, useRef, useState } from "react";
import recipes from "../recipes";

import SearchBar from "../components/SearchBar";
import RecipeDetail from "../components/RecipeDetail";
import FullImageModal from "../components/FullImageModal";

import { fmt, valid, strip0 } from "../utils/format";
import { calculateIngredientPrice } from "../utils/priceResolver";

export default function Sgo() {
  const [query, setQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLeaving, setIsLeaving] = useState(false); // recipe sliding out
  const [isGridLeaving, setIsGridLeaving] = useState(false); // grid sliding out
  const [multiplier, setMultiplier] = useState(1);
  const [qtyInputs, setQtyInputs] = useState({});
  const baseQty = useRef({});
  const [fullImage, setFullImage] = useState(null);

  /* ---------------------- navigation ---------------------- */
  const openRecipe = (recipe) => {
    if (!recipe) return;

    if (selectedRecipe) {
      // coming from inside a recipe — slide current recipe out first
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
      // coming from the grid — slide grid out first
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

  /* ---------------------- filtering ---------------------- */
  const lcQuery = query.toLowerCase().trim();

  const visibleRecipes = [...recipes]
    .filter((r) => (lcQuery ? r.name.toLowerCase().includes(lcQuery) : true))
    .sort((a, b) => a.name.localeCompare(b.name));

  /* ---------------------- render ---------------------- */
  return (
    <div className="min-h-screen bg-gray-50 p-2 pb-14 flex flex-col items-center overflow-x-hidden">
      <div className="max-w-md w-full">
        <SearchBar
          query={query}
          placeholder="Search recipes..."
          showBack={!!selectedRecipe}
          onBack={goBack}
          onChange={(v) => {
            setQuery(v);
            setSelectedRecipe(null);
          }}
        />

        {/* Recipe grid */}
        {!selectedRecipe && (
          <div
            className={
              isGridLeaving
                ? "animate-slide-out-left"
                : "animate-slide-in-right"
            }
          >
            {visibleRecipes.length > 0 ? (
              <div className="grid grid-cols-3 gap-2 mt-2">
                {visibleRecipes.map((recipe, i) => (
                  <button
                    key={recipe.name}
                    onClick={() => openRecipe(recipe)}
                    className="grid-card-pop will-change-transform flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md animate-fade-slide-in"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {recipe.image ? (
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full aspect-square object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
                        <span className="text-[10px] text-gray-400 text-center px-1 leading-tight">
                          Image not available
                        </span>
                      </div>
                    )}
                    <span className="text-[11px] text-gray-700 font-medium text-center px-1 py-1 leading-tight line-clamp-2">
                      {recipe.name}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 text-sm mt-10">
                No recipes found for "{query}"
              </p>
            )}
          </div>
        )}

        {/* Recipe detail */}
        {selectedRecipe && (
          <div
            className={
              isLeaving ? "animate-slide-out-right" : "animate-slide-in-right"
            }
          >
            <RecipeDetail
              recipe={selectedRecipe}
              qtyInputs={qtyInputs}
              onQtyChange={onQtyChange}
              onQtyBlur={onQtyBlur}
              onOpenRecipe={openRecipe}
              onImage={setFullImage}
              getPrice={(item, qty, unit) =>
                calculateIngredientPrice({
                  ingredientName: item,
                  usedQty: Number(qty),
                  usedUnit: unit,
                })
              }
            />
          </div>
        )}

        {fullImage && (
          <FullImageModal src={fullImage} onClose={() => setFullImage(null)} />
        )}
      </div>

      <footer className="fixed bottom-0 inset-x-0 border-t bg-white/90 py-3 text-center text-sm text-gray-600">
        Powered by <strong>TingTong</strong>
      </footer>
    </div>
  );
}
