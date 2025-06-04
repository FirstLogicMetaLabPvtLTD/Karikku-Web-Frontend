import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { BsBasket3 } from 'react-icons/bs';

const Navbar = ({bgColor="#FFFFFF"}) => {
  

  // Off-canvas states
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="NavbarMainWrapper">
      <nav className={`navbar-desktop   navbar-expand-lg  fixed-top py-3`} style={{backgroundColor:bgColor}}>
        <div className="container-fluid d-flex justify-content-between align-items-center navbar-sub">
          {/* Left Links */}
          <div className="nav-item d-flex">
            <Link className="nav-link mx-2" to="/">Home</Link>
            <Link className="nav-link mx-2" to="/aboutus">About Us</Link>
            <Link className="nav-link mx-2" to="/process">Our Process</Link>
            <Link className="nav-link mx-2" to="/stores">Stores</Link>
          </div>

          {/* Center Logo */}
          <div className="Nav-logo mx-auto position-absolute start-50 translate-middle-x">
            <Link className="navbar-brand " to="/">
              <img src="./Images/Karikku logo-bg-removed.svg" alt="Karikku Logo" style={{ height: '40px' }} />
            </Link>
          </div>

          {/* Right Links */}
          <div className="nav-item d-flex align-items-center">
            <Link className="nav-link mx-2" to="/products">Our Products</Link>
            <Link className="nav-link mx-2" to="/whishlist">Whishlist</Link>
            <Link className="nav-link mx-2 d-flex align-items-center" to="/cart">
              <span className="me-1"><BsBasket3 className='basket-icon' /></span>Cart
            </Link>
            <Link to="/login" className="btn btn-success ms-2 px-3 py-1 rounded-pill">
              Login/ Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile-Navbar */}

      <div className="Mobile-Navbar">
        {/* Top navbar */}
        <nav className="navbar bg-light px-3 fixed-top">
          <Link className="navbar-brand" to="/">
            <img src="./Images/Karikku logo 1.png" alt="Karikku" width="55" />
          </Link>
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            ☰
          </button>
        </nav>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <img
            src="./Images/img_greenleafe.svg"
            alt="Palm Leaf"
            className="palm-leaf-overlay"
          />
          <img
            src="./Images/Vector.svg"
            alt="Bottom Leaf"
            className="leaf-bottom"
          />
          <div className="offcanvas-header  text-white">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body text-white d-flex flex-column justify-content-between">
            <ul className="navbar flex-column gap-3 mt-4" type='none'>
              <li><Link to="/" className="text-white text-decoration-none offcanvas-link"><img className='off-image' src="./Images/off canvas logo.png" alt="" /></Link></li>
              <li><Link to="/" className="text-white text-decoration-none offcanvas-link">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none offcanvas-link">About Us</Link></li>
              <li><Link to="/process" className="text-white text-decoration-none offcanvas-link">Our Process</Link></li>
              <li><Link to="/stores" className="text-white text-decoration-none offcanvas-link">Stores</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none offcanvas-link">Our Products</Link></li>
              <li><Link to="/whishlist" className="text-white text-decoration-none offcanvas-link">Whishlist</Link></li>
              <li><Link to="/cart" className="text-white text-decoration-none offcanvas-link">Cart</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none offcanvas-link">Contact Us</Link></li>
            </ul>
            <div className="text-center mt-4">
              <Link to="/login" className="btn btn-light text-success rounded-pill px-4">
                Login / Register
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>

  );
}

export default Navbar;
