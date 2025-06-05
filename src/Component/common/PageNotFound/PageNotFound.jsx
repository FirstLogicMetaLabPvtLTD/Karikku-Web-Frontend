import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './PageNotFound.scss'

const PageNotFound = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <div className="page-not-found">
      <div className="container">
        <div className="error-content">
          <div className="error-animation">
            <div className="number">4</div>
            <div className="illustration">
              <div className="circle"></div>
              <div className="clip">
                <div className="paper">
                  <div className="face">
                    <div className="eyes">
                      <div className="eye eye-left"></div>
                      <div className="eye eye-right"></div>
                    </div>
                    <div className="rosyCheeks rosyCheeks-left"></div>
                    <div className="rosyCheeks rosyCheeks-right"></div>
                    <div className="mouth"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="number">4</div>
          </div>
          
          <div className="text-content">
            <h1>Oops! Page Not Found</h1>
            <p>The page you're looking for seems to have wandered off into the digital wilderness.</p>
            <div className="error-actions">
              <Link to="/" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Go Home
              </Link>
              <button onClick={handleGoBack} className="btn btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Go Back
              </button>
            </div>
          </div>
        </div>
        
        {/* <div className="helpful-links">
          <h3>Maybe you were looking for:</h3>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default PageNotFound