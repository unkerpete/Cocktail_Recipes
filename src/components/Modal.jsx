import React from 'react';
import Button from './Button';
import { useState } from 'react';

const Modal = (props) => {
  const [languageValue, setLanguageValue] = useState('1');

  const handleSelection = (e) => {
    setLanguageValue(e.target.value);
  };

  return (
    <>
      <div className='modal'>
        <div className='overlay'>
          <div className='modal-content'>
            <h3>{props.strDrink}</h3>
            <div className='ingredients-container'>
              <p className='ingredients'>
                Ingredients:
                {props.strIngredient1 && <br />}
                {props.strMeasure1 && props.strMeasure1} <span></span>
                {props.strIngredient1 && props.strIngredient1}
                {props.strIngredient2 && <br />}
                {props.strMeasure2 && props.strMeasure2} <span></span>
                {props.strIngredient2 && props.strIngredient2}
                {props.strIngredient3 && <br />}
                {props.strMeasure3 && props.strMeasure3} <span></span>
                {props.strIngredient3 && props.strIngredient3}
                {props.strIngredient4 && <br />}
                {props.strMeasure4 && props.strMeasure4} <span></span>
                {props.strIngredient4 && props.strIngredient4}
                {props.strIngredient5 && <br />}
                {props.strMeasure5 && props.strMeasure5} <span></span>
                {props.strIngredient5 && props.strIngredient5}
                {props.strIngredient6 && <br />}
                {props.strMeasure6 && props.strMeasure6} <span></span>
                {props.strIngredient6 && props.strIngredient6}
                {props.strIngredient7 && <br />}
                {props.strMeasure7 && props.strMeasure7} <span></span>
                {props.strIngredient7 && props.strIngredient7}
                {props.strIngredient8 && <br />}
                {props.strMeasure8 && props.strMeasure8} <span></span>
                {props.strIngredient8 && props.strIngredient8}
                {props.strIngredient9 && <br />}
                {props.strMeasure9 && props.strMeasure9} <span></span>
                {props.strIngredient9 && props.strIngredient9}
                {props.strIngredient10 && <br />}
                {props.strMeasure10 && props.strMeasure10} <span></span>
                {props.strIngredient10 && props.strIngredient10}
                {props.strIngredient11 && <br />}
                {props.strMeasure11 && props.strMeasure11} <span></span>
                {props.strIngredient11 && props.strIngredient11}
                {props.strIngredient12 && <br />}
                {props.strMeasure12 && props.strMeasure12} <span></span>
                {props.strIngredient12 && props.strIngredient12}
                {props.strIngredient13 && <br />}
                {props.strMeasure13 && props.strMeasure13} <span></span>
                {props.strIngredient13 && props.strIngredient13}
                {props.strIngredient14 && <br />}
                {props.strMeasure14 && props.strMeasure14} <span></span>
                {props.strIngredient14 && props.strIngredient14}
                {props.strIngredient15 && <br />}
                {props.strMeasure15 && props.strMeasure15} <span></span>
                {props.strIngredient15 && props.strIngredient15}
              </p>
              <img
                className='modal-img'
                src={props.strDrinkThumb}
                alt={props.strDrink}
              />
            </div>
            <select onClick={handleSelection} className='language-option'>
              <option value='1'>English</option>
              <option value='2'>Spanish</option>
              <option value='3'>German</option>
              <option value='4'>French</option>
              <option value='5'>Italian</option>
            </select>
            {/* <p>{props.strInstructions}</p> */}
            {languageValue === '1' ? (
              !props.strInstructions ? (
                <p>No translation available, use Google translate.</p>
              ) : (
                <p>{props.strInstructions}</p>
              )
            ) : null}
            {languageValue === '2' ? (
              !props.strInstructionsES ? (
                <p>No translation available, use Google translate.</p>
              ) : (
                <p>{props.strInstructionsES}</p>
              )
            ) : null}
            {languageValue === '3' ? (
              !props.strInstructionsDE ? (
                <p>No translation available, use Google translate.</p>
              ) : (
                <p>{props.strInstructionsDE}</p>
              )
            ) : null}
            {languageValue === '4' ? (
              !props.strInstructionsFR ? (
                <p>No translation available, use Google translate.</p>
              ) : (
                <p>{props.strInstructionsFR}</p>
              )
            ) : null}
            {languageValue === '5' ? (
              !props.strInstructionsIT ? (
                <p>No translation available, use Google translate.</p>
              ) : (
                <p>{props.strInstructionsIT}</p>
              )
            ) : null}
            <Button onClick={props.closeModal} btnTxt='Close' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
