export default function IngredientPriceList({ activeRecipes = [], ingredients = [], onImage }) {
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

  const formatWeight = (value, unit) => {
    if (unit === "g" && value >= 1000) {
      const kg = value / 1000;
      return `${kg % 1 === 0 ? kg : kg}kg`;
    }
    return `${value}${unit}`;
  };

  return (
    <div className="animate-fade-slide-in">
      {/* Active recipes — expanded sub-ingredients */}
      {activeRecipes.length > 0 && (
        <div className="mb-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Inventory</span>
            <span className="text-xs bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">{activeRecipes.length}</span>
          </div>
          {activeRecipes.map((r) => (
            <div key={r._id} className="bg-white border border-green-200 rounded-xl overflow-hidden">
              {/* Recipe header */}
              <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border-b border-green-100">
                {r.image ? (
                  <img src={r.image} alt={r.name} className="w-7 h-7 rounded-md object-cover shrink-0 cursor-pointer" onClick={() => onImage?.(r.image)} />
                ) : (
                  <div className="w-7 h-7 rounded-md bg-green-100 shrink-0 flex items-center justify-center text-green-400 text-xs">🍳</div>
                )}
                <span className="text-sm font-semibold text-green-800">{r.name}</span>
                <span className="ml-auto text-xs text-green-500">{r.ingredients?.length || 0} items</span>
              </div>
              {/* Sub-ingredients */}
              {(r.ingredients || []).map((ing, j) => {
                const key = ing.item?.toLowerCase().trim();
                const override = overrideMap.get(key);
                const ingImage = ing.image || override?.image || imageMap[key] || "";
                const priceInfo = override;
                return (
                  <div key={j} className={`flex items-center gap-3 px-3 py-2 ${j !== 0 ? "border-t border-gray-50" : ""}`}>
                    {ingImage ? (
                      <img src={ingImage} alt={ing.item} className="w-9 h-9 rounded-lg object-cover shrink-0 cursor-pointer" onClick={() => onImage?.(ingImage)} />
                    ) : (
                      <div className="w-9 h-9 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center text-gray-300 text-lg">🧂</div>
                    )}
                    <span className="flex-1 text-sm text-gray-700">{ing.item}</span>
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
            </div>
          ))}
        </div>
      )}

      {activeRecipes.length === 0 && (
        <div className="text-center text-gray-400 text-sm py-16">
          Tick a recipe to see its ingredients here
        </div>
      )}
    </div>
  );
}
