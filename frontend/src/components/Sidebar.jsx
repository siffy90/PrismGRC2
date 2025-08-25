import React from "react";

export default function Sidebar({ domains, onSelect }) {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
      <h2 className="text-lg font-bold mb-4">Domains</h2>
      {domains.map(d => (
        <div key={d} className="mb-2">
          <button
            className="w-full text-left px-2 py-1 hover:bg-gray-200 rounded"
            onClick={() => onSelect(d)}
          >
            {d}
          </button>
        </div>
      ))}
    </aside>
  );
}
