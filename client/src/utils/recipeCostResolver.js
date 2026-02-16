import recipes from "../recipes";
import { calculateIngredientPrice } from "./priceResolver";
import { convertUnit } from "./unitConverter";

const recipeIndex = recipes.reduce((acc, r) => {
  acc[r.name.toLowerCase().trim()] = r;
  return acc;
}, {});

const MAX_DEPTH = 5;

export function calculateRecipeCost(recipeName, usedQty, depth = 0) {
  if (!recipeName || usedQty <= 0 || depth > MAX_DEPTH) return 0;

  const recipe = recipeIndex[recipeName.toLowerCase().trim()];
  if (!recipe) return 0;

  /* 1️⃣ total output weight of this recipe (normalized to grams) */
  const totalRecipeWeight = recipe.ingredients.reduce((sum, ing) => {
    const qty = Number(ing.quantity) || 0;
    const converted = convertUnit(qty, ing.unit, "g");
    return sum + (converted ?? 0);
  }, 0);

  if (totalRecipeWeight <= 0) return 0;

  /* 2️⃣ calculate FULL recipe cost */
  const fullRecipeCost = recipe.ingredients.reduce((sum, ing) => {
    const qty = Number(ing.quantity) || 0;

    // 🔧 THIS IS THE "INSIDE REDUCE" PART
    const convertedQty = convertUnit(qty, ing.unit, "g");
    if (convertedQty === null) return sum;

    // Try raw product price
    const rawCost = calculateIngredientPrice({
      ingredientName: ing.item,
      usedQty: convertedQty,
      usedUnit: "g",
    });

    if (rawCost > 0) return sum + rawCost;

    // Fallback → nested recipe
    const nestedCost = calculateRecipeCost(
      ing.item,
      convertedQty,
      depth + 1
    );

    return sum + nestedCost;
  }, 0);

  /* 3️⃣ SCALE cost by how much is used */
  const usedQtyInGrams = convertUnit(usedQty, "g", "g") ?? 0;

  return (usedQtyInGrams / totalRecipeWeight) * fullRecipeCost;
}
