import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../App.css';
import defaultSearchResults from '../data';
import Result from '../components/Result';
import SearchSection from '../components/SearchSection';

const SearchByName = () => {
  const [recipe, setRecipe] = useState(defaultSearchResults.drinks);
  const [searchClicked, setSearchClicked] = useState(false);
  const [showSearch, setShowSearch] = useState('');
  const [input, setInput] = useState();

  const handleClickAPI = async function () {
    setShowSearch(input);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
      );
      const json = await res.json();
      setRecipe(json.drinks);
    } catch (err) {
      alert(err.message);
    }
    setSearchClicked(true);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='App'>
      <h1>Cocktail Recipes</h1>
      <div className='top-section-container'>
        <div className='top-section-left'>
          I AM TOP SECTION LEFT Hello. Ingredients list here
        </div>
        <div className='top-section-right-container'>
          <div className='top-section-right'>
            <button>Search by ingredient</button> <span />
            <button>Search by category</button>
          </div>
        </div>
      </div>
      <SearchSection
        handleInput={handleInput}
        handleClickAPI={handleClickAPI}
      />
      <div className='results-section'>
        <h3>
          {searchClicked
            ? `Search results for: ${showSearch}`
            : 'Search results for: Margarita'}
        </h3>

        <div className='search-results-container'>
          {recipe
            ? recipe.map((item) => {
                return (
                  <Result
                    key={item.idDrink}
                    idDrink={item.idDrink}
                    strDrink={item.strDrink}
                    strDrinkThumb={item.strDrinkThumb}
                    {...item}
                  />
                );
              })
            : 'No such cocktails in our database. Please try another search.'}
        </div>
      </div>
    </div>
  );
};

export default SearchByName;
