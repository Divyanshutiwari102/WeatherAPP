const ForecastList = ({ forecast }) => (
  <div className="forecast">
    {forecast.map((d, i) => (
      <div key={d.date} className={`day ${i === 0 ? "active" : ""}`}>
        <p>{new Date(d.date).toLocaleDateString("en-US",{weekday:"short"})}</p>
        <div className="icon">☀️</div>
        <p>{Math.round(d.maxTemp)}° {Math.round(d.minTemp)}°</p>
      </div>
    ))}
  </div>
);

export default ForecastList;
