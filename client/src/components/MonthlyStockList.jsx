import { useState, useEffect, useRef } from "react";
import monthlyStockSeed from "../monthlyStock";

const UNITS = ["PKT", "KG", "CTN", "BOX", "BTL", "TIN", "TUB", "ROLL", "PC", "TRAY", "EA", "DRUM", "PCS", "g", "kg", "L", "ml"];

const SUPPLIER_ORDER = monthlyStockSeed.map((g) => g.supplier);

function QtyEditor({ item, onSave }) {
  const [value, setValue] = useState(String(item.qty || ""));
  const [unit, setUnit] = useState(item.unit || "");
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const commit = () =>
    onSave({ supplier: item.supplier, name: item.name, unit, qty: Number(value) || 0 });

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

export default function MonthlyStockList({ items = [], onSaveItem }) {
  const [editingKey, setEditingKey] = useState(null);
  const [query, setQuery] = useState("");

  const lcQuery = query.toLowerCase().trim();

  const groups = SUPPLIER_ORDER.map((supplier) => ({
    supplier,
    items: items
      .filter((it) => it.supplier === supplier)
      .filter((it) => (lcQuery ? it.name.toLowerCase().includes(lcQuery) : true)),
  })).filter((g) => g.items.length > 0);

  const handleSave = async (draft) => {
    setEditingKey(null);
    if (!draft || !onSaveItem) return;
    await onSaveItem(draft);
  };

  return (
    <div className="animate-fade-slide-in">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search monthly stock..."
        className="w-full mb-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
      />

      {groups.length === 0 && (
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-16">
          {query ? `No items found for "${query}"` : "Loading monthly stock..."}
        </p>
      )}

      {groups.map((group) => (
        <div key={group.supplier} className="mb-4">
          <div className="mb-2 px-1">
            <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">{group.supplier}</span>
            <span className="ml-2 text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-1.5 py-0.5 rounded-full">{group.items.length}</span>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-xl overflow-hidden">
            {group.items.map((item, j) => {
              const key = `${item.supplier}::${item.name}`;
              const isEditing = editingKey === key;
              return (
                <div key={key} className={`flex items-center gap-3 px-3 py-2 ${j !== 0 ? "border-t border-gray-50 dark:border-gray-700" : ""}`}>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{item.unit}</p>
                  </div>

                  {isEditing ? (
                    <QtyEditor item={item} onSave={handleSave} />
                  ) : (
                    <button
                      onClick={() => setEditingKey(key)}
                      className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 transition-colors min-w-[52px] text-center"
                    >
                      {item.qty > 0 ? `${item.qty} ${item.unit}` : "— qty"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
