import React, { useState } from 'react'
import CartNavbar from '../../common/CartNavbar/CartNavbar'
import CustomModal from '../../Theme/CouponModal/CouponModal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Address.scss'

const Address = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Home');
  const [phone, setPhone] = useState('');

  const [formData, setFormData] = useState({
    fullName: 'James Jacobe',
    phone: '9234 567 567',
    addressLine1: '',
    addressLine2: '',
    state: '',
    pinCode: '',
    saveAs: 'Home'
  });

  const addressTypes = [
    { id: 'Home', label: 'Home' },
    { id: 'Office', label: 'Office' }
  ];

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
      <CartNavbar />
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
            <div className="col-lg-7 address-form">
              <div className="row mb-3">
                <div className="col-lg-6">
                  <label htmlFor="fullName" className="form-label text-muted small input-label">
                    Email your full name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="name"
                    onChange={handleInputChange}
                    placeholder='Enter Full name here'

                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label htmlFor="fullName" className="form-label text-muted small input-label">
                    Phone*
                  </label>
                  <PhoneInput
                    country={'in'}
                    value={phone}
                    onChange={setPhone}
                    enableSearch={true}
                    disableCountryCode={true}
                    disableDropdown={false}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: false
                    }}
                    containerClass="custom-phone-container"
                    inputClass="custom-phone-input"
                    buttonClass="custom-flag-dropdown"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <label htmlFor="fullName" className="form-label text-muted small input-label">
                    Address line 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="addres-1"
                    placeholder='Enter address here'
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label htmlFor="fullName" className="form-label text-muted small input-label">
                    Address line 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="addres-2"
                    onChange={handleInputChange}
                    placeholder='Enter address here'
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <label htmlFor="fullName" className="form-label text-muted small input-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="state"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label htmlFor="fullName" className="form-label text-muted small input-label">
                    Pincode
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="w-full max-w-md mx-auto p-6 bg-white address-type">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Save address as</h3>
                <div className=" mb-6 adresses">
                  {addressTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={` rounded-full font-medium transition-all duration-200 ${selectedType === type.id
                          ? 'bg-green-500 text-white shadow-md transform scale-105 selected-type'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300  non-selected-type'
                        }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Address
