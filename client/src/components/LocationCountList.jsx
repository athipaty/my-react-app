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

export default function LocationCountList({ location, items = [], onBack, onSaveItem, onDeleteItem, onReorder, knownNames = [], knownUnits = {} }) {
  const [editingId, setEditingId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [order, setOrder] = useState(() => items.map((i) => i._id));
  const [draggingId, setDraggingId] = useState(null);

  const draggingIdRef = useRef(null);
  const orderRef = useRef(order);
  const rowRefs = useRef(new Map());

  useEffect(() => { orderRef.current = order; }, [order]);

  // Keep local order in sync with the prop, but not mid-drag (would fight the live reorder).
  useEffect(() => {
    if (draggingIdRef.current) return;
    setOrder(items.map((i) => i._id));
  }, [items]);

  const itemsById = new Map(items.map((i) => [i._id, i]));
  const orderedItems = order.map((id) => itemsById.get(id)).filter(Boolean);

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

  const handlePointerMove = (e) => {
    const id = draggingIdRef.current;
    if (!id) return;
    const y = e.clientY;
    setOrder((prev) => {
      const others = prev.filter((x) => x !== id);
      let targetIndex = others.length;
      for (let i = 0; i < others.length; i++) {
        const node = rowRefs.current.get(others[i]);
        if (!node) continue;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        if (y < mid) { targetIndex = i; break; }
      }
      const next = [...others];
      next.splice(targetIndex, 0, id);
      return next;
    });
  };

  const handlePointerUp = () => {
    const id = draggingIdRef.current;
    draggingIdRef.current = null;
    setDraggingId(null);
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    if (id && onReorder) onReorder(location, orderRef.current);
  };

  const handlePointerDown = (id) => (e) => {
    e.preventDefault();
    draggingIdRef.current = id;
    setDraggingId(id);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
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

      {items.length > 1 && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 px-1">Drag ⠿ to reorder</p>
      )}

      <div className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-xl overflow-hidden">
        {orderedItems.map((item, j) => {
          const isEditing = editingId === item._id;
          const isDragging = draggingId === item._id;
          return (
            <div
              key={item._id}
              ref={(el) => { if (el) rowRefs.current.set(item._id, el); else rowRefs.current.delete(item._id); }}
              className={`flex items-center gap-2 px-3 py-2 transition-colors ${j !== 0 ? "border-t border-gray-50 dark:border-gray-700" : ""} ${isDragging ? "bg-green-50 dark:bg-green-900/20" : ""}`}
            >
              <button
                onPointerDown={handlePointerDown(item._id)}
                className="shrink-0 text-gray-300 dark:text-gray-600 cursor-grab active:cursor-grabbing text-lg leading-none px-1 touch-none select-none"
                aria-label="Drag to reorder"
              >
                ⠿
              </button>

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
