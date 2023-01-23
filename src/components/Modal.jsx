import React from 'react';

const Modal = (props) => {
  return (
    <>
      <div className='modal' onClick={props.closeModal}>
        <div className='overlay'>
          <div className='modal-content'>
            <h3>{props.strDrink}</h3>
            <p>
              Ingredients:
              {props.strIngredient1 && <br />}
              {props.strIngredient1 && props.strIngredient1} <span></span>
              {props.strMeasure1 && props.strMeasure1}
              {props.strIngredient2 && <br />}
              {props.strIngredient2 && props.strIngredient2} <span></span>
              {props.strMeasure2 && props.strMeasure2}
              {props.strIngredient3 && <br />}
              {props.strIngredient3 && props.strIngredient3} <span></span>
              {props.strMeasure3 && props.strMeasure3}
              {props.strIngredient4 && <br />}
              {props.strIngredient4 && props.strIngredient4} <span></span>
              {props.strMeasure4 && props.strMeasure4}
              {props.strIngredient5 && <br />}
              {props.strIngredient5 && props.strIngredient5} <span></span>
              {props.strMeasure5 && props.strMeasure5}
              {props.strIngredient6 && <br />}
              {props.strIngredient6 && props.strIngredient6} <span></span>
              {props.strMeasure6 && props.strMeasure6}
              {props.strIngredient7 && <br />}
              {props.strIngredient7 && props.strIngredient7} <span></span>
              {props.strMeasure7 && props.strMeasure7}
              {props.strIngredient8 && <br />}
              {props.strIngredient8 && props.strIngredient8} <span></span>
              {props.strMeasure8 && props.strMeasure8}
              {props.strIngredient9 && <br />}
              {props.strIngredient9 && props.strIngredient9} <span></span>
              {props.strMeasure9 && props.strMeasure9}
              {props.strIngredient10 && <br />}
              {props.strIngredient10 && props.strIngredient10} <span></span>
              {props.strMeasure10 && props.strMeasure10}
              {props.strIngredient11 && <br />}
              {props.strIngredient11 && props.strIngredient11} <span></span>
              {props.strMeasure11 && props.strMeasure11}
              {props.strIngredient12 && <br />}
              {props.strIngredient12 && props.strIngredient12} <span></span>
              {props.strMeasure12 && props.strMeasure12}
              {props.strIngredient13 && <br />}
              {props.strIngredient13 && props.strIngredient13} <span></span>
              {props.strMeasure13 && props.strMeasure13}
              {props.strIngredient14 && <br />}
              {props.strIngredient14 && props.strIngredient14} <span></span>
              {props.strMeasure14 && props.strMeasure14}
              {props.strIngredient15 && <br />}
              {props.strIngredient15 && props.strIngredient15} <span></span>
              {props.strMeasure15 && props.strMeasure15}
            </p>
            <p>{props.strInstructions}</p>
            <button onClick={props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
