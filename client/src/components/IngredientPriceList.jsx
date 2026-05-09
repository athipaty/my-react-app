import products from "../productPrice";

export default function IngredientPriceList({ query }) {
  const lc = query.toLowerCase().trim();

  const items = products
    .filter((p) => p.name.toLowerCase().includes(lc))
    .sort((a, b) => a.name.localeCompare(b.name));

  const per100g = (p) => {
    if (!p.price || !p.weight.value || p.weight.unit !== "g") return null;
    return (p.price / p.weight.value) * 100;
  };

  return (
    <div className="animate-fade-slide-in">
      <div className="mb-2 text-xs text-gray-400 px-1">
        {items.length} ingredient{items.length !== 1 ? "s" : ""}
      </div>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {items.map((p, i) => {
          const rate = per100g(p);
          return (
            <div
              key={p.name}
              className={`flex items-center px-4 py-3 gap-3 ${
                i !== 0 ? "border-t border-gray-100" : ""
              }`}
            >
              <span className="flex-1 text-sm text-gray-800 font-medium leading-tight">
                {p.name}
              </span>
              <div className="text-right shrink-0">
                {p.price > 0 ? (
                  <>
                    <div className="text-sm font-semibold text-gray-800">
                      ฿{p.price}
                      <span className="text-xs font-normal text-gray-500">
                        {" "}/ {p.weight.value}{p.weight.unit}
                      </span>
                    </div>
                    {rate !== null && (
                      <div className="text-xs text-green-600">
                        ฿{rate.toFixed(2)} / 100g
                      </div>
                    )}
                  </>
                ) : (
                  <span className="text-xs text-gray-400">—</span>
                )}
              </div>
            </div>
          );
        })}
        {items.length === 0 && (
          <div className="text-center text-gray-400 text-sm py-10">
            No ingredients found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
}
