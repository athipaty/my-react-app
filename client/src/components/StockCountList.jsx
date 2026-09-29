import { useState, useEffect, useRef } from "react";

const UNITS = ["g", "kg", "ml", "L", "pack", "piece", "bottle", "tube", "tin"];

function CountEditor({ count, name, onSave }) {
  const [value, setValue] = useState(String(count?.qty ?? ""));
  const [unit, setUnit] = useState(count?.unit || "g");
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const commit = () => onSave({ name, qty: Number(value) || 0, unit });

  return (
    <div className="flex items-center gap-1 shrink-0">
      <input
        ref={inputRef}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") commit(); if (e.key === "Escape") onSave(null); }}
        className="w-16 text-xs border border-green-400 dark:bg-gray-700 dark:text-gray-100 rounded px-1.5 py-0.5 text-center focus:outline-none"
      />
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="text-xs border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded px-1 py-0.5 focus:outline-none"
      >
        {UNITS.map((u) => <option key={u}>{u}</option>)}
      </select>
      <button onClick={commit} className="text-xs text-green-600 font-semibold px-1">✓</button>
    </div>
  );
}

export default function StockCountList({ recipes = [], counts = [], onImage, onSaveCount }) {
  const [editingKey, setEditingKey] = useState(null);
  const [query, setQuery] = useState("");

  const countMap = new Map(counts.map((c) => [c.name.toLowerCase().trim(), c]));

  const imageMap = {};
  recipes.forEach((r) => {
    r.ingredients?.forEach((ing) => {
      const key = ing.item?.toLowerCase().trim();
      if (ing.image && key && !imageMap[key]) imageMap[key] = ing.image;
    });
  });

  const allIngredients = Array.from(
    new Map(
      recipes.flatMap((r) => r.ingredients || []).map((ing) => [ing.item?.toLowerCase().trim(), ing])
    ).values()
  ).sort((a, b) => (a.item || "").localeCompare(b.item || ""));

  const lcQuery = query.toLowerCase().trim();
  const visibleIngredients = lcQuery
    ? allIngredients.filter((ing) => ing.item?.toLowerCase().includes(lcQuery))
    : allIngredients;

  const handleSave = async (draft) => {
    setEditingKey(null);
    if (!draft || !onSaveCount) return;
    await onSaveCount(draft);
  };

  return (
    <div className="animate-fade-slide-in">
      <div className="mb-3 flex items-center gap-2 px-1">
        <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">Inventory</span>
        <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-1.5 py-0.5 rounded-full">{visibleIngredients.length}</span>
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search ingredients..."
        className="w-full mb-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
      />

      <div className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-xl overflow-hidden">
        {visibleIngredients.map((ing, j) => {
          const key = ing.item?.toLowerCase().trim();
          const ingImage = ing.image || imageMap[key] || "";
          const count = countMap.get(key);
          const isEditing = editingKey === key;
          return (
            <div key={j} className={`flex items-center gap-3 px-3 py-2 ${j !== 0 ? "border-t border-gray-50 dark:border-gray-700" : ""}`}>
              {ingImage ? (
                <img src={ingImage} alt={ing.item} className="w-9 h-9 rounded-lg object-cover shrink-0 cursor-pointer" onClick={() => onImage?.(ingImage)} />
              ) : (
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 shrink-0 flex items-center justify-center text-gray-300 dark:text-gray-500 text-lg">🧂</div>
              )}
              <div className="flex-1 min-w-0">
                <span className="text-sm text-gray-700 dark:text-gray-200">{ing.item}</span>
                <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                  {count ? `Counted: ${count.qty} ${count.unit}` : "Not counted yet"}
                </p>
              </div>

              {isEditing ? (
                <CountEditor
                  count={count}
                  name={ing.item}
                  onSave={handleSave}
                />
              ) : (
                <button
                  onClick={() => setEditingKey(key)}
                  className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 transition-colors min-w-[52px] text-center"
                >
                  {count ? `${count.qty} ${count.unit}` : "— count"}
                </button>
              )}
            </div>
          );
        })}
        {visibleIngredients.length === 0 && (
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-6">
            {query ? `No ingredients found for "${query}"` : "No ingredients yet"}
          </p>
        )}
      </div>
    </div>
  );
}
