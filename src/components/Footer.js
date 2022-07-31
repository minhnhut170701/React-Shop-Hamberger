import React from 'react';
import {Link} from "react-router-dom"

//logo
import logo from "../images/logo-01.png";
const Footer = () => {
  return (
    <div className='max-w-full'>
        <div className='lg:flex justify-around items-center max-w-6xl mr-auto ml-auto lg:p-20 p-10'>
                <div className=' flex flex-col space-y-2'>
                   <Link to="/"><img src={logo} alt="logo" className='w-56 h-28' /> </Link>
                    <p>© 2020 Testo. All Rights Reserved</p>
                </div>

                <div className=' flex flex-col space-y-2 font-bold text-xl'>
                    <h2>Los Angeles,</h2>
                    <a href='https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+C%C3%B4ng+Ngh%E1%BB%87+%C4%90%E1%BB%93ng+Nai/@10.9846076,106.8691285,15z/data=!4m5!3m4!1s0x0:0x3ff1538c511f05d7!8m2!3d10.9846076!4d106.8691285' 
                    target='_blank' rel="noreferrer">
                      <h2>8721 M Central Avenue, CA 90036</h2>
                    </a>
                    <a href='https://www.facebook.com/key.boysin/' target='_blank' rel="noreferrer"><h2>Email: hello@yourdomain.com</h2></a>
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
       <div className='max-w-6xl mx-auto pb-4'>
          <ul className='flex lg:items-center lg:space-x-4 flex-col lg:flex-row p-4 '>
              <li><h2 className='font-bold text-lg'>Liên quan: </h2></li>
              <li>
                <a href='https://www.bachhoaxanh.com/kinh-nghiem-hay/4-cach-lam-banh-mi-hamburger-ngon-don-gian-tai-nha-1408310'>
                    Cách làm bành mì hamburger
                </a>
              </li>
              <li><a href='#/top'>Vỏ bánh mì hamburger</a></li>
              <li><a href='#/top'>Cách làm bành mì hamburger bằng nồi chiên không dầu</a></li>
              <li><a href='#/top'>Cách làm bành mì gà</a></li>
          </ul>

      </div>
    </div>
  )
}

export default Footer