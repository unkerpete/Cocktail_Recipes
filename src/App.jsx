import { useState } from 'react'
import './App.css'

function App() {
const [sgWeather, setSGWeather]=useState('')
const [userName, setUserName]=useState('Peter')

  const getCountryWeather = async function (country) {
    try {
      const url = `https://goweather.herokuapp.com/weather/${country}`;
      const res = await fetch(url);
      const data = await res.json();
      setSGWeather(data);
    } catch (err) {
      alert(err.message);
    }
  };

  getCountryWeather("singapore");

  return (
    <div className="App">
      Hello, {userName} <br/>
      It is <br/>
      {sgWeather.temperature}
    </div>
  )
}

export default App
