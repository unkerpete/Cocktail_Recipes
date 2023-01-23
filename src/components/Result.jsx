import React, { useState } from 'react';

const Result = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleImgClicked = (e) => {
    console.log(e.target.alt);
  };

  return (
    <div className='results'>
      <h4>{props.strDrink}</h4>
      <img
        src={props.strDrinkThumb}
        alt={props.strDrink}
        onClick={handleImgClicked}
      />
    </div>
  );
};

export default Result;
