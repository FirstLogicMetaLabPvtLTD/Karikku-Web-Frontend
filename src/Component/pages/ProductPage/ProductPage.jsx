import React, { useState } from 'react'
import './ProductPage.scss'
import { MdOutlineSettings } from "react-icons/md";
import { FaRegFile } from "react-icons/fa";
import Navbar from '../../common/Navbar/Navbar'
import { IoSettingsOutline } from 'react-icons/io5';

const ProductPage = () => {

    const [selectedSize, setSelectedSize] = useState('12');

    const sizes = [
        { value: '12', label: '12' },
        { value: '24', label: '24' },
        { value: '48', label: '48' },
        { value: '200ml', label: '200 ml' },
        { value: '1L', label: '1 L' }
    ];


    return (
        <div className="Product-page-wrapper">
            <Navbar bgColor='#ffff'/>
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
        </div>
    </div>
    )
}

export default ProductPage