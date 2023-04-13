import React from "react";

function WeatherData({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="weather-data">
      <div className="weather-info">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt="Weather Icon"
        />
        <div className="weather-info text">
          <span className="value">{weather[0].main}</span>
        </div>
      </div>
      <h2>{name}</h2>
      <div className="weather-details">
        <div className="weather-info">
          <span className="label">Temperature:</span>
          <span className="value">{(main.temp - 273.15).toFixed(1)}&deg;C</span>
        </div>
        <div className="weather-info">
          <span className="label">Humidity:</span>
          <span className="value">{main.humidity}%</span>
        </div>
        <div className="weather-info">
          <span className="label">Feels Like:</span>
          <span className="value">
            {(main.feels_like - 273.15).toFixed(1)}&deg;C
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
