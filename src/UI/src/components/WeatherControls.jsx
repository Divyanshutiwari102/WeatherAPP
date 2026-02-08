const WeatherControls = ({ city, setCity, days, setDays, onSearch }) => {
  return (
    <div className="controls fade-in">
      <input
        className="city-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <select
        className="days-select"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
      >
        <option value={3}>3 Days</option>
        <option value={5}>5 Days</option>
        <option value={7}>7 Days</option>
      </select>

      <button className="search-btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default WeatherControls;
