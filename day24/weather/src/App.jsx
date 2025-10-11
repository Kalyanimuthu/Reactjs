import React, { useState, useEffect } from "react";

export default function App() {
  const [city, setCity] = useState("Chennai");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch weather data
  useEffect(() => {
    if (!city.trim()) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchWeather = async () => {
      setLoading(true);
      setError("");
      setWeatherData(null);

      try {
        // Using OpenWeatherMap API (you can replace with your own key)
        const API_KEY = "fd83603ba4af06ec78bc3028d2430589"; // Replace with your actual API key
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
          { signal }
        );

        if (!res.ok) throw new Error("City not found");

        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Request aborted");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // 🧹 Cleanup if city changes before request finishes
    return () => controller.abort();
  }, [city]);

  // 🧠 Controlled input
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl p-6">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
        🌦️ Weather Dashboard
      </h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          onClick={() => setCity(city.trim())}
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center py-6">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Weather Info */}
      {weatherData && !loading && (
        <div className="text-center space-y-3">
          <h2 className="text-xl font-semibold">{weatherData.name}</h2>
          <p className="text-4xl font-bold text-blue-600">
            {Math.round(weatherData.main.temp)}°C
          </p>
          <p className="text-gray-700 capitalize">
            {weatherData.weather[0].description}
          </p>

          <div className="flex justify-around text-sm text-gray-600 mt-3">
            <p>💧 Humidity: {weatherData.main.humidity}%</p>
            <p>🌬️ Wind: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      )}

      {/* Default Message */}
      {!weatherData && !loading && !error && (
        <p className="text-center text-gray-500 mt-4">
          Enter a city name to get the weather 🌤️
        </p>
      )}
    </div>
  );
}
