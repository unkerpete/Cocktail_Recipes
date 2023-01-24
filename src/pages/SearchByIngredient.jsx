import { useState } from 'react';
import '../App.css';
import { defaultIngredientSearchData } from '../data';
import ResultIngredient from '../components/ResultIngredient';
import SearchSection from '../components/SearchSection';

const SearchByIngredient = () => {
  const [recipe, setRecipe] = useState(defaultIngredientSearchData.drinks);
  const [searchClicked, setSearchClicked] = useState(false);
  const [showSearch, setShowSearch] = useState('');
  const [input, setInput] = useState();

  const handleClickAPI = async function () {
    setShowSearch(input);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`
      );
      const json = await res.json();
      setRecipe(json.drinks);
    } catch (err) {
      setRecipe(null); // different from SearchByName page, because api for ingredient search returns blank page when nothing (name search returns an object with null)
    }
    setSearchClicked(true);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='App'>
      <h2>Searching By Ingredient</h2>
      <SearchSection
        handleInput={handleInput}
        handleClickAPI={handleClickAPI}
        placeHolder='enter ingredient'
      />
      <div className='results-section'>
        <h3>
          {searchClicked
            ? `Search results for: ${showSearch}`
            : 'Search results for: Salt'}
        </h3>

        <div className='search-results-container'>
          {recipe
            ? recipe.map((item) => {
                return (
                  <ResultIngredient
                    key={item.idDrink}
                    idDrink={item.idDrink}
                    strDrink={item.strDrink}
                    strDrinkThumb={item.strDrinkThumb}
                    {...item}
                  />
                );
              })
            : 'No such ingredient in our database. Please try another search.'}
        </div>
      </div>
    </div>
  );
};

export default SearchByIngredient;
