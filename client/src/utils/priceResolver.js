import products from "../productPrice";
import { calculateRecipeCost } from "./recipeCostResolver";

// build fast lookup table
const priceIndex = products.reduce((acc, p) => {
  acc[p.name.toLowerCase().trim()] = p;
  return acc;
}, {});

export function calculateIngredientPrice({
  ingredientName,
  usedQty,
  usedUnit,
}) {
  if (!ingredientName || usedQty <= 0) return 0;

  const key = ingredientName.toLowerCase().trim();
  const product = priceIndex[key];

  // 1️⃣ Raw product pricing
  if (product?.price && product?.weight?.value) {
    if (product.weight.unit !== usedUnit) return 0;
    return (usedQty / product.weight.value) * product.price;
  }

  // 2️⃣ Fallback → recipe pricing
  return calculateRecipeCost(ingredientName);
}

