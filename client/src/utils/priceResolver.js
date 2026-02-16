import products from "../productPrice";
import { convertUnit } from "./unitConverter";
import { calculateRecipeCost } from "./recipeCostResolver";

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
    const baseWeight = product.weight.value;
    const baseUnit = product.weight.unit;

    // convert ingredient qty → product unit
    const convertedQty = convertUnit(
      usedQty,
      usedUnit,
      baseUnit
    );

    if (convertedQty === null) return 0;

    return (convertedQty / baseWeight) * product.price;
  }

  // 2️⃣ Nested recipe pricing
  return calculateRecipeCost(ingredientName, usedQty);
}


