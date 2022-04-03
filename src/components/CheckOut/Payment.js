import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Payment = ({handleNext}) => {
  return (
    <div>
      <section className='text-blue-500 flex items-center space-x-4'>
        <h1 className='font-bold text-xl '>Đang vận chuyển</h1>
        <LocalShippingIcon fontSize='large' />
      </section>
      
      <button className='p-4 border border-blue-500 text-white font-bold bg-blue-500
      hover:bg-white hover:text-blue-500 transition-all duration-500 ease-in-out'
      onClick={() => handleNext()}>Đã nhận được hàng</button>

    </div>
    
  )
}

export default Payment