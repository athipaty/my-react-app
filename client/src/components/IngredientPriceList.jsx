import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { fetchInventoryFilter, saveInventoryFilter } from "../api";

export default function IngredientPriceList({ activeRecipes = [], ingredients = [], onImage }) {
  const [excluded, setExcluded] = useState([]);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    fetchInventoryFilter().then(setExcluded).catch(() => {});
  }, []);

  const imageMap = {};
  activeRecipes.forEach((r) => {
    r.ingredients?.forEach((ing) => {
      const key = ing.item?.toLowerCase().trim();
      if (ing.image && key && !imageMap[key]) imageMap[key] = ing.image;
    });
  });

  const overrideMap = new Map(ingredients.map((i) => [i.name.toLowerCase().trim(), i]));

  const usedByMap = {};
  activeRecipes.forEach((r) => {
    r.ingredients?.forEach((ing) => {
      const key = ing.item?.toLowerCase().trim();
      if (!key) return;
      if (!usedByMap[key]) usedByMap[key] = [];
      usedByMap[key].push(r.name);
    });
  });

  const formatWeight = (value, unit) => {
    if (unit === "g" && value >= 1000) {
      const kg = value / 1000;
      return `${kg % 1 === 0 ? kg : kg}kg`;
    }
    return `${value}${unit}`;
  };

  const toggleExclude = (name) => {
    const key = name.toLowerCase().trim();
    const next = excluded.includes(key)
      ? excluded.filter((k) => k !== key)
      : [...excluded, key];
    setExcluded(next);
    saveInventoryFilter(next).catch(() => {});
  };

  const allIngredients = Array.from(
    new Map(
      activeRecipes.flatMap((r) => r.ingredients || []).map((ing) => [ing.item?.toLowerCase().trim(), ing])
    ).values()
  ).sort((a, b) => (a.item || "").localeCompare(b.item || ""));

  const visibleIngredients = allIngredients.filter(
    (ing) => !excluded.includes(ing.item?.toLowerCase().trim())
  );

  return (
    <div className="animate-fade-slide-in">
      {activeRecipes.length > 0 && (
        <div className="mb-4 flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Inventory</span>
            <span className="text-xs bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">{activeRecipes.length}</span>
            <button
              onClick={() => setShowPanel(true)}
              className="ml-auto flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-lg px-2 py-1 hover:bg-gray-50"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 8h10M11 12h2M9 16h6" />
              </svg>
              Filter
              {excluded.length > 0 && (
                <span className="bg-red-100 text-red-600 font-bold px-1 rounded-full">{excluded.length}</span>
              )}
            </button>
          </div>

          {/* Ingredient list */}
          <div className="bg-white border border-green-200 rounded-xl overflow-hidden">
            {visibleIngredients.map((ing, j) => {
              const key = ing.item?.toLowerCase().trim();
              const override = overrideMap.get(key);
              const ingImage = ing.image || override?.image || imageMap[key] || "";
              const priceInfo = override;
              const usedBy = usedByMap[key] || [];
              return (
                <div key={j} className={`flex items-center gap-3 px-3 py-2 ${j !== 0 ? "border-t border-gray-50" : ""}`}>
                  {ingImage ? (
                    <img src={ingImage} alt={ing.item} className="w-9 h-9 rounded-lg object-cover shrink-0 cursor-pointer" onClick={() => onImage?.(ingImage)} />
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center text-gray-300 text-lg">🧂</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-gray-700">{ing.item}</span>
                    {usedBy.length > 0 && (
                      <p className="text-xs text-gray-400 truncate">{usedBy.join(", ")}</p>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-500 shrink-0">
                    {ing.quantity} {ing.unit}
                  </span>
                  {priceInfo?.price > 0 && (
                    <span className="text-xs text-green-700 font-semibold shrink-0 ml-1">
                      {priceInfo.price}
                      <span className="font-normal text-gray-400">/{formatWeight(priceInfo.weight.value, priceInfo.weight.unit)}</span>
                    </span>
                  )}
                </div>
              );
            })}
            {visibleIngredients.length === 0 && (
              <p className="text-center text-gray-400 text-sm py-6">All ingredients are hidden — open Filter to restore</p>
            )}
          </div>
        </div>
      )}

      {activeRecipes.length === 0 && (
        <div className="text-center text-gray-400 text-sm py-16">
          Tick a recipe to see its ingredients here
        </div>
      )}

      {/* Filter panel — portalled to body to escape overflow:hidden parents */}
      {showPanel && createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-2xl w-full max-w-md pb-10 flex flex-col max-h-[80vh]">
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b shrink-0">
              <span className="font-semibold text-gray-800 text-sm">Filter Ingredients</span>
              <button onClick={() => setShowPanel(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
            </div>
            <p className="text-xs text-gray-400 px-5 pt-2 pb-1 shrink-0">Tap an item to hide or show it in the inventory list.</p>

            {/* All ingredients as toggle list */}
            <div className="overflow-y-auto flex-1 px-5 pt-2">
              {allIngredients.length === 0 && (
                <p className="text-center text-gray-400 text-sm py-6">No ingredients</p>
              )}
              <div className="flex flex-col gap-1">
                {allIngredients.map((ing) => {
                  const key = ing.item?.toLowerCase().trim();
                  const isExcluded = excluded.includes(key);
                  return (
                    <button
                      key={key}
                      onClick={() => toggleExclude(ing.item)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                        isExcluded ? "bg-red-50 text-gray-400 line-through" : "bg-gray-50 text-gray-700 hover:bg-green-50"
                      }`}
                    >
                      <span className="text-sm">{ing.item}</span>
                      {isExcluded ? (
                        <span className="text-xs text-red-400 font-medium shrink-0 ml-2">Hidden</span>
                      ) : (
                        <span className="text-xs text-gray-300 shrink-0 ml-2">Visible</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      , document.body)}
    </div>
  );
}
