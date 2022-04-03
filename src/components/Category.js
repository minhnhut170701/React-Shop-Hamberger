import React from 'react';
//css
import"../App.css";

const Category = () => {
  return (
      <div className='max-w-full mt-24'>
          <div  className='lg:flex block max-w-6xl items-center justify-center sm:space-y-4 p-4
           lg:space-x-5 ml-auto mr-auto'>
                <div className='bg-img-1 rounded-lg'>
                    <div className='max-w-4xl flex items-end flex-col'>
                        <p className='text-[#6f5e4d] font-normal text-3xl uppercase'>GET YOUR FREE</p>
                        <p className='text-[#6f5e4d] font-bold text-3xl uppercase'>CHEESE FRIES</p>
                        <p className='no-underline border bg-red-600 text-gray-50 p-5 
                        hover:bg-gray-50 hover:border-red-600 hover:text-red-600 font-medium text-sm transition-all 
                        duration-500 mt-6 uppercase' >
                            Learn More
                        </p> 
                    </div>
                </div>

                <div className='bg-img-2 rounded-lg'>
                    <div className='max-w-4xl flex items-end flex-col'>
                        <p className='text-[#6f5e4d] font-normal text-3xl uppercase'>CRISPY CHICKEN</p>
                        <p className='text-[#6f5e4d] font-bold text-3xl uppercase'>BURGER IS BACK!</p>
                        <p  className='no-underline border bg-red-600 text-gray-50 p-5 
                        hover:bg-gray-50 hover:border-red-600 hover:text-red-600 font-medium text-sm transition-all 
                        duration-500 mt-6 uppercase' >
                            Learn More
                        </p> 
                    </div>
                    
                </div>
            </div>
      </div>
    
  )
};

export default Category;