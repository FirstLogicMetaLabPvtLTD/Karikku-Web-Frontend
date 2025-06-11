import React, { useState } from 'react'
import CartNavbar from '../../common/CartNavbar/CartNavbar'
import './Cart.scss'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GoHeart } from 'react-icons/go';
import Footer from '../../common/Footer/Footer';
import CustomModal from '../../Theme/CouponModal/CouponModal';
import PaymentSummary from '../../Theme/PaymentSummary/PaymentSummary';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
      const navigate = useNavigate();

       const handleCartCheckout = () => {
        navigate('/address');
    };


  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Karikku pure Coconut Oil',
      type: 'Pet bottle',
      price: 1000,
      quantity: "2 Ltr",
      image: '/Images/cart-oil-bottle.svg',
      offer: '20% off'
    },
    // {
    //   id: 2,
    //   name: 'Karikku Pure Coconut Oil',
    //   type: 'Pouch',
    //   price: 543,
    //   quantity: 2,
    //   image: '/Images/cart-oil-bottle.svg',
    //   offer: '30% off'
    // },
    {
      id: 3,
      name: 'Tender Coconut Water',
      type: '20 pack',
      price: 14345,
      quantity: "100 ML",
      image: '/Images/cart-bottle.svg',
      offer: '5% off'
    }
  ]);
    const [count, setCount] = useState(2);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalMRP = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountOnMRP = 120.00;
  const couponSavings = 310.00;
  const gst = 8.00;
  const delivery = 0;
  const total = totalMRP - discountOnMRP - couponSavings + gst + delivery;
  return (
 <>
    <div className='CartMainwrapper'>
      <CartNavbar />
       <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title="Apply coupons"
      ></CustomModal>
      <div className="cart-header">
        <h2>My Cart ({cartItems.length})</h2>

      </div>

      <div className="cart-main-row row">
        <div className="col-lg-8 cart">
          {
            cartItems.map((item) => (
             <div className="cart-box" key={item.id}>
               <div className="cart-details-row" >
                <div className="cart-left">
                  <div className="prod-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-prod-detail">
                    <div className="quantity"><p>{item.quantity}</p></div>
                    <div className="prod-name"><h4>{item.name}</h4></div>
                    <div className="buttons">
                      <p><RiDeleteBin6Line className='btn-icon' /> Remove</p>
                      <div className="separator"></div>
                      <p><GoHeart className='btn-icon' /> Add to wishlist</p>
                    </div>
                  </div>
                </div>
                <div className="cart-right">
                  <div className="counter">
                    <button className="counter__btn counter__btn--minus" onClick={decrement}>
                      −
                    </button>
                    <span className="counter__value">{count}</span>
                    <button className="counter__btn counter__btn--plus" onClick={increment}>
                      +
                    </button>
                  </div>
                  <div className="price-detail" style={{textAlign:"end"}}>
                    <div className="r-price"><p>₹{item.price}</p></div>
                    <div className="offer-price">
                    <div className="mob-price"><p>₹{item.price}</p></div>

                      <strike>12000</strike>
                      <div className="off">
                       <p> 10% OFF</p>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>

             </div>

             
              
            ))
            
          }

        </div>
       <div className="col-lg-4">
        <PaymentSummary onCheckout={handleCartCheckout}/>
       </div>
      </div>
    </div>
    <Footer/>
 </>
  )
}

export default Cart
