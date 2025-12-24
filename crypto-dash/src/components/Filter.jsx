const Filter = ({ filter, setFilter }) => {
  return (
    <label>
      Filter:
      <input
        type="text"
        placeholder="Search coins..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-input"
      />
    </label>
  );
};

export default Filter;
