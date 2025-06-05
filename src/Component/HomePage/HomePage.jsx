import React from 'react'
import Banner from './Banner/Banner'
import About from './About/About'
import './HomePage.scss'
import OneDrop from './OneDrop/OneDrop'
import OurStory from './OurStory/OurStory'
import ProductCards from './ProductCards/ProductCards'
import Commitment from './Commitment/Commitment'
import GreenBanner from './GreenBanner/GreenBanner'
import FollowusandBlog from './FollowusandBlog/FollowusandBlog'
import Footer from '../common/Footer/Footer'
import Navbar from '../common/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className='HomePageWrapper'>
      <Navbar bgColor={"#FFFFFF"}/>
      <Banner/>
      <About/>
      <OneDrop/>  
      <OurStory/>
      <ProductCards/>
      <Commitment/>
      <GreenBanner/>
      <FollowusandBlog/>
      <Footer/>
    </div>
  )
}

export default HomePage
