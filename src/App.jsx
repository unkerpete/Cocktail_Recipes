import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchByName from './pages/SearchByName';
import SearchByIngredient from './pages/SearchByIngredient';
import Button from './components/Button';
import { useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState({});

  async function fetchIpAddress() {
    // this fetch gets user's IP address
    const data = await fetch('https://api.ipify.org/?format=json');
    const json = await data.json();

    // this fetch uses the IP address to get user's location details
    const locationData = await fetch(
      `https://api.techniknews.net/ipgeo/${json.ip}`
    );
    const jsonLocationData = await locationData.json();
    console.log(jsonLocationData);

    // this fetch uses the location details to get user's weather info
    const weatherData = await fetch(
      `https://goweather.herokuapp.com/weather/${jsonLocationData.city}`
    );
    const jsonWeatherData = await weatherData.json();

    console.log(jsonWeatherData);
    setWeather(jsonWeatherData);
  }

  useEffect(() => {
    fetchIpAddress();
  }, []);

  return (
    <>
      <h1>Cocktail Recipes</h1>
      <div className='top-section-container'>
        <div className='top-section-left'>
          I AM TOP SECTION LEFT Hello. Ingredients list here
        </div>
        <div className='top-section-right-container'>
          <div className='top-section-right'>
            <button>
              <Link to='SearchByName'>Search by name</Link>
            </button>{' '}
            <button>
              <Link to='SearchByIngredient'>Search by ingredient</Link>
            </button>
            {/* <Button btnTxt="<Link to='SearchByIngredient'>Search by ingredient</Link>Search by ingredient">
              <Link to='SearchByIngredient' />
            </Button>{' '}
            HELP. How to use the Button component here? */}
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<SearchByName />} />
        <Route path='/SearchByName' element={<SearchByName />} />
        <Route path='/SearchByIngredient' element={<SearchByIngredient />} />
      </Routes>
    </>
  );
}

export default App;
