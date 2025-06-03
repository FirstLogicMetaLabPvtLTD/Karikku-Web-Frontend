import React, { useState } from 'react'
import './ExploreProducts.scss'
import Navbar from '../Navbar/Navbar'
import ProductSidebar from '../ProductSidebar/ProductSidebar'
import { VscSettings } from 'react-icons/vsc'
import { FiPlus } from 'react-icons/fi'
import Footer from '../Footer/Footer'

const ExploreProducts = () => {
    const [sideBarIsOpen, setSidebarIsOpen] = useState(true);
    const [bottomBarIsOpen, setBottomBarIsOpen] = useState(false)

    const handleSideBar = () => {
        setSidebarIsOpen(!sideBarIsOpen)
    }
    const handleBottomBar = () => {
        setBottomBarIsOpen(!bottomBarIsOpen)
    }

    // Dynamic column class based on sidebar state
    const getColumnClass = () => {
        return sideBarIsOpen
            ? "col-lg-4 col-md-6 col-sm-12" // 3 cards per row when sidebar is open
            : "col-lg-3 col-md-6 col-sm-12" // 4 cards per row when sidebar is closed
    }

    return (
        <div className='Explore-Main-wrapper'>

            <Navbar />

            <div className="explore-contents">


                <div className="breadcrumb-section-Explore">

                </div>

                <div className="Head-and-filter-main-flex">



                    <div className="heading-section-explore">

                        <h3>Explore our Merchandise Products</h3>
                        <div className="choose-section">
                            <p>Choose products</p>
                        </div>

                    </div>

                    <div className="fiiter-section-explore-child-flex">
                        <div className="filters-section-e" onClick={handleSideBar}>
                            <p>{sideBarIsOpen ? "Hide Filters" : "Show Filters"}  <VscSettings /></p>
                        </div>

                        <div className="filters-section-e">
                            {/* <label htmlFor="sortDropdown">Sort by</label> */}
                            <select id="sortDropdown" className="sort-dropdown">

                                <option value="lowToHigh">Sort By</option>
                                <option value="lowToHigh">Price Low to High</option>
                                <option value="highToLow">Price High to Low</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="cards-and-filter">

                    <div className={`${sideBarIsOpen ? "" : "hide"} left-side`} >

                        <ProductSidebar bottomBarIsOpen={bottomBarIsOpen} />
                    </div>


                    <div className="cards-whole-three right-side">

                        <div className="row three-cards">
                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/Tshirt.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>

                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                        <p className="availability">Available in <span className="volume"> 1L</span></p>
                                        <p className="price">₹89</p>
                                    </div>


                                </div>

                            </div>


                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/Cap.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pouch</h6>
                                        <p className="availability">Available in <span className="volume">500ml, 1L</span></p>
                                        <p className="price">₹90</p>
                                    </div>


                                </div>

                            </div>

                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/TshirtW.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Tender Coconut Water</h6>
                                        <p className="availability">Available in pack of<span className="volume"> 6,12,24,48</span></p>
                                        <p className="price">₹159</p>
                                    </div>


                                </div>

                            </div>

                            {/* Fourth card - only visible when sidebar is closed */}
                            {!sideBarIsOpen && (
                                <div className={getColumnClass()}>
                                    <div className="product-card">
                                        <div className="product-image">
                                            <div className="product-card-img-btn">
                                                <img src='./Images/Bag.png' alt='#' />
                                                <button className="add-btn"><FiPlus /></button>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <h6>Karikku Merchandise Bag</h6>
                                            <p className="availability">Available in <span className="volume"> 1L</span></p>
                                            <p className="price">₹89</p>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>

                        <div className="row three-cards">

                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/Bag.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                        <p className="availability">Available in <span className="volume"> 1L</span></p>
                                        <p className="price">₹89</p>
                                    </div>


                                </div>

                            </div>

                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/Book.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                        <p className="availability">Available in <span className="volume"> 1L</span></p>
                                        <p className="price">₹89</p>
                                    </div>


                                </div>

                            </div>

                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/Tshirt.png' alt='#' />
                                            <button className="add-btn"><FiPlus className='plus-icon' /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                        <p className="availability">Available in <span className="volume"> 1L</span></p>
                                        <p className="price">₹89</p>
                                    </div>


                                </div>

                            </div>

                            {/* Fourth card for second row */}
                            {!sideBarIsOpen && (
                                <div className={getColumnClass()}>
                                    <div className="product-card">
                                        <div className="product-image">
                                            <div className="product-card-img-btn">
                                                <img src='./Images/Cap.png' alt='#' />
                                                <button className="add-btn"><FiPlus /></button>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <h6>Karikku Merchandise Cap</h6>
                                            <p className="availability">Available in <span className="volume"> 1L</span></p>
                                            <p className="price">₹89</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="row three-cards">

                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/Cap.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                        <p className="availability">Available in <span className="volume"> 1L</span></p>
                                        <p className="price">₹89</p>
                                    </div>


                                </div>

                            </div>

                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/Tshirt.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                        <p className="availability">Available in <span className="volume"> 1L</span></p>
                                        <p className="price">₹89</p>
                                    </div>


                                </div>

                            </div>

                            <div className={getColumnClass()}>
                                <div className="product-card">
                                    <div className="product-image">
                                        <div className="product-card-img-btn">
                                            <img src='./Images/TshirtW.png' alt='#' />
                                            <button className="add-btn"><FiPlus /></button>



                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h6>Karikku Pure Coconut Oil - Pet Bottle</h6>
                                        <p className="availability">Available in <span className="volume"> 1L</span></p>
                                        <p className="price">₹89</p>
                                    </div>


                                </div>

                            </div>

                            {/* Fourth card for third row */}
                            {!sideBarIsOpen && (
                                <div className={getColumnClass()}>
                                    <div className="product-card">
                                        <div className="product-image">
                                            <div className="product-card-img-btn">
                                                <img src='./Images/Book.png' alt='#' />
                                                <button className="add-btn"><FiPlus /></button>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <h6>Karikku Merchandise Book</h6>
                                            <p className="availability">Available in <span className="volume"> 1L</span></p>
                                            <p className="price">₹89</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>


                </div>




            </div>


            <Footer />





        </div>
    )
}

export default ExploreProducts