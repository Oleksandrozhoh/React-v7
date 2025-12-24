import CoinCard from "../components/CoinCard";
import LimitSelect from "../components/LimitSelect";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = ({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filteredCoins = coins
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      if (sortBy === "market_cap_desc") return b.market_cap - a.market_cap;
      if (sortBy === "market_cap_asc") {
        return a.market_cap - b.market_cap;
      }
      if (sortBy === "price_desc") return b.current_price - a.current_price;
      if (sortBy === "price_asc") return a.current_price - b.current_price;
      if (sortBy === "change_desc")
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      if (sortBy === "change_asc")
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
      return 0;
    });

  return (
    <div>
      <header className="header">
        <h1>🚀 Crypto Dash</h1>
        <div className="controls-bar">
          <Filter filter={filter} setFilter={setFilter} />
          <LimitSelect limit={limit} setLimit={setLimit} />
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </header>
      {loading && <LoadingSpinner />}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && (
        <main className="grid">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p className="no-results">No coins match your filter.</p>
          )}
        </main>
      )}
    </div>
  );
};

export default HomePage;
