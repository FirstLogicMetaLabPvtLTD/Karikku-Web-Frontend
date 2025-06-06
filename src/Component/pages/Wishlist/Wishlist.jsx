import React from 'react'
import './Wishlist.scss'
import Navbar from '../../common/Navbar/Navbar'
import Breadcrumb from '../../common/BreadCrumb/BreadCrumb'
import { GoPlus } from 'react-icons/go'
import { FaHeart } from 'react-icons/fa'
import Footer from '../../common/Footer/Footer'

const Wishlist = () => {
    const breadcrumbItems = [
        { label: 'Homepage', path: '/' },
        { label: 'Wishlist', path: '/wishlist' }
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
        
    ]
    return (
        <div className='WishlistMainwrapper'>
            <div className="container-fluid">
                <Navbar />
                <div className="breadcrumb">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="wishlist">
                    <div className="wishlist-header">
                        <h3>Wishlist</h3>
                        <p>Choose products</p>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                                {products.map((product) => (

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="products" key={product.id}>
                                     <div className="product-card-main">
                                           <div className="product-card">
                                            <div className="prod-image-section">
                                                <div className="heart-icon-section">
                                                    <FaHeart className='heart-icon' />

                                                </div>
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
                              
                            </div>
                              ))}
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Wishlist
