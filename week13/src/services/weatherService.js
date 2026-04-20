import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Get Current Weather
export const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

// Get 5-day / 3-hour Forecast
export const getForecast = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response.data.list;
};
