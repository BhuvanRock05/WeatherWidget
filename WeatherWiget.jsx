import React, { useState, useEffect } from 'react';
import "weather.css";

const weatherIcons = {
  sunny: '☀️',  
  cloudy: '☁️',  
  rainy: '🌧️'   
};

const WeatherWidget = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchWeatherData = () => {
    setLoading(true);
    setError(null);


    setTimeout(() => {
      const weatherConditions = ['sunny', 'cloudy', 'rainy'];
      const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      const randomTemperature = Math.floor(Math.random() * (35 - 15 + 1)) + 15; // Temperature between 15°C and 35°C


      if (Math.random() > 0.1) {
        setWeatherData({
          condition: randomCondition,
          temperature: randomTemperature
        });
        setLoading(false);
      } else {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    }, 2000);
  };


  useEffect(() => {
    fetchWeatherData();
  }, []);


  return (
    <div className="weather-widget">
      <h2>Weather Dashboard</h2>
      
      {loading && <div>Loading weather data...</div>}
      
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      
      {weatherData && !loading && !error && (
        <div className="weather-info">
          <h3>Temperature: {weatherData.temperature}°C</h3>
          <p>Condition: {weatherData.condition}</p>
          <div className="weather-icon">
            {weatherIcons[weatherData.condition]}
          </div>
        </div>
      )}


      <button onClick={fetchWeatherData}>Refresh Weather</button>
    </div>
  );
};

export default WeatherWidget;
