import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/lettering.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import img1 from "../../images/img-01.jpg";
import img2 from "../../images/img-02.jpg";
import img3 from "../../images/img-03.jpg";

import "../../App.css"
import Menu from './Menu';
//logo-menu
import logo from "../../images/logo-01.png";
//icon
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from "react-router-dom"


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Header = () => {
  return (

      <div className='relative max-w-full'>
        {/* header menu */}
            <div className='sm:hidden'>
                <Menu />
            </div>
            <div className='md:hidden flex items-center p-4 sm:space-x-64 absolute top-0 z-50'>
                <Link to="/"><img src={logo} alt="error" className='w-28 h-20' /></Link>
                <div className='text-white'><MenuIcon  fontSize='large'/></div>  
            </div>
        {/* banner */}
          <AutoplaySlider
            play={false}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={2000}
            animation="openAnimation"
            className='h-[700px]'
            bullets={false}
            
            >
            <div data-src={img1} className="relative z-50 -top-20">
                <p className='color-text font-bold mb-14 max-w-2xl lg:max-w-4xl
                mt-36 lg:-mt-0'>Good Time Great Taste.</p>
                <p className='color-text font-bold text-3xl'>Enjoy the food you love <span className='text-yellow-500'>FROM $6.99</span></p>
            </div>
            <div data-src={img2} className="relative z-50 -top-20">
                <p className='color-text font-bold mb-14 max-w-2xl lg:max-w-4xl
                mt-36 lg:mt-0'>Good Time Great Taste.</p>
                <p className='color-text font-bold text-3xl'>Enjoy the food you love <span className='text-yellow-500'>FROM $6.99</span></p>
            </div>
            <div data-src={img3} className="relative z-50 -top-20">
                <p className='color-text font-bold mb-14 max-w-2xl lg:max-w-4xl
               mt-36 lg:mt-0'>Good Time Great Taste.</p>
                <p className='color-text font-bold text-3xl'>Enjoy the food you love <span className='text-yellow-500'>FROM $6.99</span></p>
            </div>
         </AutoplaySlider>
      </div>
    
  )
};

export default Header;
