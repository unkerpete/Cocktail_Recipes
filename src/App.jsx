import { useState } from 'react';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState('recipe placeholder');
  const [userName, setUserName] = useState('Peter');
  const [input, setInput] = useState();

  const handleClickAPI = async function () {
    if (recipe === 'recipe placeholder') {
      try {
        const res = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=old_fashioned'
        );
        const json = await res.json();
        setRecipe(json.drinks[0].strInstructions);
      } catch (err) {
        alert(err.message);
      }
    } else {
      setRecipe('recipe placeholder');
    }
  };

  const handleInput = (e) => {
    // setInput = e.target.value
  };

  return (
    <div className='App'>
      Hello, {userName} <br />
      <input type='text' onChange={handleInput} />
      <br />
      <button onClick={handleClickAPI}>
        Click Me and recipe of Old Fashioned should appear below if api is
        working
      </button>
      <br />
      {recipe}
    </div>
  );
}

export default App;
