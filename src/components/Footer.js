import React from 'react';
import {Link} from "react-router-dom"

//logo
import logo from "../images/logo-01.png";
const Footer = () => {
  return (
    <div className='max-w-full'>
        <div className='lg:flex justify-around items-center max-w-6xl mr-auto ml-auto p-20'>
                <div className=' flex flex-col space-y-2'>
                   <Link to="/"><img src={logo} alt="logo" className='w-56 h-28' /> </Link>
                    <p>© 2020 Testo. All Rights Reserved</p>
                </div>

                <div className=' flex flex-col space-y-2 font-bold text-xl'>
                    <h1>Los Angeles,</h1>
                    <h1>8721 M Central Avenue, CA 90036</h1>
                    <h2>Email: hello@yourdomain.com</h2>
                    <p>Call Now: <span className='text-yellow-500'>789-654-3210</span></p>
                </div>

                <div className='grid grid-cols-3 gap-2'>
                    <img className="w-20 h-20" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-01.jpg" alt="error" />
                    <img className="w-20 h-20" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-02.jpg" alt="error" />
                    <img className="w-20 h-20" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-03.jpg" alt="error" />
                    <img className="w-20 h-20" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-04.jpg" alt="error" />
                    <img className="w-20 h-20" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-05.jpg" alt="error" />
                    <img className="w-20 h-20" src="https://jthemes.net/themes/html/testo/files/images/instagram/img-06.jpg" alt="error" />

                </div>
        </div>
       
    </div>
  )
}

export default Footer