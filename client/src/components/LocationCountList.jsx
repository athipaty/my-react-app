import { useState, useRef, useEffect } from "react";

const UNITS = ["PKT", "KG", "CTN", "BOX", "BTL", "TIN", "TUB", "ROLL", "PC", "TRAY", "EA", "DRUM", "PCS", "g", "kg", "L", "ml"];

function QtyEditor({ item, onSave }) {
  const [value, setValue] = useState(String(item.qty ?? ""));
  const [unit, setUnit] = useState(item.unit || "g");
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const commit = () => onSave({ ...item, unit, qty: Number(value) || 0 });

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

function AddItemForm({ location, onAdd, onCancel, knownNames = [], knownUnits = {} }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("g");
  const nameRef = useRef(null);

  useEffect(() => { nameRef.current?.focus(); }, []);

  const onNameBlur = () => {
    const match = knownUnits[name.trim().toLowerCase()];
    if (match) setUnit(match);
  };

  const submit = () => {
    if (!name.trim()) return;
    onAdd({ location, name: name.trim(), qty: Number(qty) || 0, unit });
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20">
      <input
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={onNameBlur}
        placeholder="Item name"
        autoComplete="off"
        list="known-location-item-names"
        className="flex-1 min-w-0 text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-400"
      />
      <datalist id="known-location-item-names">
        {knownNames.map((n) => <option key={n} value={n} />)}
      </datalist>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        placeholder="Qty"
        className="w-16 text-xs border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded px-1.5 py-1 text-center focus:outline-none"
      />
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="text-xs border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded px-1 py-1 focus:outline-none"
      >
        {UNITS.map((u) => <option key={u}>{u}</option>)}
      </select>
      <button onClick={submit} className="text-xs bg-green-500 text-white font-semibold px-2 py-1 rounded">Add</button>
      <button onClick={onCancel} className="text-xs text-gray-400 dark:text-gray-500 px-1">✕</button>
    </div>
  );
}

export default function LocationCountList({ location, items = [], onBack, onSaveItem, onDeleteItem, knownNames = [], knownUnits = {} }) {
  const [editingId, setEditingId] = useState(null);
  const [adding, setAdding] = useState(false);

  const handleSave = async (draft) => {
    setEditingId(null);
    if (!draft || !onSaveItem) return;
    await onSaveItem(draft);
  };

  const handleAdd = async (draft) => {
    setAdding(false);
    if (!onSaveItem) return;
    await onSaveItem(draft);
  };

  return (
    <div className="animate-fade-slide-in">
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={onBack}
          className="text-sm text-gray-500 dark:text-gray-400 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded"
        >
          ← Back
        </button>
        <span className="text-sm font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">{location}</span>
        <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-1.5 py-0.5 rounded-full">{items.length}</span>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-xl overflow-hidden">
        {items.map((item, j) => {
          const isEditing = editingId === item._id;
          return (
            <div key={item._id} className={`flex items-center gap-3 px-3 py-2 ${j !== 0 ? "border-t border-gray-50 dark:border-gray-700" : ""}`}>
              <div className="flex-1 min-w-0">
                <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
              </div>

              {isEditing ? (
                <QtyEditor item={item} onSave={handleSave} />
              ) : (
                <>
                  <button
                    onClick={() => setEditingId(item._id)}
                    className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 transition-colors min-w-[52px] text-center"
                  >
                    {item.qty > 0 ? `${item.qty} ${item.unit}` : "— qty"}
                  </button>
                  <button
                    onClick={() => onDeleteItem?.(item._id)}
                    className="text-red-400 hover:text-red-600 text-lg leading-none shrink-0"
                  >
                    ×
                  </button>
                </>
              )}
            </div>
          );
        })}

        {items.length === 0 && !adding && (
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-6">No items counted here yet</p>
        )}

        {adding ? (
          <AddItemForm
            location={location}
            onAdd={handleAdd}
            onCancel={() => setAdding(false)}
            knownNames={knownNames}
            knownUnits={knownUnits}
          />
        ) : (
          <button
            onClick={() => setAdding(true)}
            className="w-full border-t border-gray-50 dark:border-gray-700 text-green-600 dark:text-green-400 text-sm font-medium py-2.5 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
          >
            + Add Item
          </button>
        )}
      </div>
    </div>
  );
}
