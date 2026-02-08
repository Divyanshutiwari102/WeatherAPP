import { useEffect, useState } from "react";
import { getWeatherForecast } from "../api/weatherApi";

import "../styles/style.css";
import "../styles/animations.css";

import WeatherControls from "../components/WeatherControls";
import CurrentWeather from "../components/CurrentWeather";
import ForecastChart from "../components/ForecastChart";
import ForecastList from "../components/ForecastList";

const WeatherDashboard = () => {
  const [city, setCity] = useState("Agra");
  const [days, setDays] = useState(7);
  const [data, setData] = useState(null);

  const fetchWeather = () => {
    getWeatherForecast(city, days).then(setData);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!data) return <p>Loading...</p>;

  const w = data.weatherResponse;

  return (
    <div className="container fade-in">
      <WeatherControls
        city={city}
        setCity={setCity}
        days={days}
        setDays={setDays}
        onSearch={fetchWeather}
      />

      <div className="header">
        <div>
          <h2>Results for {w.city}, {w.region}</h2>
          <p>{w.country}</p>
        </div>

        <div className="header-right">
          <p>Weather</p>
          <p>{new Date().toLocaleString()}</p>
          <p>{w.condition}</p>
        </div>
      </div>

      <div className="card">
        <CurrentWeather data={w} />
        <ForecastChart forecast={data.dayTemp} />
      </div>

      <ForecastList forecast={data.dayTemp} />
    </div>
  );
};

export default WeatherDashboard;
