export default function SearchModeOverlay({ mode, onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => onSelect("recipe")}>
          🔍 Recipe search
        </button>
        <button onClick={() => onSelect("ingredient")}>
          🧂 Ingredient search
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
