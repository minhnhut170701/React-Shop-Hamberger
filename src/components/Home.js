import React from 'react'
import About from './About'
import Category from './Category'
import Comment from './Comment'
import  Header  from './Header/Header'
import Products from './Product/Products';


//img
import sale1 from '../images/sale-1.jpg';
import sale2 from '../images/sale-2.jpg';
import sale3 from '../images/sale-3.jpg';
import sale4 from '../images/sale-4.jpg';




const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Category />
        <Products />
        <Comment />
        {/* sale */}
        <div className='lg:grid grid-cols-2 gap-4 max-w-6xl mt-20 sm:space-y-4 p-4
        ml-auto mr-auto'>
          <div className=' overflow-hidden '>
            <img src={sale1} alt='error' className='hover:scale-105 transition-all duration-500 cursor-pointer' />
          </div>
          <div className=' overflow-hidden '>
            <img src={sale2} alt='error' className='hover:scale-105 transition-all duration-500 cursor-pointer' />
          </div>
          <div className=' overflow-hidden '>
            <img src={sale3} alt='error' className='hover:scale-105 transition-all duration-500 cursor-pointer' />
          </div>
          <div className=' overflow-hidden '>
            <img src={sale4} alt='error' className='hover:scale-105 transition-all duration-500 cursor-pointer' />
          </div>
        </div>

        {/* Map */}
        <div className='max-w-full mt-20 border'>
            <iframe
            title="How Can I overwrite the styles from the src content?"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.718498984674!2d106.86693981432249!3d10.984607592180435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174ddb237f9dd59%3A0x3ff1538c511f05d7!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBDw7RuZyBOZ2jhu4cgxJDhu5NuZyBOYWk!5e0!3m2!1svi!2s!4v1646226104998!5m2!1svi!2s"
            width="100%"
            height="500px"
            scrolling="no"
          />  
        </div>
    </div>
  )
}

export default Home