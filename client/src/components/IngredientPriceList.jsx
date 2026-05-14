import { useState } from "react";

const STORAGE_KEY = "inventory_exclusions";

function loadExclusions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveExclusions(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export default function IngredientPriceList({ activeRecipes = [], ingredients = [], onImage }) {
  const [excluded, setExcluded] = useState(loadExclusions);
  const [showPanel, setShowPanel] = useState(false);
  const [newItem, setNewItem] = useState("");

  // Image map from all active recipe ingredients
  const imageMap = {};
  activeRecipes.forEach((r) => {
    r.ingredients?.forEach((ing) => {
      const key = ing.item?.toLowerCase().trim();
      if (ing.image && key && !imageMap[key]) imageMap[key] = ing.image;
    });
  });

  // Map of MongoDB overrides (name → ingredient record)
  const overrideMap = new Map(ingredients.map((i) => [i.name.toLowerCase().trim(), i]));

  // Map of ingredient name → recipe names that use it
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

  const excludeItem = (name) => {
    const key = name.toLowerCase().trim();
    if (excluded.includes(key)) return;
    const next = [...excluded, key];
    setExcluded(next);
    saveExclusions(next);
  };

  const restoreItem = (key) => {
    const next = excluded.filter((k) => k !== key);
    setExcluded(next);
    saveExclusions(next);
  };

  const addManual = () => {
    const key = newItem.toLowerCase().trim();
    if (!key || excluded.includes(key)) { setNewItem(""); return; }
    const next = [...excluded, key];
    setExcluded(next);
    saveExclusions(next);
    setNewItem("");
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
              Exclude
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
                  <button
                    onClick={() => excludeItem(ing.item)}
                    className="shrink-0 ml-1 w-6 h-6 flex items-center justify-center rounded-full text-gray-300 hover:bg-red-50 hover:text-red-400 transition-colors"
                    title="Exclude from inventory"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              );
            })}
            {visibleIngredients.length === 0 && (
              <p className="text-center text-gray-400 text-sm py-6">All ingredients are excluded</p>
            )}
          </div>
        </div>
      )}

      {activeRecipes.length === 0 && (
        <div className="text-center text-gray-400 text-sm py-16">
          Tick a recipe to see its ingredients here
        </div>
      )}

      {/* Exclusion list panel */}
      {showPanel && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-2xl w-full max-w-md p-5 pb-10">
            {/* Panel header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-gray-800 text-sm">Excluded Items</span>
              <button onClick={() => setShowPanel(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
            </div>

            {/* Add new exclusion */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addManual()}
                placeholder="Type ingredient name to exclude..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
              />
              <button
                onClick={addManual}
                className="bg-green-500 text-white text-sm px-3 py-2 rounded-lg"
              >
                Add
              </button>
            </div>

            {/* Excluded list */}
            {excluded.length === 0 ? (
              <p className="text-center text-gray-400 text-sm py-6">No items excluded</p>
            ) : (
              <div className="flex flex-col gap-1 max-h-72 overflow-y-auto">
                {excluded.map((key) => (
                  <div key={key} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700 capitalize">{key}</span>
                    <button
                      onClick={() => restoreItem(key)}
                      className="text-xs text-green-600 hover:text-green-800 font-medium"
                    >
                      Restore
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
