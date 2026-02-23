import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import PageNotFound from './landing_page/PageNotFound.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Navbar />

    <Routes>
      
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/product' element={<ProductPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>


    </Routes>
    <Footer />

  </BrowserRouter>
)
