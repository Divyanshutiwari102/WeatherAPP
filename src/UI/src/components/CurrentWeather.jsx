const CurrentWeather = ({ data }) => {
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour <= 18;

  const getIcon = () => {
    const condition = data?.condition?.toLowerCase();

    if (condition.includes("rain")) return "🌧️";
    if (condition.includes("cloud")) return "☁️";
    if (condition.includes("snow")) return "❄️";
    if (condition.includes("clear") || condition.includes("sun"))
      return isDay ? "☀️" : "🌙";

    return "🌤️";
  };

  return (
    <div className="current">

      <div>
        <div className="temp">{Math.round(data.temprature)}°C</div>

        <div className="details">
          <p>Precipitation: 0%</p>
          <p>Humidity: 72%</p>
          <p>Wind: 11 km/h</p>
        </div>
      </div>

      {/* 🌦️ WEATHER ICON */}
      <div className="weather-icon animate-icon">
        {getIcon()}
      </div>

    </div>
  );
};

export default CurrentWeather;
