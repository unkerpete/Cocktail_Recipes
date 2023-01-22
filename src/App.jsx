import { useState } from 'react';
import './App.css';
import defaultSearchResults from './data';
import Result from './components/Result';

function App() {
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
      console.log(recipe);
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
            I am top section right. Select search by category/ingredient/name
          </div>
        </div>
      </div>
      <div className='search-section'>
        <input type='text' onChange={handleInput} />
        <br />
        <button onClick={handleClickAPI}>Search</button>
      </div>
      <div className='results-section'>
        <h3>{searchClicked && `Search results for: ${showSearch}`}</h3>
        <div className='search-results-container'>
          {recipe.map((item) => {
            return (
              <Result
                key={item.idDrink}
                idDrink={item.idDrink}
                strDrink={item.strDrink}
                strDrinkThumb={item.strDrinkThumb}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
