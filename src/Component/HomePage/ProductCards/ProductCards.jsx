import React from 'react';
import './ProductCards.scss';
import ExploreBtn from '../../Button/ExploreBtn';

const ProductCards = () => {
  return (
    <div className='ProductCardWrapper'>
    <div className="container-fluid">
        <div className="row ">
        <div className="col-lg-6">
          <div className="product-card coconut-oil">
            <img className='oil-vector' src="./Images/oil-card-vector.svg" alt="" />
            <div className="available-text">AVAILABLE IN PACK OF</div>
            <div className="pack-options">
              <button className="pack-option">500 ml</button>
              <button className="pack-option">1 Ltr</button>
            </div>
            <div className="product-image">
              <img src="./Images/oil-card.svg" alt="Karikku Coconut Oil Pack" />
            </div>
            <h2 className="product-heading">
              Experience<br />
              Authentic Purity!
            </h2>
            <ExploreBtn buttonText='Buy Today' btnBgColor='#3DAE4A' borderColor='1px solid #3DAE4A' btnColor="white" arrowBgcolor='#0E3E13'  hoverBgColor='#2c863b'/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product-card coconut-water">
            <div className="available-text">AVAILABLE IN PACK OF</div>
            <div className="pack-options">
              <button className="pack-option oil-option">12</button>
              <button className="pack-option oil-option">24</button>
              <button className="pack-option oil-option">48</button>
              <button className="pack-option oil-option">200 ml</button>
            </div>
            <div className="product-image">
              <img className='bottle-card' src="./Images/bottle-card.svg" alt="Karikku Coconut Water Bottles" />
            </div>
            <h2 className="product-heading" style={{marginTop:"0"}}>
              Pure<br />
              Refreshment<br />
              Awaits!
            </h2>
            <p className="product-description">
              At <span className="brand">Karikku</span>, our journey is deeply 
              intertwined with the lush 
              landscapes of Kerala.
            </p>
            <img className='bottle-vector' src="./Images/bottle-card-vector.svg" alt="" />
              <ExploreBtn className='buy-button' buttonText='Buy Today' arrowBgcolor='#0E3E13' btnColor='white' borderColor='1px solid white' hoverBgColor='#2c863b'/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCards;