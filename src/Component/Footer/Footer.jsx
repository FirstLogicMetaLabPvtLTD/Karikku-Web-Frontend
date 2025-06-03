import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='FootermainWrapper'>
            <img className='vector' src="./Images/footer-vector cr.png" alt="" />
            <div className="footer">
                <div className="container-fluid px-4">
                    {/* Newsletter Section */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <div className="karikku-logo mb-3">
                                <img src="./Images/Karikku logo-bg-removed.svg" alt="Karikku" className="logo" />
                            </div>
                            <h3 className="newsletter-title mb-4">
                                Subscribe to Karikku for<br />
                                future updates
                            </h3>
                            <div className="newsletter-form">
                                <div className="email">
                                    <input type="email" className="form-control newsletter-input" placeholder='Enter your email address' />

                                </div>
                                <div className="subscribe-btn">
                                    <button className="btn btn-success newsletter-btn">Subsribe</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Content */}
                    <div className="row main-row  footer-content-row px-lg-5">
                        {/* Location Section */}
                        <div className="col-12 col-lg-3 mb-4">
                            <h5 className="footer-heading">Location</h5>
                            <p className="footer-text mb-2">
                                Karikku ventures private limited,<br />
                                Perinthalmanna, Kerala, India, 679322
                            </p>
                            <p className="footer-text mb-2">
                                <span style={{ color: "#003E00" }}>(+91) 8589 8585 22<br />
                                    sales@karikku.co</span>
                            </p>
                        </div>

                        {/* Quick Links 1 */}
                        <div className="col-6 col-lg-2 mb-4 offset-lg-1 quick-links">
                            <h5 className="footer-heading">Quick links</h5>
                            <ul className="footer-links">
                                <li><Link to="/products">Our products</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/process">Our process</Link></li>
                            </ul>
                        </div>

                        {/* Quick Links 2 */}
                        <div className="col-6 col-lg-2 mb-4 quick-links">
                            <h5 className="footer-heading">Quick links</h5>
                            <ul className="footer-links">
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/careers">Blog</Link></li>
                                <li><Link to="/terms">Terms & conditions</Link></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="social-links">
                                <Link to="#" className="social-link">
                                    <FaLinkedinIn />
                                </Link>
                                <Link to="#" className="social-link">
                                    <FaFacebookF />
                                </Link>
                                <Link to="#" className="social-link">
                                    <FaInstagram />
                                </Link>
                                <Link to="#" className="social-link">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="row mt-4 pt-4 border-top">
                        <div className="col-12 col-md-6">
                            <p className="footer-copyright mb-0">
                                Karikku@All Rights Reserved
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-md-end">
                            <Link to="/privacy" className="privacy-link">
                                Privacy policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer