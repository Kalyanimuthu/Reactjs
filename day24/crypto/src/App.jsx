import React, { useState, useEffect } from "react";
import CryptoList from "./components/CryptoList";

export default function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState("");

  // Fetch crypto data
  const fetchCryptoData = async () => {
    try {
      setError("");
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setCryptoList(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch every 10 seconds
  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 10000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="text-center p-8 w-full max-w-6xl">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">
        💰 Live Cryptocurrency Tracker
      </h1>

      <div className="mb-4 text-gray-400">
        {lastUpdated && <p>Last updated at: {lastUpdated}</p>}
      </div>

      <button
        onClick={fetchCryptoData}
        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        Refresh Now
      </button>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {cryptoList.length > 0 ? (
        <div className="mt-8">
          <CryptoList cryptoList={cryptoList} />
        </div>
      ) : (
        !error && <p className="text-gray-400 mt-6">Loading...</p>
      )}
    </div>
  );
}
