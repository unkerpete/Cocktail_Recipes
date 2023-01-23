import React from 'react';

const SearchSection = (props) => {
  return (
    <>
      <input
        name='search'
        type='text'
        onChange={props.handleInput}
        placeholder='search for a cocktail here'
      />
      <br />
      <button onClick={props.handleClickAPI}>Search</button>
    </>
  );
};

export default SearchSection;
