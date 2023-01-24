import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchByName from './pages/SearchByName';
import SearchByIngredient from './pages/SearchByIngredient';

function App() {
  return (
    <>
      Hello
      <Routes>
        <Route path='/' element={<SearchByName />} />
        <Route path='/SearchByIngredient' element={<SearchByIngredient />} />
      </Routes>
    </>
  );
}

export default App;
