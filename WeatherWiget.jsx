import React, { useState, useEffect } from 'react';

// Simulating weather icons using emoji. You can replace this with images if needed.
const weatherIcons = {
  sunny: '☀️',  // Sunny icon
  cloudy: '☁️',  // Cloudy icon
  rainy: '🌧️'    // Rainy icon
};

const WeatherWidget = () => {
  // State management using useState
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching weather data
  const fetchWeatherData = () => {
    setLoading(true);
    setError(null);

    // Simulating a fetch call with a delay using setTimeout
    setTimeout(() => {
      const weatherConditions = ['sunny', 'cloudy', 'rainy'];
      const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      const randomTemperature = Math.floor(Math.random() * (35 - 15 + 1)) + 15; // Temperature between 15°C and 35°C

      // Simulating a successful response
      if (Math.random() > 0.1) { // 90% chance of success
        setWeatherData({
          condition: randomCondition,
          temperature: randomTemperature
        });
        setLoading(false);
      } else {
        // Simulating an error
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    }, 2000); // Simulate a 2-second fetch delay
  };

  // Fetch weather data on component mount
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Render loading, error, or weather data
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
            {weatherIcons[weatherData.condition]} {/* Display the appropriate icon */}
          </div>
        </div>
      )}

      {/* Button to simulate refetching the data */}
      <button onClick={fetchWeatherData}>Refresh Weather</button>
    </div>
  );
};

export default WeatherWidget;
