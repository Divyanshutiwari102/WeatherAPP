import axios from "axios";

const BASE_URL = "https://weatherapp-jazz.onrender.com";

export const getWeatherForecast = async (city, days) => {
  const response = await axios.get(
    `${BASE_URL}/weather/forecast`,
    {
      params: { city, days }
    }
  );
  return response.data;
};
