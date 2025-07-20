import { useState } from 'react';

// Your recipe data
const recipes = [
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
        item: 'Korean Chili',
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
        item: 'Mayonnaise',
        quantity: 7770,
        unit: 'g',
        image: '/images/ingredients/mayonnaise.jpg',
      }
    ]
  },
  {
    name: 'Garlic Sauce',
    image: '/images/garlic sauce.jpg',
    ingredients: [
      {
        item: 'Minced Garlic',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg',
      },
      {
        item: 'White Sugar',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Miwon',
        quantity: 100,
        unit: 'g',
        image: '/images/ingredients/miwon.jpg',
      },
      {
        item: 'Black Pepper Powder',
        quantity: 20,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.jpg',
      },
      {
        item: 'Seasoned Salt',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'White Onion',
        quantity: 2000,
        unit: 'g',
        image: '/images/ingredients/white-onion.jpg',
      },
      {
        item: 'Plum Extract',
        quantity: 280,
        unit: 'g',
        image: '/images/ingredients/plum-extract.jpg',
      },
      {
        item: 'Corn Oil',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/corn-oil.jpg',
      },
      {
        item: 'Sesame Oil',
        quantity: 400,
        unit: 'g',
        image: '/images/ingredients/sesame-oil.jpg',
      }
    ]
  },
  {
    name: 'Radish Kimchi',
    image: '/images/radish-kimchi.jpg',
    ingredients: [
      {
        item: 'Radish',
        quantity: 20,
        unit: 'Kg',
        image: '/images/ingredients/radish.jpg',
      },
      {
        item: 'Spring Onion',
        quantity: 600,
        unit: 'g',
        image: '/images/ingredients/spring-onion.jpg',
      },
      {
        item: 'Kimchi Sauce',
        quantity: 2.4,
        unit: 'Kg',
        image: '/images/ingredients/kimchi-sauce.jpg',
      },
      {
        item: 'Coarse Sea Salt',
        quantity: 400,
        unit: 'g',
        image: '/images/ingredients/coarse-sea-salt.jpg',
      },
      {
        item: 'New sugar',
        quantity: 20,
        unit: 'g'
      }
    ]
  },
  {
    name: 'Sancho Soy Sauce',
    image: '/images//sancho-soy-sauce.jpg',
    ingredients: [
      {
        item: 'White Sugar',
        quantity: 3600,
        unit: 'g',
        image: '/images/ingredients/white-sugar.jpg',
      },
      {
        item: 'Seasoned Salt',
        quantity: 80,
        unit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg',
      },
      {
        item: 'Vietnamese Dried Chili',
        quantity: 20,
        unit: 'g',
        image: '/images/ingredients/vietnamese-dried-chili.jpg',
      },
      {
        item: 'Sancho Powder',
        quantity: 80,
        unit: 'g',
        image: '/images/ingredients/sancho-powder.jpg',
      },
      {
        item: 'Black Pepper Power',
        quantity: 40,
        unit: 'g',
        image: '/images/ingredients/black-pepper-powder.jpg',
      },
      {
        item: 'Rice Wine',
        quantity: 480,
        unit: 'g',
        image: '/images/ingredients/rice-wine.jpg',       
      },
      {
        item: 'Kikoman Soy Sauce',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/kikoman-say-sauce.jpg',
      },
      {
        item: 'Plum Extract',
        quantity: 1200,
        unit: 'g',
        image: '/images/ingredients/plum-extract.jpg',
      },
      {
        item: 'Water',
        quantity: 12000,
        unit: 'g',
        image: '/images/ingredients/water.jpg',
      },
      {
        item: 'Potato Starch',
        quantity: 440,
        unit: 'g',
        image: '/images/ingredients/potato-starch.jpg',
      },
      {
        item: 'Water for Potato Starch',
        quantity: 440,
        unit: 'g',
        image: '/images/ingredients/water.jpg',
      }
    ]
  },
  {
    name: 'Dipping Sauce',
    image: '/images//dipping-sauce.jpg',
    ingredients: [
      {
        item: 'Minced Garlic',
        quantity: 2100,
        unit: 'g',
        image: '/images/ingredients/minced-garlic.jpg',
      },
      {
        item: 'Chopped Leek',
        quantity: 2100,
        unit: 'g',
        image: '/images/ingredients/chopped-leek.jpg',
      },
      {
        item: 'Sugar',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/suar.jpg',
      },
      {
        item: 'Soy Sauce',
        quantity: 6300,
        unit: 'g',
        image: '/images/ingredients/soy-sauce.jpg',
      },
      {
        item: 'Vinegar',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/vinegar.jpg',
      },
      {
        item: 'Fine Chilli Powder',
        quantity: 700,
        unit: 'g',
        image: '/images/ingredients/fine-chilli-powder.jpg'
      },
      {
        item: 'Mirin',
        quantity: 1750,
        unit: 'g',
        image: '/images/ingredients/mirin.jpg'
      },
      {
        item: 'Sesame Seeds',
        quantity: 700,
        unit: 'g',
        image: '/images/ingredients/sesame-seeds.jpg'
      }
    ]
  },
  {
    name: 'Rice Ball',
    image: '/images//rice-ball.jpg',
    ingredients: [
      {
        item: 'Cooked Rice',
        quantity: 4000,
        unit: 'g',
        image: '/images/ingredients/cooked-rice.jpg'
      },
      {
        item: 'Seaweed Flake',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/seaweed-flake.jpg'
      },
      {
        item: 'Tenkasu',
        quantity: 240,
        unit: 'g',
        image: '/images/ingredients/tenkasu.jpg'
      },
      {
        item: 'Seansoned Salt',
        quantity: 13,
        unit: 'g',
        image: '/images/ingredients/Seasoned-salt.jpg'
      },
      {
        item: 'Sesame Oil',
        quantity: '40',
        unit: 'g',
        image: '/images/ingredients/sesame-oil.jpg'
      }
    ]
  },
  {
    name: 'Kimchi Paste',
    image: '/images//kimchi-paste-.jpg',
    ingredients: [
      {
        item: 'Coarse Chilli Powder',
        quantity: 3000,
        unit: 'g',
        image: '/images/ingredients/coarse-chilli-powder.jpg'
      },
      {
        item: 'Garlic',
        quantity: 650,
        unit: 'g',
        image: '/images/ingredients/garlic.jpg'
      },
      {
        item: 'Onion',
        quantity: 1300,
        unit: 'g',
        image: '/images/ingredients/onion.jpg'
      },
      {
        item: 'Salted Prawn',
        quantity: 750,
        unit: 'g',
        image: '/images/ingredients/salted-prawn.jpg'
      },
      {
        item: 'Brown Pear',
        quantity: 1500,
        unit: 'g',
        image: '/images/ingredients/brown-pear.jpg'
      },
      {
        item: 'Sugar',
        quantity: 1000,
        unit: 'g',
        image: '/images/ingredients/sugar.jpg'
      },
      {
        item: 'Fish Sauce',
        quantity: 0,
        unit: 'g',
        image: '/images/ingredients/fish-sauce.jpg'
      },
      {
        item: 'Miwon',
        quantity: 100,
        unit: 'g',
        image: '/images/ingredients/miwon.jpg'
      },
      {
        item: 'Glutinous Rice Flour',
        quantity: 120,
        unit: 'g',
        image: '/images/ingredients/glutinous-rice-fllour.jpg'
      },
      {
        item: 'Water',
        quantity: 1200,
        unit: 'g',
        image: '/images/ingredients/water.jpg'
      }
    ]
  },
  {
    name: 'Egg Roll',
    image: '/images/egg-roll.jpg',
    ingredients: [
      {
        item: 'Egg',
        quantity: 4,
        unit: 'L',
        image: '/images/ingredients/egg.jpg'
      },
      {
        item: 'Water',
        quantity: 500,
        unit: 'ml',
        image: '/images/ingredients/water.jpg'
      },
      {
        item: 'Mirin',
        quantity: 200,
        unit: 'ml',
        image: '/images/ingredients/mirin.jpg'
      },
      {
        item: 'Seasoned Salt',
        quantity: 25,
        uniit: 'g',
        image: '/images/ingredients/seasoned-salt.jpg'
      },
      {
        item: 'Carrot',
        quantity: 400,
        unit: 'g',
        image: '/images/ingredients/carrot.jpg'
      },
      {
        item: 'Spring Onion',
        quantity: 200,
        unit: 'g',
        image: '/images/ingredients/sring-onion.jpg'
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
        <ul className="mt-4 space-y-4">
          {filtered.map((recipe) => (
            <li key={recipe.name} className="flex items-center gap-2 justify-between">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-10 h-10 object-cover rounded shadow"
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
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-2">{selectedRecipe.name}</h2>

          <div className="mb-2">
            <label>Adjust Quantity: </label>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={multiplier}
              onChange={(e) => setMultiplier(parseFloat(e.target.value))}
              className="border p-2 w-20 ml-2 text-center"
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
              {[...selectedRecipe.ingredients]
                .sort((a, b) => b.quantity * multiplier - a.quantity * multiplier)
                .map((ing) => (
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
