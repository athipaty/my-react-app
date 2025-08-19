import { useEffect, useRef, useState } from "react";
import recipes from "./recipes.js"; // Adjust path if needed

// helpers (short + robust)
const fmt = (n) => n.toFixed(2).replace(/\.?0+$/, ""); // up to 2 dp
const valid = (s) => /^(\d+(\.\d*)?|\.\d+)$/.test(s); // 1 | 1. | 1.2 | .5 | 0.5
const strip0 = (s) =>
  s.startsWith("0.") || s === "" || s === "." ? s : s.replace(/^0+(?=\d)/, ""); // "02" -> "2", keep "0."

export function Sgo() {
  const [query, setQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [multiplier, setMultiplier] = useState(1);
  const [fullImage, setFullImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [searchPlaceholder, setSearchPlaceholder] = useState("Miso Sauce");

  // text shown in each Quantity input, keyed by ingredient name
  const [qtyInputs, setQtyInputs] = useState({});

  // original/base quantities for the selected recipe (do not change)
  const baseQty = useRef({}); // { [itemName]: number }

  // when a recipe is chosen, capture base quantities and seed inputs
  // When recipe changes: capture base quantities and seed inputs (no multiplier read here)
  useEffect(() => {
    if (!selectedRecipe) return;
    const base = {};
    selectedRecipe.ingredients.forEach((ing) => {
      base[ing.item] = Number(ing.quantity) || 0;
    });
    baseQty.current = base;

    // seed inputs with base only; multiplier effect below will update them next
    const seeded = {};
    selectedRecipe.ingredients.forEach((ing) => {
      seeded[ing.item] = fmt(base[ing.item] || 0);
    });
    setQtyInputs(seeded);
  }, [selectedRecipe]);

  // When multiplier changes (or recipe changes), scale quantities accordingly
  useEffect(() => {
    if (!selectedRecipe) return;
    setQtyInputs((prev) => {
      const next = { ...prev };
      selectedRecipe.ingredients.forEach((ing) => {
        const base = baseQty.current[ing.item] || 0;
        next[ing.item] = fmt(base * multiplier);
      });
      return next;
    });
  }, [multiplier, selectedRecipe]);

  // user edits a specific ingredient's quantity: scale all by factor
  const onQtyChange = (itemName, raw) => {
    const v = strip0(raw);
    setQtyInputs((prev) => ({ ...prev, [itemName]: v }));

    // allow pausing at "" or trailing "."
    if (v === "" || v.endsWith(".")) return;

    if (valid(v)) {
      const num = parseFloat(v);
      const base = baseQty.current[itemName] || 0;
      const factor = base === 0 ? 0 : num / base;
      setMultiplier(factor); // this will re-render all inputs via the effect
    }
  };

  const onQtyBlur = (itemName) => {
    const v = qtyInputs[itemName];
    if (v === "" || v.endsWith(".")) {
      const base = baseQty.current[itemName] || 0;
      setQtyInputs((prev) => ({ ...prev, [itemName]: fmt(base * multiplier) }));
    }
  };

  const filtered = query
    ? recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen p-2 bg-gray-50 text-center relative flex flex-col items-center">
      <div className="max-w-md w-full">
        {/* Search Bar */}
        <input
          className="w-1/2 p-3 border rounded text-m text-center"
          placeholder={searchPlaceholder} // ⬅️ use dynamic placeholder
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedRecipe(null); // your existing behavior
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
                    setImageLoaded(false);
                  }}
                />
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => {
                    setSelectedRecipe(recipe);
                    setMultiplier(1);
                    setSearchPlaceholder(recipe.name); // ⬅️ update default placeholder
                    setQuery(""); // ⬅️ clear input so placeholder is visible
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
          <div className="mt-2">
            <h2 className="text-2xl font-bold mb-2">{selectedRecipe.name}</h2>
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
                    (a, b) => b.quantity * multiplier - a.quantity * multiplier
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
                            setImageLoaded(false);
                          }}
                        />
                      </td>
                      <td className="px-4 py-2 border">{ing.item}</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center gap-2">
                          <input
                            className="border px-2 py-1 rounded text-center w-24"
                            type="text"
                            inputMode="decimal"
                            value={qtyInputs[ing.item] ?? ""}
                            onChange={(e) =>
                              onQtyChange(ing.item, e.target.value)
                            }
                            onBlur={() => onQtyBlur(ing.item)}
                            placeholder="0"
                          />
                          <span className="text-gray-600">{ing.unit}</span>
                        </div>
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
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
