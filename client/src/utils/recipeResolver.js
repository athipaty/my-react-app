import recipes from "../recipes";

const recipeIndex = recipes.reduce((acc, r) => {
  acc[r.name.toLowerCase().trim()] = r;
  return acc;
}, {});

const aliasMap = {
  "non alcohol - sancho soy sauce": "Sancho Soy Sauce",
};

export function resolveLinkedRecipe(itemName) {
  if (typeof itemName !== "string") return null;

  const key = itemName.toLowerCase().trim();
  if (recipeIndex[key]) return recipeIndex[key];

  const alias = aliasMap[key];
  return alias ? recipeIndex[alias.toLowerCase()] : null;
}


