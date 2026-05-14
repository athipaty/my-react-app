const DAYS = ["Mon", "Wed", "Fri"];

const DATA = {
  sauces: {
    label: "Sauces & Condiments",
    headerClass: "bg-amber-50 border-amber-200 text-amber-700",
    badgeClass: "bg-amber-100 text-amber-700",
    dotClass: "bg-amber-400",
    rowClass: "hover:bg-amber-50/40",
    items: [
      { name: "Hangover sauce",    Mon: "5 kg",  Wed: null,    Fri: null    },
      { name: "Dipping sauce",     Mon: "10 kg", Wed: null,    Fri: null    },
      { name: "Bibim sauce",       Mon: "10 kg", Wed: null,    Fri: null    },
      { name: "Marinade sauce",    Mon: "20 kg", Wed: null,    Fri: null    },
      { name: "Dakdoritang sauce", Mon: "0 kg",  Wed: null,    Fri: null    },
      { name: "Cabbage pickle",    Mon: "25 kg", Wed: "30 kg", Fri: "30 kg" },
      { name: "Radish kimchi",     Mon: "15 kg", Wed: "15 kg", Fri: "25 kg" },
      { name: "Yuzu kosho",        Mon: "5 kg",  Wed: "5 kg",  Fri: "10 kg" },
      { name: "Chili pickle",      Mon: "5 kg",  Wed: "5 kg",  Fri: "10 kg" },
      { name: "Garlic sauce",      Mon: "5 kg",  Wed: "5 kg",  Fri: "10 kg" },
      { name: "Sriracha mayo",     Mon: "5 kg",  Wed: "5 kg",  Fri: "5 kg"  },
    ],
  },
  proteins: {
    label: "Meats & Proteins",
    headerClass: "bg-orange-50 border-orange-200 text-orange-700",
    badgeClass: "bg-orange-100 text-orange-700",
    dotClass: "bg-orange-400",
    rowClass: "hover:bg-orange-50/40",
    items: [
      { name: "Heart",           Mon: "5 kg",   Wed: "5 kg",   Fri: "2.5 kg" },
      { name: "Gizzard",         Mon: "5 kg",   Wed: "2.5 kg", Fri: "2.5 kg" },
      { name: "Gizzard popcorn", Mon: "2.5 kg", Wed: null,     Fri: null     },
      { name: "Popcorn",         Mon: null,     Wed: "2.5 kg", Fri: "2.5 kg" },
      { name: "Softbone",        Mon: "5 kg",   Wed: "7.5 kg", Fri: "7.5 kg" },
      { name: "Tender",          Mon: "10 kg",  Wed: "10 kg",  Fri: "10 kg"  },
      { name: "Neck",            Mon: "7.5 kg", Wed: "7.5 kg", Fri: "7.5 kg" },
      { name: "Thigh",           Mon: "50 kg",  Wed: "50 kg",  Fri: "50 kg"  },
    ],
  },
};

function parseKg(val) {
  if (!val) return 0;
  const n = parseFloat(val);
  return isNaN(n) ? 0 : n;
}

export default function StandingOrders() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" }).slice(0, 3);

  return (
    <div className="pb-6">
      {/* Title */}
      <div className="mb-4 text-center">
        <h1 className="text-lg font-bold text-gray-800 tracking-tight">SGO(TA) Standing Orders</h1>
        <p className="text-xs text-gray-400 mt-0.5">Weekly production schedule</p>
      </div>

      {Object.entries(DATA).map(([type, section]) => {
        const dayTotals = DAYS.map((d) =>
          section.items.reduce((s, it) => s + parseKg(it[d]), 0)
        );

        return (
          <div key={type} className="mb-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Section header */}
            <div className={`px-4 py-3 border-b ${section.headerClass}`}>
              <span className="font-semibold text-sm">{section.label}</span>
            </div>

            {/* Column headers — day names */}
            <div className="flex items-center px-3 py-1.5 bg-gray-50 border-b border-gray-100">
              <span className="flex-1 text-xs text-gray-400">Item</span>
              {DAYS.map((d) => (
                <span
                  key={d}
                  className={`w-16 text-center text-xs font-bold shrink-0 ${
                    d === today ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {d}
                  {d === today && <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-green-500 align-middle mb-0.5" />}
                </span>
              ))}
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-50">
              {section.items.map((item, idx) => (
                <div key={idx} className={`flex items-center px-3 py-2 transition-colors ${section.rowClass}`}>
                  <div className="flex-1 flex items-center gap-2 min-w-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${section.dotClass}`} />
                    <span className="text-sm text-gray-700 truncate">{item.name}</span>
                  </div>
                  {DAYS.map((d) => (
                    <span key={d} className={`w-16 text-center text-xs font-semibold shrink-0 ${
                      item[d] ? section.badgeClass.split(" ")[1] : "text-gray-200"
                    }`}>
                      {item[d] ?? "—"}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Totals row */}
            <div className={`flex items-center px-3 py-2 border-t ${section.headerClass}`}>
              <span className="flex-1 text-xs font-semibold">Total</span>
              {dayTotals.map((t, i) => (
                <span key={i} className={`w-16 text-center text-xs font-bold shrink-0 ${section.badgeClass}`}>
                  {t} kg
                </span>
              ))}
            </div>
          </div>
        );
      })}

      {/* Grand total row */}
      <div className="bg-gray-800 rounded-2xl px-4 py-4 shadow-md">
        <div className="flex items-center mb-2">
          <span className="flex-1 text-xs text-gray-400 uppercase tracking-wider font-medium">Grand Total</span>
          {DAYS.map((d) => (
            <span key={d} className={`w-16 text-center text-xs font-medium shrink-0 ${d === today ? "text-green-400" : "text-gray-400"}`}>{d}</span>
          ))}
        </div>
        <div className="flex items-center">
          <span className="flex-1 text-xs text-gray-500">All items</span>
          {DAYS.map((d) => {
            const total = Object.values(DATA).reduce(
              (s, sec) => s + sec.items.reduce((ss, it) => ss + parseKg(it[d]), 0), 0
            );
            return (
              <span key={d} className={`w-16 text-center text-base font-bold shrink-0 ${d === today ? "text-green-400" : "text-white"}`}>
                {total} kg
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
