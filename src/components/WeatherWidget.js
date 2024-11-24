import React, { useState, useEffect } from "react";
import axios from "axios";
import StatusIndicator from "./StatusIndicator";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [cities, setCities] = useState([]);
  const [isCityValid, setIsCityValid] = useState(false);

  useEffect(() => {
    if(location === "") {
      setIsCityValid(false);
      return;
    };
    const fetchWeather = async () => {
      const apiKey = "Your Own https://openweathermap.org/ API Key";
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );
        setIsCityValid(true);
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };
    fetchWeather();
  }, [location]);

  const addCity = () => {
    const city = {
      name: weather.name,
      temp: weather.main.temp,
      description: weather.weather[0].description,
    }
    setCities([...cities, city]);
    setLocation("");
  };

  const removeCity = (index) => {
    const updatedCities = cities.filter((_, i) => i !== index);
    setCities(updatedCities);
  };

  return (
    <div className="widget">
      <h3>Weather</h3>
      {location && <StatusIndicator isSuccess={isCityValid} />}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city"
        className="formInput"
      />
      <button onClick={addCity} className="outlined-button">Add City</button>
      {cities.length > 0 && (
        <ul className="list">
          {cities.map((city, index) => (
            <li key={index} className="item">
              <div>
                <p className="citytitle">{city.name}</p>
                <p>{city.temp}°C</p>
                <p>{city.description}</p>
              </div>
              <button className="outlined-delete-button" onClick={() => removeCity(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeatherWidget;
