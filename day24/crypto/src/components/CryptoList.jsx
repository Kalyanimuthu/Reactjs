import React from "react";
import CryptoCard from "./CryptoCard";

export default function CryptoList({ cryptoList }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {cryptoList.map((coin) => (
        <CryptoCard
          key={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.current_price}
          change={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  );
}
