
import React from 'react'
import Navbar from '../../common/Navbar/Navbar'
import './AllProducts.scss'
import { Link } from 'react-router-dom'
import { ImArrowUpRight2 } from "react-icons/im";
import Footer from '../../common/Footer/Footer';


const AllProducts = () => {
    return (
        <div className='exclusivewrapper'>

            {/* /////// */}

            <Navbar />

            <div className="exclusive-content">
                <div className="breadcrumb-section">

                </div>
                <div className="heading-section">

                    <h3>Pick from our exclusive collection</h3>
                    <div className="choose-section">
                        <p>Choose products</p>
                    </div>

                </div>

                <div className="row three-cards">
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="product-card">
                            <div className="product-image">
                                <div className="product-card-img-btn">
                                    <img src='./Images/karikku oil pet front FRONT- 1.png' alt='#' />
                                    <button className="add-btn">+</button>



                                </div>
                            </div>
                            <div className="product-details">
                                <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                <p className="availability">Available in <span className="volume"> 1L</span></p>
                                <p className="price">₹89</p>
                            </div>


                        </div>

                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="product-card">
                            <div className="product-image">
                                <div className="product-card-img-btn">
                                    <img src='./Images/coconut oil pouch 1ltr front 1.png' alt='#' />
                                    <button className="add-btn">+</button>



                                </div>
                            </div>
                            <div className="product-details">
                                <h6>Karikku Pure Coconut Oil - Pouch</h6>
                                <p className="availability">Available in <span className="volume">500ml, 1L</span></p>
                                <p className="price">₹90</p>
                            </div>


                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="product-card">
                            <div className="product-image">
                                <div className="product-card-img-btn">
                                    <img src='./Images/1.png' alt='#' />
                                    <button className="add-btn">+</button>
                                </div>
                            </div>
                            <div className="product-details">
                                <h6>Tender Coconut Water</h6>
                                <p className="availability">Available in pack of<span className="volume"> 6,12,24,48</span></p>
                                <p className="price">₹159</p>
                            </div>

                        </div>

                    </div>

                    <Link to={'/ExploreProducts'}>
                        <div className="merchanise-banner">

                            <div className="merchanise-banner-sub">

                                <div className="text-section">
                                    <p>Explore our</p>
                                    <h2>Merchandise <br /> Products</h2>
                                    <button className="explore-btn"><ImArrowUpRight2 className='ICons-arrow' /></button>
                                </div>


                                <div className="background-shapes">
                                    <img src="/Images/Yellow-light.svg" alt="Yellow Light" className="light-img" />
                                    <br />

                                    <img src="/Images/Yelllow-line.svg" alt="Yellow Arc" className="dark-img" />
                                    <img src="/Images/child-image.svg" alt="child Arc" className="child-img" />
                                    <img src="/Images/Shirt.svg" alt="Shirt-Arc" className="shirt-img" />
                                    <img src="/Images/Cap.svg" alt="Cap-Arc" className="Cap-img" />
                                    <img src="/Images/White.svg" alt="White-shirt" className="White-shirt-img" />

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>

            <Footer />


        </div>
    )
}

export default AllProducts
