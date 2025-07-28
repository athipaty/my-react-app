import { useState } from 'react';
import recipes from './recipes.js'; // Adjust path if needed

export function Sgo() {
  const [query, setQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [multiplier, setMultiplier] = useState(1);
  const [fullImage, setFullImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false); // NEW: to track fullscreen image load

  const filtered = query
    ? recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen p-8 bg-gray-50 text-center relative">
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
            <li
              key={recipe.name}
              className="flex items-center gap-2 justify-between"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                loading="eager"
                className="w-10 h-10 object-cover rounded shadow cursor-pointer transition-opacity duration-300 opacity-100"
                onClick={() => {
                  setFullImage(recipe.image);
                  setImageLoaded(false); // reset when new image opens
                }}
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
                .sort(
                  (a, b) =>
                    b.quantity * multiplier - a.quantity * multiplier
                )
                .map((ing) => (
                  <tr key={ing.item} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">
                      <img
                        src={ing.image}
                        alt={ing.item}
                        loading="eager"
                        className="w-12 h-12 object-cover rounded cursor-pointer transition-opacity duration-300 opacity-100"
                        onClick={() => {
                          setFullImage(ing.image);
                          setImageLoaded(false); // reset load state
                        }}
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

      {/* Fullscreen Image Overlay */}
      {fullImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => {
            setFullImage(null);
            setImageLoaded(false);
          }}
        >
          <img
            src={fullImage}
            alt="Fullscreen"
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      )}
    </div>
  );
}
