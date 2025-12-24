const Sort = ({ sortBy, setSortBy }) => {
  return (
    <label>
      Sort:
      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="market_cap_desc">Market Cap ▲</option>
        <option value="market_cap_asc">Market Cap ▼</option>
        <option value="price_desc">Price ▲</option>
        <option value="price_asc">Price ▼</option>
        <option value="change_desc">24h Change ▲</option>
        <option value="change_asc">24h Change ▼</option>
      </select>
    </label>
  );
};

export default Sort;
