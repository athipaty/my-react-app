import { useState } from "react";

const ORDERS = [
  {
    day: "Monday",
    short: "Mon",
    sections: [
      {
        type: "sauces",
        label: "Sauces & Condiments",
        items: [
          { name: "Hangover sauce",   qty: "5 kg"  },
          { name: "Dipping sauce",    qty: "10 kg" },
          { name: "Bibim sauce",      qty: "10 kg" },
          { name: "Marinade sauce",   qty: "20 kg" },
          { name: "Dakdoritang sauce",qty: "0 kg"  },
          { name: "Cabbage pickle",   qty: "25 kg" },
          { name: "Radish kimchi",    qty: "15 kg" },
          { name: "Yuzu kosho",       qty: "5 kg"  },
          { name: "Chili pickle",     qty: "5 kg"  },
          { name: "Garlic sauce",     qty: "5 kg"  },
          { name: "Sriracha mayo",    qty: "5 kg"  },
        ],
      },
      {
        type: "proteins",
        label: "Meats & Proteins",
        items: [
          { name: "Heart",            qty: "5 kg"   },
          { name: "Gizzard",          qty: "5 kg"   },
          { name: "Gizzard popcorn",  qty: "2.5 kg" },
          { name: "Softbone",         qty: "5 kg"   },
          { name: "Tender",           qty: "10 kg"  },
          { name: "Neck",             qty: "7.5 kg" },
          { name: "Thigh",            qty: "50 kg"  },
        ],
      },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    sections: [
      {
        type: "sauces",
        label: "Sauces & Condiments",
        items: [
          { name: "Cabbage pickle",   qty: "30 kg" },
          { name: "Radish kimchi",    qty: "15 kg" },
          { name: "Yuzu kosho",       qty: "5 kg"  },
          { name: "Chili pickle",     qty: "5 kg"  },
          { name: "Garlic sauce",     qty: "5 kg"  },
          { name: "Sriracha mayo",    qty: "5 kg"  },
        ],
      },
      {
        type: "proteins",
        label: "Meats & Proteins",
        items: [
          { name: "Heart",            qty: "5 kg"   },
          { name: "Gizzard",          qty: "2.5 kg" },
          { name: "Softbone",         qty: "7.5 kg" },
          { name: "Tender",           qty: "10 kg"  },
          { name: "Neck",             qty: "7.5 kg" },
          { name: "Thigh",            qty: "50 kg"  },
          { name: "Popcorn",          qty: "2.5 kg" },
        ],
      },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    sections: [
      {
        type: "sauces",
        label: "Sauces & Condiments",
        items: [
          { name: "Cabbage pickle",   qty: "30 kg" },
          { name: "Radish kimchi",    qty: "25 kg" },
          { name: "Yuzu kosho",       qty: "10 kg" },
          { name: "Chili pickle",     qty: "10 kg" },
          { name: "Garlic sauce",     qty: "10 kg" },
          { name: "Sriracha mayo",    qty: "5 kg"  },
        ],
      },
      {
        type: "proteins",
        label: "Meats & Proteins",
        items: [
          { name: "Heart",            qty: "2.5 kg" },
          { name: "Gizzard",          qty: "2.5 kg" },
          { name: "Softbone",         qty: "7.5 kg" },
          { name: "Tender",           qty: "10 kg"  },
          { name: "Neck",             qty: "7.5 kg" },
          { name: "Thigh",            qty: "50 kg"  },
          { name: "Popcorn",          qty: "2.5 kg" },
        ],
      },
    ],
  },
];

const SECTION_STYLE = {
  sauces: {
    header: "bg-amber-50 border-amber-200",
    headerText: "text-amber-700",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-400",
    row: "hover:bg-amber-50/60",
  },
  proteins: {
    header: "bg-orange-50 border-orange-200",
    headerText: "text-orange-700",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    badge: "bg-orange-100 text-orange-700",
    dot: "bg-orange-400",
    row: "hover:bg-orange-50/60",
  },
};

function totalKg(items) {
  return items.reduce((sum, it) => {
    const n = parseFloat(it.qty);
    return sum + (isNaN(n) ? 0 : n);
  }, 0);
}

export default function StandingOrders() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const defaultIdx = ORDERS.findIndex((o) => o.day === today);
  const [activeIdx, setActiveIdx] = useState(defaultIdx >= 0 ? defaultIdx : 0);
  const active = ORDERS[activeIdx];

  return (
    <div className="pb-6">
      {/* Title */}
      <div className="mb-4 text-center">
        <h1 className="text-lg font-bold text-gray-800 tracking-tight">SGO(TA) Standing Orders</h1>
        <p className="text-xs text-gray-400 mt-0.5">Weekly production schedule</p>
      </div>

      {/* Day tabs */}
      <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-xl">
        {ORDERS.map((order, i) => (
          <button
            key={order.day}
            onClick={() => setActiveIdx(i)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeIdx === i
                ? "bg-white text-green-700 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {order.short}
            {order.day === today && (
              <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-green-500 align-middle mb-0.5" />
            )}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-3">
        {active.sections.map((section) => {
          const s = SECTION_STYLE[section.type];
          const total = totalKg(section.items);
          return (
            <div key={section.type} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Section header */}
              <div className={`flex items-center justify-between px-4 py-3 border-b ${s.header}`}>
                <div className={`flex items-center gap-2 font-semibold text-sm ${s.headerText}`}>
                  {s.icon}
                  {section.label}
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.badge}`}>
                  {total} kg total
                </span>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-50">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-4 py-2.5 transition-colors ${s.row}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${s.badge}`}>
                      {item.qty}
                    </span>
                  </div>
                ))}
              </div>

              {/* Section footer total */}
              <div className={`flex justify-end px-4 py-2 border-t ${s.header}`}>
                <span className={`text-xs font-semibold ${s.headerText}`}>
                  {section.items.length} items · {total} kg
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grand total card */}
      <div className="mt-3 bg-gray-800 rounded-2xl px-5 py-4 flex items-center justify-between shadow-md">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Total — {active.day}</p>
          <p className="text-white font-bold text-base mt-0.5">
            {active.sections.reduce((s, sec) => s + sec.items.length, 0)} items
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Grand Total</p>
          <p className="text-green-400 font-bold text-xl mt-0.5">
            {active.sections.reduce((s, sec) => s + totalKg(sec.items), 0)} kg
          </p>
        </div>
      </div>
    </div>
  );
}
