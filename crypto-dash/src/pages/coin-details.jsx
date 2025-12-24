import { useParams } from "react-router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Chart from "../components/Chart";

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const CoinDetailsPage = () => {
  // Get the coin ID from the URL parameters by using useParams hook and destructuring
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const res = await fetch(
          `${API_URL}${id}?&x_cg_demo_api_key=${API_KEY}`
        );
        if (!res.ok) throw new Error("Failed to fetch coin details");
        const data = await res.json();
        console.log(data);
        setCoin(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchCoinDetails();
  }, [id]);

  return (
    <div className="coin-details-page">
      {loading && <LoadingSpinner />}
      {error && <p className="error">Error: {error}</p>}
      {coin && (
        <div className="coin-details-container">
          <div className="coin-details-header">
            <img
              src={coin.image.large}
              alt={`${coin.name} logo`}
              className="coin-details-image"
            />
            <div>
              <h2 className="coin-details-title">{coin.name}</h2>
              <div className="coin-details-symbol">
                {coin.symbol.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="coin-details-info">
            <div className="coin-details-price">
              Price: ${coin.market_data.current_price.usd.toLocaleString()}
            </div>
            <div
              className={`coin-details-change ${
                coin.market_data.price_change_percentage_24h > 0
                  ? "positive"
                  : "negative"
              }`}
            >
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="coin-details-marketcap">
              Market cap: ${coin.market_data.market_cap.usd.toLocaleString()}
            </div>
            <Chart id={id} />
            <div className="coin-description">{coin.description.en}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetailsPage;
