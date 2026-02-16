import recipes from "../recipes";
import { calculateIngredientPrice } from "./priceResolver";

// fast lookup
const recipeIndex = recipes.reduce((acc, r) => {
  acc[r.name.toLowerCase().trim()] = r;
  return acc;
}, {});

// prevent infinite loops
const MAX_DEPTH = 5;

export function calculateRecipeCost(
  recipeName,
  multiplier = 1,
  depth = 0
) {
  if (!recipeName || depth > MAX_DEPTH) return 0;

  const recipe = recipeIndex[recipeName.toLowerCase().trim()];
  if (!recipe) return 0;

  return recipe.ingredients.reduce((sum, ing) => {
    const qty = Number(ing.quantity) * multiplier || 0;

    // 1️⃣ Try raw product price
    const rawCost = calculateIngredientPrice({
      ingredientName: ing.item,
      usedQty: qty,
      usedUnit: ing.unit,
    });

    if (rawCost > 0) return sum + rawCost;

    // 2️⃣ Fallback → nested recipe
    const nestedCost = calculateRecipeCost(
      ing.item,
      qty / (Number(ing.quantity) || 1),
      depth + 1
    );

    return sum + nestedCost;
  }, 0);
}
