const LOCATIONS = {
  rack2: "Rack #2",
  freezer: "Freezer",
  chiller: "Chiller",
};

const RACK1_LEVELS = [1, 2, 3, 4].map((n) => `Rack #1 - Level ${n}`);

function LocationBox({ label, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-gray-400 dark:border-gray-500 rounded-lg flex items-center justify-center text-center font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors p-3 ${className}`}
    >
      {label}
    </button>
  );
}

export default function CountStockLayout({ onSelectLocation }) {
  return (
    <div className="animate-fade-slide-in">
      <p className="text-center text-xs text-gray-400 dark:text-gray-500 mb-3">Tap a location to count stock there</p>
      <div className="border-2 border-gray-400 dark:border-gray-500 rounded-xl p-3 flex gap-3" style={{ height: 420 }}>
        <div className="flex-1 flex flex-col gap-3">
          <LocationBox
            label={LOCATIONS.rack2}
            className="flex-[2]"
            onClick={() => onSelectLocation(LOCATIONS.rack2)}
          />
          <LocationBox
            label={LOCATIONS.freezer}
            className="flex-[3]"
            onClick={() => onSelectLocation(LOCATIONS.freezer)}
          />
          <LocationBox
            label={LOCATIONS.chiller}
            className="flex-[3]"
            onClick={() => onSelectLocation(LOCATIONS.chiller)}
          />
        </div>
        <div className="w-24 flex flex-col gap-1.5">
          <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 -mb-0.5">Rack #1</p>
          {RACK1_LEVELS.map((location, i) => (
            <LocationBox
              key={location}
              label={`Level ${i + 1}`}
              className="flex-1 w-full text-xs"
              onClick={() => onSelectLocation(location)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
