import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Component/HomePage/HomePage'
import PageNotFound from './Component/common/PageNotFound/PageNotFound'
import Productsidebar from './Component/Theme/ProductSidebar/Productsidebar'
import Cart from './Component/pages/Cart/Cart'
import AllProducts from './Component/pages/AllProducts/AllProducts'
import ExploreProducts from './Component/pages/ExploreProducts/ExploreProducts'
import AboutUs from './Component/pages/AboutUs/AboutUs'
import ProductPage from './Component/pages/ProductPage/ProductPage'
import Blogs from './Component/pages/Blogs/Blogs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} /> {/* Catch-all route for 404 */}
          <Route path='/products' element={<AllProducts />} />
          <Route path='/Sidebar' element={<Productsidebar />} />
          <Route path='/ExploreProducts' element={<ExploreProducts />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/Product-page' element={<ProductPage />} />
          <Route path='/blogs' element={<Blogs />} />
          {/* <Route path='/contact-us' element={<ContactUs />} /> */}
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App