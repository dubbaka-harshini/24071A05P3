import { useState } from "react";
import { getWeather, getForecast } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard.jsx";
import WeatherChart from "./components/WeatherChart.jsx";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);

      const weatherData = await getWeather(city);
      setWeather(weatherData);

      const forecastData = await getForecast(
        weatherData.coord.lat,
        weatherData.coord.lon
      );

      // take first 8 entries (~24 hrs)
      setForecast(forecastData.slice(0, 8));

    } catch (error) {
      
  console.log(error.response);
  alert(error.response?.data?.message || "Error fetching weather");


    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #4facfe, #00f2fe)"
      }}
    >
      <div className="container">

        {/* SEARCH CARD */}
        <div className="card shadow-lg border-0 p-4 text-center">
          <h1 className="fw-bold mb-3">🌤 Weather Dashboard</h1>

          <div className="input-group">
            <input
              className="form-control form-control-lg"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button
              className="btn btn-primary btn-lg"
              onClick={searchWeather}
            >
              Search
            </button>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-center mt-4">
            <div className="spinner-border text-light"></div>
          </div>
        )}

        {/* WEATHER CARD */}
        {weather && !loading && (
          <WeatherCard weather={weather} />
        )}

        {/* CHART */}
        {forecast.length > 0 && !loading && (
          <WeatherChart forecast={forecast} />
        )}

      </div>
    </div>
  );
}

export default App;
