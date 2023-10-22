import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const api = {
    key: "207414404b7f262e9e3fd853e010a80e",
    base: "https://api.openweathermap.org/data/2.5",
  };

  const fetchDataWeather = () => {
    axios
      .get(`${api.base}/weather?q=${location}&appid=${api.key}`)
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setWeatherData(null);
        setError("Không tìm thấy thông tin thời tiết cho địa điểm đã nhập.");
      });
  };

  useEffect(() => {
    if (location) {
      fetchDataWeather();
    } 
  }, [location]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Nhập địa điểm"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Nhiệt độ: {weatherData.main.temp}°C</p>
          <p>Quốc gia: {weatherData.sys.country}</p>
          <p>Mô tả: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;