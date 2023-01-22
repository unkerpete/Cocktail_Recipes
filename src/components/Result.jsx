import React from 'react';

const Result = (props) => {
  return (
    <div className='results'>
      <h4>{props.strDrink}</h4>
      <img src={props.strDrinkThumb} alt='' />
    </div>
  );
};

export default Result;
