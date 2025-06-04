import React from 'react';
import Modal from 'react-modal';
import './CouponModal.scss'
import { IoIosClose, IoMdClose } from 'react-icons/io';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function CustomModal({ isOpen, onRequestClose, children, title = "Hello" }) {
    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        if (subtitle) {
            subtitle.style.color = '#f00';
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="head">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
                <IoMdClose onClick={onRequestClose} />
            </div>
            <div className="input">
                <input type="text" placeholder='Enter coupon code' />
                <p>Check</p>
            </div>
            <div className="unlock-coupon">
                <h4>Unlock coupon</h4>
                <div className="content">
                    <input type="checkbox" />
                    <div className="labels">
                        <h4>Newjoin100</h4>
                        <p style={{color:"#D86B22"}}>Save ₹223.00</p>
                        <p style={{paddingTop:"0"}}>10% off minimum purchase rs.999 <br />
                            Expires on : 15 the October 2023 | 12:10 PM</p>
                    </div>
                </div>
                 <div className="content">
                    <input type="checkbox" />
                    <div className="labels">
                        <h4>Newjoin100</h4>
                        <p style={{color:"#D86B22"}}>Save ₹223.00</p>
                        <p style={{paddingTop:"0"}}>10% off minimum purchase rs.999 <br />
                            Expires on : 15 the October 2023 | 12:10 PM</p>
                    </div>
                </div>
            </div>
             <div className="checkout-btn">
            <button>Apply</button>
          </div>

        </Modal>
    );
}

export default CustomModal;