import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function WeatherChart({ forecast }) {

  const data = {
    labels: forecast.map(item =>
      new Date(item.dt * 1000).toLocaleTimeString()
    ),

    datasets: [
      {
        label: "Temperature °C",
        data: forecast.map(item => item.main.temp),
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13,110,253,0.2)",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-body">
        <h4>📊 Temperature Forecast</h4>
        <Line data={data} />
      </div>
    </div>
  );
}

export default WeatherChart;
