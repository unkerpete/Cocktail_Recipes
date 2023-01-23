import React from 'react';

const Modal = () => {
  // const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button onClick={handleClick} className='btn-modal'>
        Open
      </button>
    </>
  );
};

export default Modal;
