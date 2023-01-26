import React, { useState, useEffect } from 'react';
import './loadingSpinner.css';

const WeatherSection = () => {
  const [geolocation, setGeolocation] = useState({});
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function fetchIpAddress() {
    setIsLoading(true);
    try {
      // this fetch gets user's IP address
      const data = await fetch('https://api.ipify.org/?format=json');
      const json = await data.json();

      // this fetch uses the IP address to get user's location details
      const locationData = await fetch(
        `https://api.techniknews.net/ipgeo/${json.ip}`
      );
      const jsonLocationData = await locationData.json();

      // this fetch uses the location details to get user's weather info
      const weatherData = await fetch(
        `https://goweather.herokuapp.com/weather/${jsonLocationData.city}`,
        {
          method: 'GET',
          withCredentials: true,
          crossorigin: true,
          mode: 'cors',
        }
      );
      const jsonWeatherData = await weatherData.json();

      setGeolocation(jsonLocationData);
      setWeather(jsonWeatherData);
      console.log('3x api success');
    } catch (err) {
      console.log(err);
      setGeolocation({ city: 'Singapore' });
      setWeather({ description: 'Partly cloudy', temperature: '+25 °C' });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchIpAddress();
  }, []);

  return (
    <div className='top-section-left'>
      <p>Your current location is {geolocation.city} </p>
      {isLoading && (
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      )}
      <p>{weather.description}</p>
      <p>{weather.temperature}</p>
    </div>
  );
};

export default WeatherSection;
