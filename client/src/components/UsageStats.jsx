import { useEffect, useState } from "react";
import { fetchVisitStats } from "../api";

const TILES = [
  { key: "today", label: "Today" },
  { key: "week", label: "This Week" },
  { key: "month", label: "This Month" },
  { key: "total", label: "All Time" },
];

export default function UsageStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = () => {
    setLoading(true);
    setError(false);
    fetchVisitStats()
      .then(setStats)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  return (
    <div className="animate-fade-slide-in">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">App Usage</span>
        <button
          onClick={load}
          className="text-xs text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400"
        >
          ↻ Refresh
        </button>
      </div>

      {loading && (
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-16">Loading usage stats...</p>
      )}

      {!loading && error && (
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-16">Couldn't load usage stats.</p>
      )}

      {!loading && !error && stats && (
        <div className="grid grid-cols-2 gap-3">
          {TILES.map((tile) => (
            <div
              key={tile.key}
              className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-xl p-4 flex flex-col items-center"
            >
              <span className="text-2xl font-bold text-green-700 dark:text-green-400">{stats[tile.key] ?? 0}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tile.label}</span>
            </div>
          ))}
        </div>
      )}

      <p className="text-center text-[11px] text-gray-400 dark:text-gray-500 mt-4">
        Counts one app open per device per day.
      </p>
    </div>
  );
}
