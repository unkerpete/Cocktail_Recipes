import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchByName from './pages/SearchByName';
import SearchByIngredient from './pages/SearchByIngredient';

function App() {
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
            <span />
            <button>
              <Link to='SearchByIngredient'>Search by ingredient</Link>
            </button>
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
