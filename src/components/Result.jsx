import React from 'react';

const Result = (props) => {
  return (
    <div className='results'>
      <div>
        {props.idDrink} {props.strDrink}
      </div>
    </div>
  );
};

export default Result;
