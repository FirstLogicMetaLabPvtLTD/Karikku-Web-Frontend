import React, { useState, useEffect } from 'react'
import './ExploreProducts.scss'
import Navbar from '../../common/Navbar/Navbar'
import ProductSidebar from '../../Theme/ProductSidebar/Productsidebar'
import { VscSettings } from 'react-icons/vsc'
import Footer from '../../common/Footer/Footer'
import ProductSidebarMobile from '../../Theme/ProductSidebarMobile/ProductSidebarMobile'
import { GoPlus } from "react-icons/go";

const ExploreProducts = () => {
    const [sideBarIsOpen, setSidebarIsOpen] = useState(true);
    const [bottomBarIsOpen, setBottomBarIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Products data array
    const products = [
        {
            id: 1,
            name: "Karikku Pure Coconut Oil - Pet Bottle",
            image: "./Images/Tshirt.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 2,
            name: "Karikku Pure Coconut Oil - Pouch",
            image: "./Images/Cap.png",
            availability: "Available in 500ml, 1L",
            volumes: ["500ml", "1L"],
            price: "₹90"
        },
        {
            id: 3,
            name: "Tender Coconut Water",
            image: "./Images/TshirtW.png",
            availability: "Available in pack of 6,12,24,48",
            volumes: ["6", "12", "24", "48"],
            price: "₹159"
        },
        {
            id: 4,
            name: "Karikku Merchandise Bag",
            image: "./Images/Bag.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 5,
            name: "Karikku Pure Coconut Oil - Pet Bottle",
            image: "./Images/Bag.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 6,
            name: "Karikku Pure Coconut Oil - Pet Bottle",
            image: "./Images/Book.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 7,
            name: "Karikku Pure Coconut Oil - Pet Bottle",
            image: "./Images/Tshirt.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 8,
            name: "Karikku Merchandise Cap",
            image: "./Images/Cap.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 9,
            name: "Karikku Pure Coconut Oil - Pet Bottle",
            image: "./Images/Cap.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 10,
            name: "Karikku Pure Coconut Oil - Pet Bottle",
            image: "./Images/Tshirt.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 11,
            name: "Karikku Pure Coconut Oil - Pet Bottle",
            image: "./Images/TshirtW.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        },
        {
            id: 12,
            name: "Karikku Merchandise Book",
            image: "./Images/Book.png",
            availability: "Available in 1L",
            volumes: ["1L"],
            price: "₹89"
        }
    ];

    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            // On mobile, default sidebar to closed for better UX
            if (mobile && sideBarIsOpen) {
                setSidebarIsOpen(false);
            }
        };

        // Check on mount
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleSideBar = () => {
        setSidebarIsOpen(!sideBarIsOpen);
    }

    const handleBottomBar = () => {
        setBottomBarIsOpen(!bottomBarIsOpen);
    }

    // Dynamic column class based on sidebar state and screen size
    const getColumnClass = () => {
        if (isMobile) {
            return "col-6"; // 2 cards per row on mobile (50% width each)
        }
        return sideBarIsOpen
            ? "col-lg-4 col-md-6 col-sm-12" // 3 cards per row when sidebar is open
            : "col-lg-3 col-md-6 col-sm-12" // 4 cards per row when sidebar is closed
    }

    // Filter products based on sidebar state and mobile view
    const getVisibleProducts = () => {
        if (isMobile) {
            return products; // Show all products on mobile
        }

        // On desktop, show different number of products based on sidebar state
        const productsPerRow = sideBarIsOpen ? 3 : 4;
        const totalRows = 3;
        return products.slice(0, productsPerRow * totalRows);
    }

    // Chunk products into rows for better organization
    const chunkProducts = (products, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < products.length; i += chunkSize) {
            chunks.push(products.slice(i, i + chunkSize));
        }
        return chunks;
    }

    const visibleProducts = getVisibleProducts();
    const productsPerRow = isMobile ? 2 : (sideBarIsOpen ? 3 : 4);
    const productRows = chunkProducts(visibleProducts, productsPerRow);

    return (
        <div className='Explore-Main-wrapper'>
            <Navbar />

            <div className="explore-contents">
                <div className="breadcrumb-section-Explore"></div>

                <div className="Head-and-filter-main-flex">
                    <div className="heading-section-explore">
                        <h3>Explore our Merchandise Products</h3>
                        <div className="choose-section">
                            <p>Choose products</p>
                        </div>
                    </div>

                    <div className="fiiter-section-explore-child-flex">
                        <div className="filters-section-e" onClick={handleSideBar}>
                            <p>{sideBarIsOpen ? "Hide Filters" : "Show Filters"} <VscSettings /></p>
                        </div>

                        <div className="filters-section-e">
                            <select id="sortDropdown" className="sort-dropdown">
                                <option value="lowToHigh">Sort By</option>
                                <option value="lowToHigh">Price Low to High</option>
                                <option value="highToLow">Price High to Low</option>
                            </select>
                            {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">Sort by</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value="23"
                                    label="Age"
                                    // onChange={handleChange}
                                >
                                 
                                    <MenuItem value={10}>Price High to low</MenuItem>
                                    <MenuItem value={20}>Price Low to High</MenuItem>
                                </Select>
                            </FormControl> */}
                        </div>
                    </div>
                </div>

                <div className="cards-and-filter">
                    {/* Desktop Sidebar - Only show on desktop when open */}
                    {!isMobile && sideBarIsOpen && (
                        <div className="left-side">
                            <ProductSidebar bottomBarIsOpen={bottomBarIsOpen} />
                        </div>
                    )}

                    {/* Mobile Sidebar - Only show on mobile */}
                    {isMobile && (
                        <ProductSidebarMobile
                            isOpen={sideBarIsOpen}
                            onToggle={handleSideBar}
                            showTriggerButton={false}
                        />
                    )}

                    <div className="cards-whole-three right-side">
                        {productRows.map((product,) => (
                            <div key={product.id} className="row three-cards">
                                {product.map((product) => (
                                    <div key={product.id} className={getColumnClass()}>
                                        <div className="product-card-main">
                                            <div className="product-card">
                                                <div className="prod-image-section">
                                                    <img src={product.image} alt="" />
                                                    <div className="add-icon-wrapper">
                                                        <GoPlus className='add-icon' />
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <h3>{product.name}</h3>
                                                    <h4>{product.availability} <span>{product.volume}</span></h4>
                                                    <p>{product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ExploreProducts