import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchByName from './pages/SearchByName';
import SearchByIngredient from './pages/SearchByIngredient';
import WeatherSection from './components/WeatherSection';

function App() {
  return (
    <>
      <h1>Cocktail Recipes</h1>
      <div className='top-section-container'>
        {/* <div className='top-section-left'>
          <WeatherSection />
        </div> */}
        <div className='top-section-right-container'>
          <div className='top-section-right'>
            <button className='button-55'>
              <Link to='SearchByName'>Search by name</Link>
            </button>{' '}
            <button className='button-55'>
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
