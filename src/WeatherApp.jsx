import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react"
import "./WeatherApp.css"

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 24.13,
    humidity: 94,
    temp: 23.29,
    tempMax: 23.29,
    tempMin: 23.29,
    weather: "light rain",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app">
      <div className="weather-card">
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
