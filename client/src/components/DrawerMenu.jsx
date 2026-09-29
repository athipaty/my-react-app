export default function DrawerMenu({ open, onClose, currentView, onNavigate, theme, onToggleTheme }) {
  if (!open) return null;

  const items = [
    { id: "recipes",        icon: "🍳", label: "Recipes" },
    { id: "prices",         icon: "💰", label: "Monthly Stock" },
    { id: "standingOrders", icon: "📋", label: "Standing Orders" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Panel */}
      <div className="w-60 bg-white dark:bg-gray-800 h-full shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b dark:border-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-100 text-base">Menu</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 text-xl leading-none"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-3 flex-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); onClose(); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                currentView === item.id
                  ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Theme toggle */}
        <div className="p-3 border-t dark:border-gray-700">
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left w-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-xl">{theme === "dark" ? "🌙" : "☀️"}</span>
            {theme === "dark" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
      {/* Overlay */}
      <div className="flex-1 bg-black/40" onClick={onClose} />
    </div>
  );
}
