import React from 'react';

const SearchSection = (props) => {
  return (
    <>
      <input type='text' onChange={props.handleInput} />
      <br />
      <button onClick={props.handleClickAPI}>Search</button>
    </>
  );
};

export default SearchSection;
