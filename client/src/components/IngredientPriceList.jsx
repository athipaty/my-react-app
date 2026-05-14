import products from "../productPrice";

export default function IngredientPriceList({ query, recipes = [], activeRecipes = [], ingredients = [], onEdit, onImage }) {
  // Set of all recipe names for sub-recipe detection
  const recipeNameSet = new Set(recipes.map((r) => r.name.toLowerCase().trim()));

  // Collect raw ingredient names + first available image from recipes
  const rawFromRecipes = new Set();
  const imageMap = {};
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ing) => {
      if (!ing.item) return;
      const key = ing.item.toLowerCase().trim();
      if (recipeNameSet.has(key)) return;
      rawFromRecipes.add(ing.item.trim());
      if (ing.image && !imageMap[key]) imageMap[key] = ing.image;
    });
  });

  // Map of MongoDB overrides (name → ingredient record)
  const overrideMap = new Map(ingredients.map((i) => [i.name.toLowerCase().trim(), i]));

  // Base list: productPrice items that are not sub-recipes + recipe-only items
  const priceMap = new Map(products.map((p) => [p.name.toLowerCase().trim(), p]));
  const base = products.filter((p) => !recipeNameSet.has(p.name.toLowerCase().trim()));
  rawFromRecipes.forEach((name) => {
    if (!priceMap.has(name.toLowerCase().trim())) {
      base.push({ name, price: 0, weight: { value: 0, unit: "g" } });
    }
  });

  // Apply MongoDB overrides and attach recipe images
  const merged = base.map((p) => {
    const key = p.name.toLowerCase().trim();
    const override = overrideMap.get(key);
    const recipeImage = imageMap[key] || "";
    if (override) {
      return { ...p, ...override, image: override.image || recipeImage };
    }
    return { ...p, image: recipeImage };
  });

  const formatWeight = (value, unit) => {
    if (unit === "g" && value >= 1000) {
      const kg = value / 1000;
      return `${kg % 1 === 0 ? kg : kg}kg`;
    }
    return `${value}${unit}`;
  };

  const lc = query.toLowerCase().trim();
  const items = merged
    .filter((p) => p.name.toLowerCase().includes(lc))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="animate-fade-slide-in">
      {/* Active recipes — expanded sub-ingredients */}
      {activeRecipes.length > 0 && (
        <div className="mb-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Menu</span>
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
                const priceInfo = override || merged.find((m) => m.name.toLowerCase().trim() === key);
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

      <div className="mb-2 text-xs text-gray-400 px-1">
        {items.length} ingredient{items.length !== 1 ? "s" : ""}
      </div>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {items.map((p, i) => (
            <div
              key={p.name}
              className={`flex items-center px-3 py-2 gap-3 ${i !== 0 ? "border-t border-gray-100" : ""}`}
            >
              {/* Image */}
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-10 h-10 rounded-lg object-cover shrink-0 cursor-pointer active:opacity-80"
                  onClick={() => onImage?.(p.image)}
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center text-gray-300 text-lg">
                  🧂
                </div>
              )}

              {/* Name */}
              <span className="flex-1 text-sm text-gray-800 font-medium leading-tight">
                {p.name}
              </span>

              {/* Price info */}
              <div className="text-right shrink-0 mr-1">
                {p.price > 0 ? (
                  <span className="text-sm font-semibold text-gray-800">
                    {p.price}
                    <span className="text-xs font-normal text-gray-500">
                      {" "}/ {formatWeight(p.weight.value, p.weight.unit)}
                    </span>
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">—</span>
                )}
              </div>

              {/* Edit button */}
              {onEdit && (
                <button
                  onClick={() => onEdit(p)}
                  className="text-gray-300 hover:text-gray-500 shrink-0 transition-colors"
                  title="Edit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        {items.length === 0 && (
          <div className="text-center text-gray-400 text-sm py-10">
            No ingredients found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
}
