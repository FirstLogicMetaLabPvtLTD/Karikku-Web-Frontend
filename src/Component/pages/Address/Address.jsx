import React, { useState } from 'react'
import CartNavbar from '../../common/CartNavbar/CartNavbar'
import CustomModal from '../../Theme/CouponModal/CouponModal';
import './Address.scss'

const Address = () => {
      const [modalIsOpen, setModalIsOpen] = useState(false);
       const [formData, setFormData] = useState({
    fullName: 'James Jacobe',
    phone: '9234 567 567',
    addressLine1: '',
    addressLine2: '',
    state: '',
    pinCode: '',
    saveAs: 'Home'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveAsChange = (type) => {
    setFormData(prev => ({
      ...prev,
      saveAs: type
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Address added successfully!');
  };

      function closeModal() {
    setModalIsOpen(false);
  }
    
  return (
    <div className='AddressMainWrapper'>
      <CartNavbar/>
        <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title="Apply coupons"
      ></CustomModal>
      <div className="address">
        <div className="cart-header">
        <h2>Address</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-7 adress-form">

            </div>
            <div className="col-lg-5"></div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Address
