import React from 'react'
import './ProductPage.scss'
import Navbar from '../../common/Navbar/Navbar'

const ProductPage = () => {
    return (
        <div className='Product-page-wrapper'>
            <Navbar />
            <div className="product-page-sub row">

                <div className="col-lg-6 col-md-6 col-sm-12 product-page-card">

                    <img src="/Images/Karikku-product.svg" alt="karikku" />

                </div>

                <div className="col-lg-6  col-md-6  col-sm-12 product-page-contents">

                    <h2>
                        Tender Coconut Water
                    </h2>

                    <p>
                        Premium Quality | 100% Pure | Cold Pressed | Hygienically packed in tamper-proof bottle
                    </p>


                </div>

            </div>
        </div>
    )
}

export default ProductPage