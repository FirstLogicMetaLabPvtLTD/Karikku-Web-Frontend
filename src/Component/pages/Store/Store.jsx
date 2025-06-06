import React from 'react'
import Breadcrumb from '../../common/BreadCrumb/BreadCrumb'
import Navbar from '../../common/Navbar/Navbar';
import './Store.scss'
import { IoSearch, IoSearchOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from '../../common/Footer/Footer';

const Store = () => {
    const breadcrumbItems = [
        { label: 'Homepage', path: '/' },
        { label: 'Store', path: '/store' }
    ];
    return (
        <div className='storeMainWrapper'>
            <div className="container-fluid">
                <Navbar />
                <div className="gradient">
                    <img src="" alt="" />
                    <div className="container breadcrumb">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="our-branches">
                        <div className="branch-header">
                            <h3>Our Branches <br />always close to you!</h3>
                        </div>
                        <img className='palm' src="/Images/palm-vector.svg" alt="" />
                        <div className="branch-para">
                            <p>Find an Advanced Motors branch near you and experience top-tier service, expert guidance, and a premium selection of vehicles. With five locations across Saudi Arabia, we are committed to bringing you convenience, quality, and excellence in every visit. Step into any of our branches and drive away with confidence!</p>
                        </div>
                    </div>

                    <div className="sub-head">
                        <h3>All Branches</h3>
                        <div className="search-bar">
                            <input type="text" placeholder='Search for store by code' />
                            <div className="search-icon">
                                <IoSearch style={{ color: "#ffffff" }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* col-section */}
                <div className="branches">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="cards">
                                    <div className="card-image">
                                        <img src="/Images/br-1.svg" alt="" />
                                    </div>
                                    <div className="labels">
                                        <h4>Malappuram</h4>
                                        <div className="label-para">
                                            <p>Malappuram - Al-Marwa 3 District - Sultan bin Salman Road towards the west (between Al-Arbaeen,Road and Al-Sab’een Road)</p>
                                        </div>
                                        <a className='direction' href="">Get direction</a>
                                        <div className="contact">
                                            <p>Mail: sales@karikku</p>
                                            <p className='call'>Call Us: +91 <strong>1220 031 515</strong></p>
                                        </div>
                                        <div className="wp-icon">
                                            <img src="/Images/Wp logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="cards">
                                    <div className="card-image">
                                        <img src="/Images/br-2.svg" alt="" />
                                    </div>
                                    <div className="labels">
                                        <h4>Kozhikode</h4>
                                        <div className="label-para">
                                            <p>Kozhikode District - Sultan bin Salman Road towards the west (between Al-Arbaeen,Road and Al-Sab’een Road)</p>
                                        </div>
                                        <a className='direction' href="">Get direction</a>
                                        <div className="contact">
                                            <p>Mail: sales@karikku</p>
                                            <p className='call'>Call Us: +91 <span>1220 031 515</span></p>
                                        </div>
                                        <div className="wp-icon">
                                            <img src="/Images/Wp logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="cards">
                                    <div className="card-image">
                                        <img src="/Images/br-3.svg" alt="" />
                                    </div>
                                    <div className="labels">
                                        <h4>Perinthalmanna</h4>
                                        <div className="label-para">
                                            <p>PerinthalmannaSalman Road towards the west (between Al-Arbaeen,Road and Al-Sab’een Road)</p>
                                        </div>
                                        <a className='direction' href="">Get direction</a>
                                        <div className="contact">
                                            <p>Mail: sales@karikku</p>
                                            <p className='call'>Call Us: +91 <strong>1220 031 515</strong></p>
                                        </div>
                                        <div className="wp-icon">
                                            <img src="/Images/Wp logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="cards">
                                    <div className="card-image">
                                        <img src="/Images/br-4.svg" alt="" />
                                    </div>
                                    <div className="labels">
                                        <h4>Kochi</h4>
                                        <div className="label-para">
                                            <p>Kochi - Al-Marwa 3 District - Sultan bin Salman Road towards the west (between Al-Arbaeen,Road and Al-Sab’een Road)</p>
                                        </div>
                                        <a className='direction' href="">Get direction</a>
                                        <div className="contact">
                                            <p>Mail: sales@karikku</p>
                                            <p className='call'>Call Us: +91 <strong>1220 031 515</strong></p>
                                        </div>
                                        <div className="wp-icon">
                                            <img src="/Images/Wp logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="cards">
                                    <div className="card-image">
                                        <img src="/Images/br-5.svg" alt="" />
                                    </div>
                                    <div className="labels">
                                        <h4>Alappuzha</h4>
                                        <div className="label-para">
                                            <p>Alappuzha - Al-Marwa 3 District - Sultan bin Salman Road towards the west (between Al-Arbaeen,Road and Al-Sab’een Road)</p>
                                        </div>
                                        <a className='direction' href="">Get direction</a>
                                        <div className="contact">
                                            <p>Mail: sales@karikku</p>
                                            <p className='call'>Call Us: +91 <span>1220 031 515</span></p>
                                             <div className="wp-icon">
                                            <img src="/Images/Wp logo.svg" alt="" />
                                        </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="working-days">
                        <h3 className='main-head'>Working hours</h3>
                        <div className="content">
                            <div className="left">
                                <h3>Saturday-Sunday</h3>
                                <h6>First period:  10:30 AM - 1:30 PM.</h6>
                                <h6>Second period:  2:30 PM - 6:30 AM.</h6>
                            </div>
                            <div className="seperator"></div>
                              <div className="left">
                                <h3>Saturday-Sunday</h3>
                                <h6>First period:  10:30 AM - 1:30 PM.</h6>
                                <h6>Second period:  2:30 PM - 6:30 AM.</h6>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
            <Footer/>
        </div>
    )
}

export default Store
