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
  {
    name: 'Yuzu Kosho',
    image: '/images/yozu-kosho.jpg',
    ingredients: [
      {
        item: 'Seasoned Salt',
        quantity: 420,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'Miwon',
        quantity: 60,
        unit: 'g',
        image: '/images/ingredients/miwom.jpg',
      },
      {
        item: 'Black Pepper Powder',
        quantity: 45,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.jpg',
      },
      {
        item: 'Yuju Cheong',
        quantity: 3900,
        unit: 'g',
        image: '/images/ingredients/yuju-cheong.jpg',
      },
      {
        item:'Korean Chili',
        quantity: 9000,
        unit: 'g',
        image: '/images/ingredients/korean-chili.jpg',
      }
    ]
  },
  {
    name: 'Sriracha Mayo',
    iamge: '/images/sriracha-mayo.jpg',
    ingredients: [
      {
        item: 'Sichimi',
        quantity: 420,
        unit: 'g',
        image: '/images/ingredients/sichimi.jpg',
      },
      {
        item: 'White Sugar',
        quantity: 1050,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Mirin',
        quantity: 420,
        unit: 'g',
        image: '/images/ingredients/mirin.jpg',
      },
      {
        item: 'Sriracha Sauce',
        quantity: 1575,
        unit: 'g',
        image: '/images/ingredients/sriracha-sauce.jpg',
      },
      {
        item : 'Mayonnaise',
        quantity: 7770,
        unit: 'g',
        image: '/images/ingredients/mayonnaise.jpg',
      }
    ]
  }
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
        className="w-1/2 p-3 border rounded text-m text-center"
        placeholder="Miso Sauce"
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
