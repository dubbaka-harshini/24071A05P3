function WeatherCard({ weather }) {
  return (
    <div className="card shadow-lg border-0 mt-4">
      <div className="card-body text-center">

        <h2 className="fw-bold">
          📍 {weather.name}
        </h2>

        <h1 className="display-2 text-primary fw-bold">
          {weather.main.temp}°C
        </h1>

        <p className="lead text-capitalize">
          {weather.weather[0].description}
        </p>

        <div className="row mt-4">

          <div className="col">
            <p>💧 Humidity</p>
            <strong>{weather.main.humidity}%</strong>
          </div>

          <div className="col">
            <p>🌬 Wind</p>
            <strong>{weather.wind.speed} m/s</strong>
          </div>

          <div className="col">
            <p>🌡 Feels Like</p>
            <strong>{weather.main.feels_like}°C</strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default WeatherCard;
