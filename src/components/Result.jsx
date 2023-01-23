import React, { useState } from 'react';
import Modal from './Modal';

const Result = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleImgClicked = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='results'>
      <h4>{props.strDrink}</h4>
      <img
        className='results-img'
        src={props.strDrinkThumb}
        alt={props.strDrink}
        onClick={handleImgClicked}
      />
      {showModal && <Modal closeModal={closeModal} {...props} />}
    </div>
  );
};

export default Result;
