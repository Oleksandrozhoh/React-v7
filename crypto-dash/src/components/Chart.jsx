import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const Chart = ({ id }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}${id}/market_chart?vs_currency=usd&days=30&x_cg_demo_api_key=${API_KEY}`
        );
        const data = await res.json();
        const prices = data.prices.map((price) => ({
          x: price[0],
          y: price[1],
        }));
        setChartData({
          datasets: [
            {
              label: "Price (USD)",
              data: prices,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              pointRadius: 0,
              tension: 0.3,
              fill: false,
            },
          ],
        });
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchChartData();
  }, [id]);

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error loading chart: {error}</p>;

  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
              tooltip: { mode: "index", intersect: false },
            },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 7,
              },
            },
            y: {
              ticks: {
                callback: function (value) {
                  return "$" + value.toLocaleString();
                },
              },
              beginAtZero: false,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
