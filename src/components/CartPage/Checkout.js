import React from 'react';

import {Link} from "react-router-dom"

import "../../App.css"

const Checkout = () => {
  return (
    <>
       <div className='lg:flex items-center relative lg:-top-28'>
           <form className='space-y-6 lg:space-y-0'>
               <input 
               type="text" 
               placeholder='Coupon Code' 
               className='w-48 p-3 mr-2 border-2'
               required/>
               <button type='submit'
               className=' uppercase p-2 bg-[#e84e1d] text-white text-lg  font-medium
               hover:bg-white hover:text-[#e84e1d] hover:border-[#e84e1d] border transition-all duration-200'>
                   Apply Coupon
               </button>
               <button className='uppercase p-2 
                bg-[#e84e1d] text-white text-lg  font-medium
                        hover:bg-white hover:text-[#e84e1d] hover:border-[#e84e1d] border transition-all duration-200'>
                     Update cart
            </button>
           </form>
           
       </div>
            
       <div className='lg:ml-14 relative pt-28 bg-[#f6f9fa] lg:p-20 p-10 mt-10'>
            <div>
                <h1 className='text-xl font-bold uppercase'>Cart Total</h1>
                <div className='flex items-center justify-between pt-4 pb-4 border-b-2'>
                    <h1 className='font-medium'>Subtotal</h1>
                    <p  className='font-medium'>$35.95</p>
                </div>
                <div className='flex items-center justify-between pt-4 pb-4 '>
                    <h1  className='font-medium'>Total</h1>
                    <p  className='font-medium'>$35.95</p>
                </div>
            </div>
            <Link to="/checkout" className=' uppercase p-2 w-fit bg-[#e84e1d] text-white text-lg  font-medium
                    hover:bg-white hover:text-[#e84e1d] hover:border-[#e84e1d] border transition-all duration-200'>
                        Proceed to checkout
            </Link>
       </div>
    </>
  )
}

export default Checkout