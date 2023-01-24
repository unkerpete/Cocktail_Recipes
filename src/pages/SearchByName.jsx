import { useState } from 'react';
import '../App.css';
import { defaultNameSearchData } from '../data';
import Result from '../components/Result';
import SearchSection from '../components/SearchSection';

const SearchByName = () => {
  const [recipe, setRecipe] = useState(defaultNameSearchData.drinks);
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
      <h2>Searching By Name</h2>
      <SearchSection
        handleInput={handleInput}
        handleClickAPI={handleClickAPI}
        placeHolder='enter name of cocktail'
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
