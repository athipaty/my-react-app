import { useEffect, useRef, useState } from "react";
import recipes from "../recipes";

// components
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import RecipeDetail from "../components/RecipeDetail";
import SearchModeOverlay from "../components/SearchModeOverlay";
import FullImageModal from "../components/FullImageModal";

// utils
import { fmt, valid, strip0 } from "../utils/format";
import { calculateIngredientPrice } from "../utils/priceResolver";

export default function Sgo() {
  /* ---------------------- state ---------------------- */
  const [query, setQuery] = useState("");
  const [searchMode, setSearchMode] = useState("recipe");
  const [showModeOverlay, setShowModeOverlay] = useState(false);

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [history, setHistory] = useState([]);

  const [multiplier, setMultiplier] = useState(1);
  const [qtyInputs, setQtyInputs] = useState({});
  const baseQty = useRef({});

  const [fullImage, setFullImage] = useState(null);

  /* ---------------------- navigation ---------------------- */
  const openRecipe = (recipe) => {
    if (!recipe) return;
    if (selectedRecipe) {
      setHistory((h) => [...h, selectedRecipe]);
    }
    setSelectedRecipe(recipe);
    setMultiplier(1);
    setQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setSelectedRecipe(prev);
    } else {
      setSelectedRecipe(null);
    }
    setMultiplier(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const filteredRecipes = !lcQuery
    ? []
    : searchMode === "recipe"
      ? recipes
          .filter((r) => r.name.toLowerCase().includes(lcQuery))
          .sort((a, b) => a.name.localeCompare(b.name))
      : recipes
          .filter((r) =>
            r.ingredients.some((ing) =>
              ing.item.toLowerCase().includes(lcQuery),
            ),
          )
          .sort((a, b) => a.name.localeCompare(b.name));

  /* ---------------------- render ---------------------- */
  return (
    <div className="min-h-screen bg-gray-50 p-2 pb-14 flex flex-col items-center">
      <div className="max-w-md w-full">
        <SearchBar
          query={query}
          placeholder={searchMode === "recipe" ? "Miso Sauce" : "Spring Onion"}
          showBack={!!selectedRecipe}
          onBack={goBack}
          onMenu={() => setShowModeOverlay(true)}
          onChange={(v) => {
            setQuery(v);
            setSelectedRecipe(null);
          }}
        />

        {!selectedRecipe && query && (
          <RecipeList
            recipes={filteredRecipes}
            onOpen={openRecipe}
            onImage={setFullImage}
          />
        )}

        {selectedRecipe && (
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
        )}

        {showModeOverlay && (
          <SearchModeOverlay
            mode={searchMode}
            onSelect={(mode) => {
              setSearchMode(mode);
              setQuery("");
              setSelectedRecipe(null);
              setHistory([]);
              setMultiplier(1);
              setShowModeOverlay(false);
            }}
            onClose={() => setShowModeOverlay(false)}
          />
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
