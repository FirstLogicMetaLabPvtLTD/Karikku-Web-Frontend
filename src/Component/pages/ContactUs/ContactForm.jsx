import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handlePhoneChange = (value, country) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-form-wrapper">
      <div className="palm-leaf-decoration"></div>
      <div className="contact-form-card">
        <h3 className="form-title">Contact us today!</h3>
        
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="James Jacobi |"
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="phone">Phone</label>
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: false
                }}
                containerClass="phone-input-container-new"
                inputClass="phone-input-field"
                buttonClass="country-selector-button"
                dropdownClass="country-dropdown"
                searchClass="country-search"
                placeholder="Enter phone number"
              />
            </div>
            
            <div className="form-group half-width">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@youremail.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              className="form-textarea"
              rows="4"
            />
          </div>

          <button 
            type="button" 
            className="submit-button"
            onClick={handleSubmit}
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;