import React, { useState } from "react";

function WeatherForm({ onSubmit }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(location);
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Enter City Name...!"
        />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
