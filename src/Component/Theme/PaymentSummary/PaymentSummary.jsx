import React, { useState } from 'react'
import './PaymentSummary.scss'

const PaymentSummary = ({ onCheckout }) => {
     const [modalIsOpen, setModalIsOpen] = useState(false);
    
      function openModal() {
        setModalIsOpen(true);
      }
    
    //   function closeModal() {
    //     setModalIsOpen(false);
    //   }
      const handleCheckout = () => {
        if (onCheckout) {
            onCheckout();
        }
    }
  return (
    <div className='PaymentsummaryMainWrapper'>
       <div className=" payment-summary-section">
          <div className="coupon">
            <div className="left-coupon">
              <img src="/Images/coin.svg" alt="" />
              <h3>Apply coins</h3>
            </div>
            <div className="right-coupon">
              <p onClick={openModal}>Apply</p>
            </div>
          </div>
          <div className="payment-summary">
            <h3>Payment summary</h3>
            <table>
              <tr className='table-row'>
                <td className='left-side'>Total MRP</td>
                <td className='right-side'>₹223.00</td>
              </tr>
               <tr className='table-row'>
                <td className='left-side'>Discount on MRP</td>
                <td className='right-side'style={{color:"#3DAE4A"}}>₹223.00</td>
              </tr>
               <tr className='table-row'>
                <td className='left-side'>Coupon savings</td>
                <td className='right-side' style={{color:"#3DAE4A"}}>-₹223.00</td>
              </tr>
               <tr className='table-row'>
                <td className='left-side'>Appicable Gst</td>
                <td className='right-side'>₹223.00</td>
              </tr>
               <tr className='table-row border-bottom'>
                <td className='left-side'>Delivery</td>
                <td className='right-side'>₹223.00</td>
              </tr>
               <tr className='table-row'>
                <td className='left-side' style={{fontWeight:"600"}}>Total</td>
                <td className='right-side'  style={{fontWeight:"600"}}>₹1058.00</td>
              </tr>
            </table>
          </div>
          <div className="checkout-btn">
            <button onClick={handleCheckout}>Proceed to checkout</button>
          </div>
        </div>
    </div>
  )
}

export default PaymentSummary
