import React ,{ useState} from 'react';
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
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Header = () => {
    const [menu, setMenu] = useState(false)
    const {currentUser, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogut = async () =>{
        if(currentUser){
            try{
                await logout()
                navigate('/login')
            }
            catch{
                alert('LogOut failed')
            }
        }

    }
  return (

      <div className='relative max-w-full'>
        {/* header menu */}
            <div className='lg:block hidden'>
                <Menu />
            </div>
            <div className='lg:hidden flex items-center p-4 justify-between md:space-y-0 absolute top-0 z-50 w-full'>
                <Link to="/"><img src={logo} alt="error" className='lg:w-28 lg:h-20 w-36 h-20' /></Link>
                <button onClick={() => setMenu(!menu)} className='text-white text-5xl'><MenuIcon  fontSize='inherit'/></button>  
            </div>
            {menu && (
                <nav className=' absolute top-0 left-0 p-8 bg-white w-full z-50'>
                <section className='flex justify-between items-center'>
                    <h1 className='text-3xl underline'>Lucas Burger</h1>
                    <button onClick={() => setMenu(false)} className='text-xl'>X</button>
                </section>
                <ul className='mt-[50px]'>
                    <li className='p-6 border-t hover:bg-gray-400 cursor-pointer'><p>About</p></li>
                    <li className='p-6 border-t hover:bg-gray-400 cursor-pointer'><p>Our Menu</p></li>
                    <li className='p-6 border-t hover:bg-gray-400 cursor-pointer'><p>Blog</p></li>
                    <li className='p-6 border-t hover:bg-gray-400 cursor-pointer'><p>Contact</p></li>
                </ul>
                <p>{currentUser && currentUser.email}</p>
                <Link to="/login" > 
                    <button onClick={handleLogut}
                    className='text-center p-4 bg-red-600 text-white w-full mt-4'>
                        {currentUser ? 'Logout' : 'Login'}
                    </button>
                </Link>
            </nav>
            )}
            
        {/* banner */}
          <AutoplaySlider
            play={false}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={2000}
            animation="openAnimation"
            className='lg:h-[700px]'
            bullets={false}
            
            >
            <div data-src={img1} className="relative z-40 flex flex-col items-center lg:space-y-10 space-y-4 lg:mt-0 mt-[60px]">
                <p className='color-text font-bold text-xl md:text-6xl'>Good Time Great Taste.</p>
                <p className='color-text font-bold md:text-4xl text-xl'>Enjoy the food you love <span className='text-yellow-500'>FROM $6.99</span></p>
            </div>
            <div data-src={img2} className="relative z-40 flex flex-col items-center lg:space-y-10 space-y-4 lg:mt-0 mt-[60px]">
                <p className='color-text font-bold text-xl md:text-6xl'>Good Time Great Taste.</p>
                <p className='color-text font-bold md:text-4xl text-xl'>Enjoy the food you love <span className='text-yellow-500'>FROM $6.99</span></p>
            </div>
            <div data-src={img3} className="relative z-40 flex flex-col items-center lg:space-y-10 space-y-4 lg:mt-0 mt-[60px]">
                <p className='color-text font-bold text-xl md:text-6xl'>Good Time Great Taste.</p>
                <p className='color-text font-bold md:text-4xl text-xl'>Enjoy the food you love <span className='text-yellow-500'>FROM $6.99</span></p>
            </div>
         </AutoplaySlider>
      </div>
    
  )
};

export default Header;
