import React from 'react';
import Button from './Button';

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
      <Button onClick={props.handleClickAPI} btnTxt='Search' />
    </>
  );
};

export default SearchSection;
