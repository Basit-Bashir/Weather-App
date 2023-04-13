import React, { useState, useEffect } from "react";
import WeatherForm from "./components/Login/WeatherForm";
import WeatherData from "./components/Login/WeatherData";
import Error from "./components/Login/Error";
import "./App.css";

const api = {
  key: "edbe430e0c551878494a283bd3ca6b2a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api.key}`
        );
        // console.log(response.json());
        if (!response.ok) {
          setError("Error retrieving weather data");
          setWeatherData(null);
          return;
        }
        const data = await response.json();
        // console.log(data);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setError("Error retrieving weather data");
        setWeatherData(null);
      }
    };
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const handleSubmit = (location) => {
    setLocation(location);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherForm onSubmit={handleSubmit} />
        {error && <Error message={error} />}
        {weatherData && <WeatherData data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
