import React, { useState } from 'react'
import './ProductPage.scss'
import { MdOutlineSettings } from "react-icons/md";
import { FaRegFile } from "react-icons/fa";
import Navbar from '../../common/Navbar/Navbar'
import { IoSettingsOutline } from 'react-icons/io5';
import { GoPlus } from 'react-icons/go';
import Footer from '../../common/Footer/Footer';

const ProductPage = () => {

    const [selectedSize, setSelectedSize] = useState('12');



    const sizes = [
        { value: '12', label: '12' },
        { value: '24', label: '24' },
        { value: '48', label: '48' },
        { value: '200ml', label: '200 ml' },
        { value: '1L', label: '1 L' }
    ];

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





    ];


    return (
        <div className="Product-page-wrapper">
            <Navbar bgColor='#ffff' />
            <div className="container-fluid">
                <div className="product-page-sub row">
                    <div className="col-lg-6 col-md-6 col-sm-12 product-page-card">
                        <img src="/Images/Karikku-product.svg" alt="karikku" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 product-page-contents">
                        <h2>
                            Tender Coconut Water
                        </h2>

                        <p>
                            Premium Quality | 100% Pure | Cold Pressed | Hygienically packed in tamper-proof bottle
                        </p>

                        <p id='price'>
                            price range
                        </p>

                        <h3 className="price-range">
                            ₹90
                            <span id='offers'> (50% off)</span>
                        </h3>

                        <h4 className='packageing-select'>
                            Select Packing Size
                        </h4>

                        <div className="packing-selector-container">
                            <div className="size-options">
                                {sizes.map((size) => (
                                    <button
                                        key={size.value}
                                        className={`size-option ${selectedSize === size.value ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size.value)}
                                    >
                                        {size.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="Bulk-sections">
                            <div className="bulk-sections-content">
                                <IoSettingsOutline className='icons-bulk' />
                                <span className='contents'>
                                    Bulk orders available for all products, customized to your requirements.
                                </span>
                            </div>

                            <div className="bulk-sections-content">
                                <IoSettingsOutline className='icons-bulk' />
                                <span className='contents'>
                                    Full customer support and all necessary product documents provided for your convenience.
                                </span>
                            </div>
                        </div>

                        <div className='buy-now'>
                            <button>
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>

                <div className="text-only-product row">

                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-sections-whole">
                        <p>
                            Experience the purity of tradition with Karikku Pure Coconut Oil, extracted from carefully selected premium copra sourced from Kerala. Packed in a high-quality food-grade pouch, this oil is ideal for cooking, hair care, and skincare – bringing you the best of nature in its purest form.
                        </p>

                        <h6>
                            Storage Instructions : <span>Store in a cool, dry place. Keep away from direct sunlight .</span>
                        </h6>
                        <h6>
                            Shelf Life : <span> 12 months from the date of packaging.</span>
                        </h6>
                        <h6>
                            Certifications : <span>FSSAI Approved | 100% Vegetarian | Lab-tested purity</span>
                        </h6>

                    </div>
                </div>

                <div className="row image-whole-section">

                    <div className="col-lg-6 col-md-6 col-sm-6 " style={{ marginTop: '28px' }}>
                        <div className='card-image-section'>
                            <img src="/Images/Coconut-banner-product.svg" alt="" />
                        </div>

                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-6" style={{ marginTop: '28px' }}>
                        <div className="card-image-section-2">
                            <img src="/Images/Coconut-back.svg" alt="" />

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{ marginTop: '28px' }}>
                        <div className='card-image-section'>
                            <img src="/Images/Karikku-full.svg" alt="" />
                        </div>

                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-6 " style={{ marginTop: '28px' }}>
                        <div className="card-image-section-2">
                            <img src="/Images/Coconut-banner-product.svg" alt="" />

                        </div>

                    </div>

                </div>

                <div className="contaniner-fluid">
                    <div className="container">


                        <div className="our-process-main-section">
                            <h3 className='process'>
                                Our process
                            </h3>
                            <p className='Virgin'>
                                Virgin coconut oil
                            </p>


                            <div className="row">

                                <div className="col-lg-4  col-md-6 col-sm-12">

                                    <div className="cards-n-images-section">

                                        <img src="/Images/Coconut-Tree.svg" alt="" />

                                        <p className='steps-only'>
                                            step 01
                                        </p>

                                        <h6 className='Handpicked'>
                                            Handpicked at Peak Freshness
                                        </h6>

                                        <p className='para-process'>
                                            We select only the best tender coconuts, harvested at the perfect age for maximum hydration and taste.
                                        </p>





                                    </div>


                                </div>

                                <div className="col-lg-4  col-md-6 col-sm-12">

                                    <div className="cards-n-images-section">

                                        <img src="/Images/Coconut-Tree.svg" alt="" />

                                        <p className='steps-only'>
                                            step 02
                                        </p>

                                        <h6 className='Handpicked'>
                                            Handpicked at Peak Freshness
                                        </h6>

                                        <p className='para-process'>
                                            We select only the best tender coconuts, harvested at the perfect age for maximum hydration and taste.
                                        </p>





                                    </div>


                                </div>

                                <div className="col-lg-4  col-md-6 col-sm-12">

                                    <div className="cards-n-images-section">

                                        <img src="/Images/Coconut-dry.svg" alt="" />

                                        <p className='steps-only'>
                                            step 03
                                        </p>

                                        <h6 className='Handpicked'>
                                            Handpicked at Peak Freshness
                                        </h6>

                                        <p className='para-process'>
                                            We select only the best tender coconuts, harvested at the perfect age for maximum hydration and taste.
                                        </p>





                                    </div>


                                </div>

                            </div>

                            <h3 className='Other-pro'>
                                Other products
                            </h3>

                            <div className="row">
                                {products.map((product) => (
                                    <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                        <div className="product-card-main">
                                            <div className="product-card">
                                                <div className="prod-image-section">
                                                    <img src={product.image} alt={product.name} />
                                                    <div className="add-icon-wrapper">
                                                        <GoPlus className='add-icon' />
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <h3>{product.name}</h3>
                                                    <h4>{product.availability}</h4>
                                                    <p>{product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         <Footer />

        </div>
    )
}

export default ProductPage