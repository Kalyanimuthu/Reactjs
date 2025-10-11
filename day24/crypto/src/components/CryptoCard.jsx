import React from "react";

export default function CryptoCard({ name, symbol, price, change }) {
  const changeColor = change > 0 ? "text-green-400" : "text-red-400";
  const arrow = change > 0 ? "↑" : "↓";

  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-400 mb-2">{symbol.toUpperCase()}</p>
      <p className="text-2xl font-bold">${price.toFixed(2)}</p>
      <p className={`mt-2 font-medium ${changeColor}`}>
        {arrow} {change.toFixed(2)}%
      </p>
    </div>
  );
}
