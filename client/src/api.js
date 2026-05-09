import axios from "axios";

const BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({ baseURL: BASE });

export async function fetchRecipes() {
  const { data } = await api.get("/api/recipes");
  return data;
}

export async function seedRecipes(recipes) {
  const { data } = await api.post("/api/recipes/seed", recipes);
  return data;
}

export async function updateRecipe(id, recipe) {
  const { data } = await api.put(`/api/recipes/${id}`, recipe);
  return data;
}

export async function uploadImage(file) {
  const form = new FormData();
  form.append("image", file);
  const { data } = await api.post("/api/recipes/upload-image", form);
  return data.url;
}
