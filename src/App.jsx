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
import ContactUs from './Component/pages/ContactUs/ContactUs'
import Store from './Component/pages/Store/Store'
import Wishlist from './Component/pages/Wishlist/Wishlist'
import BlogDetailsPage from './Component/pages/BlogDetailsPage/BlogDetailsPage'
import Address from './Component/pages/Address/Address'

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
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/Product-page' element={<ProductPage />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/store' element={<Store />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/blog-details' element={<BlogDetailsPage/>}/>
          <Route path='/address' element={<Address/>}/>
          
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App