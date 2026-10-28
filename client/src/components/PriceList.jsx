import { useState } from "react";
import productSeed from "../productPrice";
import ImageWithLoader from "./ImageWithLoader";

const seedIndex = productSeed.reduce((acc, p) => {
  acc[p.name.toLowerCase().trim()] = p;
  return acc;
}, {});

export default function PriceList({ names = [], overrides = {}, knownImages = {}, onEditItem }) {
  const [query, setQuery] = useState("");
  const lcQuery = query.toLowerCase().trim();

  const allNames = Array.from(
    new Set([...names, ...productSeed.map((p) => p.name)])
  ).sort((a, b) => a.localeCompare(b));

  const rows = allNames
    .filter((n) => (lcQuery ? n.toLowerCase().includes(lcQuery) : true))
    .map((name) => {
      const key = name.toLowerCase().trim();
      const override = overrides[key];
      const seed = seedIndex[key];
      const price = override?.price ?? seed?.price ?? 0;
      const weightValue = override?.weight?.value ?? seed?.weight?.value ?? 0;
      const weightUnit = override?.weight?.unit ?? seed?.weight?.unit ?? "g";
      const image = override?.image ?? knownImages[key] ?? "";
      return { name, price, weight: { value: weightValue, unit: weightUnit }, image };
    });

  return (
    <div className="animate-fade-slide-in">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search ingredients..."
        className="w-full mb-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
      />

      {rows.length === 0 && (
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-16">
          No ingredients found for "{query}"
        </p>
      )}

      <div className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-xl overflow-hidden">
        {rows.map((item, i) => (
          <button
            key={item.name}
            onClick={() => onEditItem(item)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-left ${
              i !== 0 ? "border-t border-gray-50 dark:border-gray-700" : ""
            } hover:bg-green-50 dark:hover:bg-green-900/10 transition-colors`}
          >
            {item.image ? (
              <ImageWithLoader
                src={item.image}
                alt={item.name}
                wrapperClass="w-10 h-10 shrink-0"
                imgClass="w-10 h-10 object-cover"
                rounded="rounded-lg"
              />
            ) : (
              <div className="w-10 h-10 shrink-0 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-300 dark:text-gray-600 text-xs">
                —
              </div>
            )}
            <div className="flex-1 min-w-0">
              <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {item.weight.value > 0 ? `${item.weight.value} ${item.weight.unit} / pack` : "no package size set"}
              </p>
            </div>
            <span
              className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-lg border border-dashed ${
                item.price > 0
                  ? "border-green-300 dark:border-green-700 text-green-600 dark:text-green-400"
                  : "border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500"
              }`}
            >
              {item.price > 0 ? `฿${item.price}` : "— price"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
