import IngredientRow from "./IngredientRow";

export default function RecipeDetail({
  recipe,
  qtyInputs,
  onQtyChange,
  onQtyBlur,
  onOpenRecipe,
  onImage,
  getPrice,
}) {
  const totalQty = recipe.ingredients.reduce((sum, ing) => {
    const v = Number(qtyInputs[ing.item]) || 0;
    return sum + v;
  }, 0);

  const totalPrice = recipe.ingredients.reduce((sum, ing) => {
    return sum + getPrice(ing.item, Number(qtyInputs[ing.item]), ing.unit);
  }, 0);

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-3">{recipe.name}</h2>

      <table className="w-full max-w-3xl border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
        <thead>
          <tr className="bg-gray-200 text-sm">
            <th className="px-2 py-2 border text-left">Image</th>
            <th className="px-2 py-2 border text-left">Ingredients</th>
            <th className="px-2 py-2 border text-center">Qty</th>
          </tr>
        </thead>
        <tbody>
          {[...recipe.ingredients]
            .sort((a, b) => {
              const qtyA = Number(qtyInputs[a.item]) || 0;
              const qtyB = Number(qtyInputs[b.item]) || 0;
              return qtyB - qtyA; // DESC (higher first)
            })
            .map((ing) => (
              <IngredientRow
                key={ing.item}
                ingredient={ing}
                value={qtyInputs[ing.item]}
                unit={ing.unit}
                price={getPrice(
                  ing.item,
                  Number(qtyInputs[ing.item]),
                  ing.unit,
                )}
                onChange={(v) => onQtyChange(ing.item, v)}
                onBlur={() => onQtyBlur(ing.item)}
                onOpenRecipe={onOpenRecipe}
                onImage={onImage}
              />
            ))}
        </tbody>
        <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition">
          {/* Image column (empty) */}
          <td className="border px-2 py-2" />

          {/* Label */}
          <td className="border px-2 py-2 text-right ">TOTAL</td>

          {/* Quantity + Price */}
          <td className="border px-2 py-2">
            <div className="flex flex-col items-end gap-[2px]">
              <span className="text-sm">{totalQty.toLocaleString()} g</span>

              <span className="text-[11px] text-green-700">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
