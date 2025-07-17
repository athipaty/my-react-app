import { useState } from 'react';

// Your recipe data
const recipes = [
  {
    name: 'Pad Thai',
    image: '/images/pad-thai.jpg',
    ingredients: [
      {
        item: 'Rice Noodles',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/rice-noodles.jpg',
      },
      {
        item: 'Tofu',
        quantity: 100,
        unit: 'g',
        image: '/images/ingredients/tofu.jpg',
      },
      {
        item: 'Tamarind Paste',
        quantity: 2,
        unit: 'tbsp',
        image: '/images/ingredients/tamarind.jpg',
      },
    ],
  },
  {
    name: 'Green Curry',
    image: '/images/green-curry.jpg',
    ingredients: [
      {
        item: 'Chicken',
        quantity: 300,
        unit: 'g',
        image: '/images/ingredients/chicken.jpg',
      },
      {
        item: 'Coconut Milk',
        quantity: 400,
        unit: 'ml',
        image: '/images/ingredients/coconut-milk.jpg',
      },
      {
        item: 'Green Curry Paste',
        quantity: 50,
        unit: 'g',
        image: '/images/ingredients/green-curry-paste.jpg',
      },
    ],
  },
];

export function Sgo() {
  const [query, setQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [multiplier, setMultiplier] = useState(1);

  const filtered = query
    ? recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen p-8 bg-gray-50 text-center">
      {/* Search Bar */}
      <input
        className="w-1/2 p-3 border rounded text-lg"
        placeholder="Search your recipe..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedRecipe(null);
        }}
      />

      {/* Recipe List */}
      {query && !selectedRecipe && (
        <ul className="mt-6 space-y-4">
          {filtered.map((recipe) => (
            <li key={recipe.name} className="flex items-center gap-4 justify-center">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-20 h-20 object-cover rounded shadow"
              />
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => {
                  setSelectedRecipe(recipe);
                  setMultiplier(1);
                }}
              >
                {recipe.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Recipe Detail View */}
      {selectedRecipe && (
        <div className="mt-10">
          <button
            onClick={() => setSelectedRecipe(null)}
            className="text-sm underline text-blue-600 mb-4 block"
          >
            ← Back to search
          </button>

          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            className="w-full max-h-[400px] object-cover rounded-lg shadow mb-6"
          />

          <h2 className="text-2xl font-bold mb-4">{selectedRecipe.name}</h2>

          <div className="mb-4">
            <label>Adjust Quantity: </label>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={multiplier}
              onChange={(e) => setMultiplier(parseFloat(e.target.value))}
              className="border p-2 w-20 ml-2"
            />
          </div>

          <table className="mx-auto border-collapse w-full max-w-3xl text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Ingredient</th>
                <th className="px-4 py-2 border">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {selectedRecipe.ingredients.map((ing) => (
                <tr key={ing.item} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    <img
                      src={ing.image}
                      alt={ing.item}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 border">{ing.item}</td>
                  <td className="px-4 py-2 border">
                    {(ing.quantity * multiplier).toFixed(0)} {ing.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
