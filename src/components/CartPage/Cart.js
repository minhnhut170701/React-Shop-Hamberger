import React from 'react'

import Header from "../Header/Menu"
import Checkout from './Checkout'
import Item from './Item'
//banner
import banner from "../../images/e-shop.png";

//logo
import logo1 from "../../images/appstore.png";
import logo2 from "../../images/googleplay.png";

//logo-menu
import logo from "../../images/logo-01.png";
//icon
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from "react-router-dom"
import {Helmet} from "react-helmet";
const Cart = () => {
  
  return (
    <div className='max-w-full'>
        <Helmet htmlAttributes>
                <meta charSet="utf-8" />
                <title>Cart Page</title>
            </Helmet>
        {/* Header */}
        <div className='bg-cart-pattern bg-cover h-[400px]'>
          <div className='sm:hidden'>
            <Header />
          </div>
          <div className='md:hidden flex items-center p-4 justify-between'>
              <Link to="/"><img title='logo' src={logo} alt="error" className='w-28 h-20' /></Link>
              <div className='text-white'><MenuIcon  fontSize='large'/></div>  
          </div>
          <p className='font-bold text-3xl text-white text-center relative top-44'>Shopping cart</p>
        
        </div>
        {/* infor item */}
        <div className='max-w-6xl mr-auto ml-auto mt-14'>
         
            <Item  />
        </div>
        {/* Check out */}
        <div className='max-w-6xl mt-14 mr-auto ml-auto lg:flex'>
          <Checkout />
        </div>

        {/* Banner footer */}
        <div className='flex items-center bg-[#ffc107] mt-28 relative lg:h-[410px]
        lg:flex-row space-y-6 lg:space-y-0 flex-col'>
            <div className='lg:space-y-3 lg:pl-44 sm:min-h-max space-y-4 p-4'>
                <h1 className='font-bold text-2xl text-[#642f21] sm:text-xl'>DOWNLOAD MOBILE APP AND</h1>
                <h1 className='font-bold text-6xl text-[#642f21] sm:text-lg'>SAVE UP TO 20%</h1>
                <p className='w-[70%] text-[#642f21]'>Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius</p>
                <div className='flex items-center space-x-4'>
                    <img title='App Store' src={logo1} alt='error' className='w-36 h-10' />
                    <img title='Google Play' src={logo2} alt='error' className='w-36 h-10' />

                </div>
            </div>

            <img title='banner' src={banner} className="md:w-[450px] md:h-[450px]  w-[200px] h-[200px]relative -top-5 " alt='error'  />
        </div>
    </div>
  )
}

export default Cart