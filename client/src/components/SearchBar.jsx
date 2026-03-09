export default function SearchBar({
  query,
  onChange,
  placeholder,
  onBack,
  showBack,
  onMenu,
}) {
  return (
    <div className="flex items-center justify-between mb-4 px-2 animate-fade-slide-in">
      {showBack ? (
        <button
          onClick={onBack}
          className="text-3xl transition-transform duration-200 active:scale-90"
        >
          ⬅️
        </button>
      ) : (
        <div className="w-[44px]" />
      )}

      <input
        className="mx-2 p-3 border rounded text-center flex-grow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:shadow-md"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      {onMenu && (
        <button
          onClick={onMenu}
          className="p-2 transition-transform duration-200 active:scale-90"
        >
          ☰
        </button>
      )}
      {!onMenu && <div className="w-[44px]" />}
    </div>
  );
}