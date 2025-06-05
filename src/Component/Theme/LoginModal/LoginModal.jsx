import React from 'react';
import './LoginModal.scss';

const LoginModal = ({ onClose }) => {
  // Handle clicking outside the modal to close it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='LoginModalMainWrapper' onClick={handleOverlayClick}>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2>Login / Register</h2>
          <button className='close-button' onClick={onClose}>
            ×
          </button>
        </div>
        <div className='modal-body'>
          {/* Add your login/register form content here */}
          <p>Login/Register form content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;