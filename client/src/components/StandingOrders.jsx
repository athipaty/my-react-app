// SGO(TA) Standing Orders — three delivery days with sauce/pickle and protein sections

const DAYS = [
  {
    day: "Monday",
    emoji: "🔸",
    sauces: [
      { item: "Hangover sauce",   qty: 5   },
      { item: "Dipping sauce",    qty: 10  },
      { item: "Bibim sauce",      qty: 10  },
      { item: "Marinade sauce",   qty: 20  },
      { item: "Dakdoritang sauce",qty: 0   },
      { item: "Cabbage pickle",   qty: 25  },
      { item: "Radish kimchi",    qty: 15  },
      { item: "Yuzu kosho",       qty: 5   },
      { item: "Chili pickle",     qty: 5   },
      { item: "Garlic sauce",     qty: 5   },
      { item: "Sriracha mayo",    qty: 5   },
    ],
    proteins: [
      { item: "Heart",            qty: 5   },
      { item: "Gizzard",          qty: 5   },
      { item: "Gizzard popcorn",  qty: 2.5 },
      { item: "Softbone",         qty: 5   },
      { item: "Tender",           qty: 10  },
      { item: "Neck",             qty: 7.5 },
      { item: "Thigh",            qty: 50  },
    ],
  },
  {
    day: "Wednesday",
    emoji: "🔸",
    sauces: [
      { item: "Cabbage pickle",   qty: 30  },
      { item: "Radish kimchi",    qty: 15  },
      { item: "Yuzu kosho",       qty: 5   },
      { item: "Chili pickle",     qty: 5   },
      { item: "Garlic sauce",     qty: 5   },
      { item: "Sriracha mayo",    qty: 5   },
    ],
    proteins: [
      { item: "Heart",            qty: 5   },
      { item: "Gizzard",          qty: 2.5 },
      { item: "Softbone",         qty: 7.5 },
      { item: "Tender",           qty: 10  },
      { item: "Neck",             qty: 7.5 },
      { item: "Thigh",            qty: 50  },
      { item: "Pop corn",         qty: 2.5 },
    ],
  },
  {
    day: "Friday",
    emoji: "🔸",
    sauces: [
      { item: "Cabbage pickle",   qty: 30  },
      { item: "Radish kimchi",    qty: 25  },
      { item: "Yuzu kosho",       qty: 10  },
      { item: "Chili pickle",     qty: 10  },
      { item: "Garlic sauce",     qty: 10  },
      { item: "Sriracha mayo",    qty: 5   },
    ],
    proteins: [
      { item: "Heart",            qty: 2.5 },
      { item: "Gizzard",          qty: 2.5 },
      { item: "Softbone",         qty: 7.5 },
      { item: "Tender",           qty: 10  },
      { item: "Neck",             qty: 7.5 },
      { item: "Thigh",            qty: 50  },
      { item: "Pop corn",         qty: 2.5 },
    ],
  },
];

function fmtQty(qty) {
  return qty % 1 === 0 ? `${qty}kg` : `${qty}kg`;
}

function Section({ title, icon, rows }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-base">{icon}</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {title}
        </span>
      </div>
      <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
        {rows.map((row, i) => (
          <div
            key={row.item}
            className={`flex items-center justify-between px-3 py-2 text-sm ${
              i % 2 === 0 ? "bg-white" : "bg-gray-50"
            } ${row.qty === 0 ? "opacity-40" : ""}`}
          >
            <span className="text-gray-700">{row.item}</span>
            <span
              className={`font-semibold tabular-nums ${
                row.qty === 0
                  ? "text-gray-400"
                  : row.qty >= 20
                  ? "text-green-600"
                  : "text-gray-800"
              }`}
            >
              {fmtQty(row.qty)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StandingOrders() {
  const totalsByDay = DAYS.map((d) => {
    const total = [...d.sauces, ...d.proteins].reduce((s, r) => s + r.qty, 0);
    return { day: d.day, total };
  });

  return (
    <div className="mt-3 space-y-5 pb-4">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-3">
        <span className="text-2xl">📋</span>
        <div>
          <p className="text-sm font-bold text-gray-800">SGO (TA) Standing Orders</p>
          <p className="text-xs text-gray-400">Mon · Wed · Fri delivery schedule</p>
        </div>
      </div>

      {/* Day cards */}
      {DAYS.map((d) => (
        <div
          key={d.day}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          {/* Day header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-50 to-white border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-lg">{d.emoji}</span>
              <span className="font-bold text-gray-800">{d.day}</span>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              {totalsByDay.find((t) => t.day === d.day).total} kg total
            </span>
          </div>

          <div className="px-3 pt-3 pb-1">
            <Section title="Sauces & Pickles" icon="🥫" rows={d.sauces} />
            <Section title="Proteins" icon="🍗" rows={d.proteins} />
          </div>
        </div>
      ))}

      {/* Weekly summary */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Weekly summary
        </p>
        <div className="grid grid-cols-3 gap-2">
          {totalsByDay.map((t) => (
            <div
              key={t.day}
              className="flex flex-col items-center bg-green-50 rounded-xl py-2"
            >
              <span className="text-xs text-gray-500">{t.day}</span>
              <span className="text-sm font-bold text-green-700">{t.total} kg</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between items-center border-t border-gray-100 pt-2">
          <span className="text-xs text-gray-500">Total / week</span>
          <span className="text-sm font-bold text-gray-800">
            {totalsByDay.reduce((s, t) => s + t.total, 0)} kg
          </span>
        </div>
      </div>
    </div>
  );
}
