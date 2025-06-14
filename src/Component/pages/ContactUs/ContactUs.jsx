import React from 'react'
import './ContactUs.scss'
import ContactForm from './ContactForm'
import Footer from '../../common/Footer/Footer'
import ExploreBtn from '../../Theme/Button/ExploreBtn'
import Navbar from '../../common/Navbar/Navbar'
const ContactUs = () => {
    return (
        <div className='contact-Main-wrapper'>
            <Navbar />
            <div className="contact-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <div className="contactus-lef-side">
                                    <h2>Contact Us</h2>
                                    <h1>We’d love to hear <br />from you!</h1>
                                    <p>Got questions about our natural products, bulk orders, or partnership opportunities? Drop us a message – we’re here to help!</p>
                                    {/* <ExploreBtn className='' buttonText='read more about us'/> */}

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="container commitment-features">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="./Images/contact-location.svg" alt="" />
                                <div className="feature-head">
                                    <h3>Address</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                        Karikku ventures private limited <br />perinthakmanna,kerala,india,679322
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <img src="./Images/contact-msg.svg" alt="" />
                                <div className="feature-head">
                                    <h3>Emails</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                        care@karikku.co <br />
                                        sales@karikku.co
                                    </p>
                                </div>
                            </div>                    <div className="col-lg-3">
                                <img src="./Images/contact-clock.svg" alt="" />
                                <div className="feature-head">
                                    <h3>Open</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                        Mon - Fri  :10am - 8pm <br />
                                        Saturday- Sunday: 10 am- 10pm
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <img src="./Images/contact-phone.svg" alt="" />
                                <div className="feature-head">
                                    <h3>call us</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                       (+91)8589 8585 22 <br />
                                       (+91)8589 8585 44
                                    </p>
                                    <p>
                                       (+91)8589 8585 66 <br />
                                       (+91)8589 8585 88
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-section">
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d979.0834196071572!2d76.34890363202973!3d11.013571985074222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749037524044!5m2!1sen!2sin" style={{ width: '100%', height: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default ContactUs