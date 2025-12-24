const LimitSelect = ({ limit, setLimit }) => {
  return (
    <label>
      Show:
      <select
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        className="limit-select"
      >
        <option value={10}>Top 10</option>
        <option value={20}>Top 20</option>
        <option value={50}>Top 50</option>
        <option value={100}>Top 100</option>
      </select>
    </label>
  );
};

export default LimitSelect;
