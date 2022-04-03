import React from 'react'

const InforCheck = ({name, img, pirce, quantity}) => {
  return (
    <>
        <img src={img} alt="error"  className='w-24 h-24'/>
        <div>
            <h1>{name}</h1>
            <p>${pirce}</p>
            <p>x{quantity}</p>
        </div>

    </>
  )
}

export default InforCheck