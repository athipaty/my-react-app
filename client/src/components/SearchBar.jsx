export default function SearchBar({
  query,
  onChange,
  placeholder,
  onBack,
  showBack,
  onMenu,
}) {
  return (
    <div className="flex items-center justify-between mb-4 px-2">
      {showBack ? (
        <button onClick={onBack} className="text-3xl">⬅️</button>
      ) : (
        <div className="w-[44px]" />
      )}

      <input
        className="mx-2 p-3 border rounded text-center flex-grow"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      <button onClick={onMenu} className="p-2">
        ☰
      </button>
    </div>
  );
}
