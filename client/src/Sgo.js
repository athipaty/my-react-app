// Sgo.js (pure JavaScript)
import { useEffect, useRef, useState } from "react";
import recipes from "./recipes.js"; // change to "./recipes.js" if your file is plural

/* ------------------------- Reusable Image Loader ------------------------- */
function ImageWithLoader({
  src,
  alt,
  onClick,
  wrapperClass = "",
  imgClass = "",
  loading = "eager",
  rounded = "rounded",
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${wrapperClass}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? `Open ${alt}` : undefined}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600 bg-gray-100">
          Image unavailable
        </div>
      )}

      {!error && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${imgClass} ${rounded} transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

/* ------------------------------ helpers --------------------------------- */
const fmt = (n) =>
  Number(n ?? 0)
    .toFixed(2)
    .replace(/\.?0+$/, "");
const valid = (s) => /^(\d+(\.\d*)?|\.\d+)$/.test(s);
const strip0 = (s) =>
  s?.startsWith("0.") || s === "" || s === "."
    ? s
    : s?.replace(/^0+(?=\d)/, "") ?? "";

// Build a quick index of recipes by name
const recipeIndex = recipes.reduce((acc, r) => {
  acc[r.name.toLowerCase().trim()] = r;
  return acc;
}, {});

// Aliases for ingredient->recipe near matches / variants (extend as needed)
const aliasMap = {
  "non alcohol - sancho soy sauce": "Sancho Soy Sauce",
};

function resolveLinkedRecipe(itemName) {
  if (!itemName) return null;
  const key = String(itemName).toLowerCase().trim();
  if (recipeIndex[key]) return recipeIndex[key];
  const alias = aliasMap[key];
  if (alias) return recipeIndex[String(alias).toLowerCase()];
  return null;
}

/* --------------------------------- App ---------------------------------- */
export default function Sgo() {
  const [query, setQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [history, setHistory] = useState([]); // stack of previous recipes
  const [multiplier, setMultiplier] = useState(1);
  const [fullImage, setFullImage] = useState(null);
  const [searchPlaceholder, setSearchPlaceholder] = useState("Miso Sauce");
  const [qtyInputs, setQtyInputs] = useState({}); // { [itemName]: string }
  const baseQty = useRef({}); // { [itemName]: number }

  // 🔹 NEW: search mode state
  // "recipe" = search by recipe name (original)
  // "ingredient" = search by ingredient name
  const [searchMode, setSearchMode] = useState("recipe");

  // ---- navigation helpers (history-aware) ----
  const openRecipe = (recipe) => {
    if (!recipe) return;
    if (selectedRecipe) {
      setHistory((prev) => [...prev, selectedRecipe]); // push current page
    }
    setSelectedRecipe(recipe);
    setMultiplier(1);
    setSearchPlaceholder(recipe.name);
    setQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1)); // pop
      setSelectedRecipe(prev);
      setMultiplier(1);
      setSearchPlaceholder(prev.name);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedRecipe(null);
      setMultiplier(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 🔹 NEW: toggle between recipe search and ingredient search
  const toggleSearchMode = () => {
    setSearchMode((prev) => (prev === "recipe" ? "ingredient" : "recipe"));
    // reset view when switching mode
    setQuery("");
    setSelectedRecipe(null);
    setHistory([]);
    setMultiplier(1);
  };

  // ---- capture base quantities & seed inputs when recipe changes ----
  useEffect(() => {
    if (!selectedRecipe) return;
    const base = {};
    selectedRecipe.ingredients.forEach((ing) => {
      const q = Number(ing.quantity) || 0;
      base[ing.item] = q;
    });
    baseQty.current = base;

    const seeded = {};
    selectedRecipe.ingredients.forEach((ing) => {
      const key = ing.item;
      const q = base[key] || 0;
      seeded[key] = fmt(q);
    });
    setQtyInputs(seeded);
  }, [selectedRecipe]);

  // ---- rescale inputs when multiplier (or recipe) changes ----
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

  const onQtyChange = (itemName, raw) => {
    const v = strip0(raw);
    setQtyInputs((prev) => ({ ...prev, [itemName]: v }));

    if (v === "" || v.endsWith(".")) return;

    if (valid(v)) {
      const num = parseFloat(v);
      const base = baseQty.current[itemName] || 0;
      const factor = base === 0 ? 0 : num / base;
      setMultiplier(factor); // triggers rescale via effect
    }
  };

  const onQtyBlur = (itemName) => {
    const v = qtyInputs[itemName];
    if (v === "" || v?.endsWith(".")) {
      const base = baseQty.current[itemName] || 0;
      setQtyInputs((prev) => ({ ...prev, [itemName]: fmt(base * multiplier) }));
    }
  };

  // 🔹 NEW: unified filtered list based on search mode
  const lcQuery = query.toLowerCase().trim();

  const filtered = lcQuery
    ? searchMode === "recipe"
      ? recipes
          .filter((r) => r.name.toLowerCase().includes(lcQuery))
          .sort((a, b) => a.name.localeCompare(b.name)) // A–Z
      : recipes
          .filter((r) =>
            r.ingredients?.some((ing) =>
              String(ing.item).toLowerCase().includes(lcQuery)
            )
          )
          .sort((a, b) => a.name.localeCompare(b.name))
    : [];

  return (
    <div className="min-h-screen p-2 pb-14 bg-gray-50 text-center relative flex flex-col items-center mt-4">
      <div className="max-w-md w-full">
        {/* Search Bar Row with Back + Search + Mode Switch */}
        <div className="flex items-center justify-between mb-4 w-full max-w-3xl px-2">
          {/* Back Button (show when in a detail view) */}
          {selectedRecipe ? (
            <button
              className="px-2 py-2 bg-gray-300 rounded hover:bg-gray-400 min-w-[44px]"
              onClick={goBack}
              title="Back"
            >
              ←
            </button>
          ) : (
            <div className="w-[44px]" />
          )}

          {/* Search Input */}
          <input
            className="mx-2 p-3 border rounded text-base text-center flex-grow"
            placeholder={
              searchMode === "recipe" ? searchPlaceholder : "Spring Onion"
            }
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedRecipe(null);
              // keep history so user can still go back if needed
            }}
          />

          {/* 🔹 Mode Switch Button (replaces Home) */}
          <div className="flex flex-col items-center min-w-[90px]">
            <button
              className={`
      px-2 py-2 text-white rounded text-xs w-full transition-colors
      ${
        searchMode === "recipe"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-yellow-500 hover:bg-yellow-600"
      }
    `}
              onClick={toggleSearchMode}
            >
              {searchMode === "recipe" ? "Recipe 🔍" : "Ingredient 🧂"}
            </button>

            <div className="text-[10px] text-gray-500 mt-1 text-center">
              {searchMode === "recipe"
                ? "Searching by recipe name"
                : "Searching by ingredient"}
            </div>
          </div>
        </div>

        {/* Recipe List */}
        {query && !selectedRecipe && (
          <ul className="mt-4 space-y-4">
            {filtered.map((recipe) => (
              <li
                key={recipe.name}
                className="flex flex-col items-center gap-2 justify-between"
              >
                <ImageWithLoader
                  src={recipe.image}
                  alt={recipe.name}
                  loading="eager"
                  wrapperClass="w-20 h-20 shadow cursor-pointer"
                  imgClass="w-20 h-20 object-cover"
                  onClick={() => setFullImage(recipe.image)}
                />

                <button
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => openRecipe(recipe)}
                >
                  {recipe.name}
                </button>

                {/* Optional: when in ingredient mode, show info */}
                {searchMode === "ingredient" && (
                  <p className="text-[11px] text-gray-500">
                    Uses ingredient matching:{" "}
                    <span className="font-semibold">
                      {recipe.ingredients
                        .map((ing) => ing.item)
                        .filter((item) => item.toLowerCase().includes(lcQuery))
                        .join(", ")}
                    </span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Recipe Detail View */}
        {selectedRecipe && (
          <div className="mt-2">
            <h2 className="text-2xl font-bold mb-2">{selectedRecipe.name}</h2>
            <table className="mx-auto border-collapse w-full max-w-3xl text-left shadow">
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
                      (Number(b.quantity) || 0) * multiplier -
                      (Number(a.quantity) || 0) * multiplier
                  )
                  .map((ing) => (
                    <tr key={ing.item} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">
                        <ImageWithLoader
                          src={ing.image}
                          alt={ing.item}
                          loading="eager"
                          wrapperClass="w-12 h-12 cursor-pointer"
                          imgClass="w-12 h-12 object-cover"
                          onClick={() => setFullImage(ing.image)}
                        />
                      </td>

                      <td className="px-2 py-2 border">
                        {(() => {
                          const target = resolveLinkedRecipe(ing.item);
                          if (target) {
                            return (
                              <button
                                type="button"
                                className="text-blue-600 text-start hover:text-blue-800 underline underline-offset-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                                title={`Open ${target.name}`}
                                onClick={() => openRecipe(target)}
                              >
                                {ing.item}
                              </button>
                            );
                          }
                          return (
                            <span className="text-gray-900">{ing.item}</span>
                          );
                        })()}
                      </td>

                      <td className="px-2 py-2 border">
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
            onClick={() => setFullImage(null)}
          >
            <ImageWithLoader
              src={fullImage}
              alt="Fullscreen"
              loading="eager"
              wrapperClass="max-w-[95vw] max-h-[90vh]"
              imgClass="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {/* Method */}
        {selectedRecipe?.method && (
          <section className="mt-8 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-3">Cooking Method</h3>
            <p className="whitespace-pre-line leading-relaxed text-gray-700">
              {selectedRecipe.method}
            </p>
          </section>
        )}
      </div>

      <footer className="fixed bottom-0 inset-x-0 border-t bg-white/90 backdrop-blur px-4 py-3 text-center text-sm text-gray-600 z-40">
        Powered by <strong>TingTong</strong>
      </footer>
    </div>
  );
}
