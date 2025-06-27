import { useState } from "react";

export function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientWeight, setIngredientWeight] = useState('');
  const [ingredients, setIngredients] = useState([]);

  // Add an ingredient to the list
  const addIngredient = () => {
    if (ingredientName.trim() === '' || ingredientWeight.trim() === '') {
      alert('Please enter both name and weight for the ingredient.');
      return;
    }

    setIngredients([...ingredients, { name: ingredientName, weight: ingredientWeight }]);
    setIngredientName('');
    setIngredientWeight('');
  };

  // Submit the whole recipe
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name,
      instructions,
      ingredients,
    };

    setRecipes([...recipes, newRecipe]);

    // Reset everything
    setName('');
    setInstructions('');
    setIngredients([]);
  };

 return (
  <div className="min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">📚 Recipe Book</h1>

    <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
      
      {/* Recipe Form */}
      <div className="md:w-1/2 bg-white p-6 rounded shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Ingredient Inputs */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Ingredient"
              className="flex-1 border p-2 rounded"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Weight (e.g. 100g)"
              className="w-full sm:w-32 border p-2 rounded"
              value={ingredientWeight}
              onChange={(e) => setIngredientWeight(e.target.value)}
            />
            <button
              type="button"
              className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
              onClick={addIngredient}
            >
              Add
            </button>
          </div>

          {/* Ingredient Preview */}
          {ingredients.length > 0 && (
            <ul className="bg-gray-50 p-2 rounded text-sm">
              {ingredients.map((ing, index) => (
                <li key={index}>• {ing.name} - {ing.weight}</li>
              ))}
            </ul>
          )}

          <textarea
            placeholder="Instructions"
            className="w-full border p-2 rounded"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Save Recipe
          </button>
        </form>
      </div>

      {/* Recipe List */}
      <div className="md:w-1/2 space-y-4">
        {recipes.length === 0 ? (
          <p className="text-center text-gray-500">No recipes yet.</p>
        ) : (
          recipes.map((recipe, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-2">
                #{index + 1}: {recipe.name}
              </h2>
              <p><strong>Ingredients:</strong></p>
              <ul className="list-disc pl-6 text-sm mb-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing.name} – {ing.weight}</li>
                ))}
              </ul>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);
}