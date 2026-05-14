import axios from "axios";

const BASE =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://center-kitchen-backend.onrender.com"
    : "http://localhost:5000");

const api = axios.create({ baseURL: BASE });

export async function fetchRecipes() {
  const { data } = await api.get("/api/recipes");
  return data;
}

export async function seedRecipes(recipes) {
  const { data } = await api.post("/api/recipes/seed", recipes);
  return data;
}

export async function createRecipe(recipe) {
  const { data } = await api.post("/api/recipes", recipe);
  return data;
}

export async function updateRecipe(id, recipe) {
  const { data } = await api.put(`/api/recipes/${id}`, recipe);
  return data;
}

export async function fetchIngredients() {
  const { data } = await api.get("/api/ingredients");
  return data;
}

export async function saveIngredient(ingredient) {
  const { data } = await api.post("/api/ingredients", ingredient);
  return data;
}

export async function fetchInventoryFilter() {
  const { data } = await api.get("/api/inventory-filter");
  return data;
}

export async function saveInventoryFilter(excluded) {
  const { data } = await api.put("/api/inventory-filter", { excluded });
  return data;
}

export async function uploadImage(file) {
  const form = new FormData();
  form.append("image", file);
  const { data } = await api.post("/api/recipes/upload-image", form);
  return data.url;
}
