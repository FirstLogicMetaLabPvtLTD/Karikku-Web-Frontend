import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Component/HomePage/HomePage'
import Cart from './Component/Cart/Cart'
import PageNotFound from './Component/PageNotFound/PageNotFound'
import AllProducts from './Component/AllProducts/AllProducts'
import Productsidebar from './Component/ProductSidebar/Productsidebar'
import ExploreProducts from './Component/ExploreProducts/ExploreProducts'
import AboutUs from './Component/AboutUs/AboutUs'
import ProductPage from './Component/ProductPage/ProductPage'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <HomePage/> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} /> {/* Catch-all route for 404 */}
          <Route path='/products' element={<AllProducts />} />
          <Route path='/Sidebar' element={<Productsidebar />} />
          <Route path='/ExploreProducts' element={<ExploreProducts />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/Product-page' element={<ProductPage />} />
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App