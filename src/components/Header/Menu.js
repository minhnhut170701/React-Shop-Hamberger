import React, {useState, useEffect} from 'react'
import logo from "../../images/logo-01.png";
import { useAuth } from "../../contexts/AuthContext"
import "../../App.css";
import { Link, useNavigate} from "react-router-dom";


//img
import img1 from "../../images/menu/img-01.jpg";
import img2 from "../../images/menu/img-02.jpg";
import img3 from "../../images/menu/img-03.jpg";
import img4 from "../../images/menu/img-04.jpg";
import img5 from "../../images/menu/img-05.jpg";
import img6 from "../../images/menu/img-06.jpg";
import img7 from "../../images/menu/img-07.jpg";

//icon
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';




const Menu = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [stickyClass, setStickyClass] = useState('absolute');
  const history = useNavigate()

  async function handleLogout() {
    setError("")
    if(currentUser){
      try {
        await logout()
        history("/login")
        alert("Đăng xuất thành công")
      } catch {
        setError("Failed to log out")
      }
    }
   
  };

  //call window event
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
   

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  //check height and set state
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('fixed -top-16 border-2 right-0 z-50 bg-white text-black') : setStickyClass('absolute');
    }
  };

 
  
  return (
    <div className={`w-full fixed z-50 menu-align right-0 flex text-white
    items-center justify-center p-4 ${stickyClass}`}>
        {error && alert(error)}
        <ul className=' flex items-center 
        justify-center space-x-9 max-w-6xl ml-20 uppercase font-bold text-lg'>
            <li><a href='#/top'>About</a></li>
            <li className='relative cursor-pointer dropdown '>
              <h1>Our menu</h1>
              <div className='absolute w-[900px] h-[500px] -left-24
              top-16 text-black normal-case drop-content transition-all duration-500 ease-in-out'>
                <div className='flex items-center bg-white'>
                  {/* menu item 1 */}
                <section className='grid grid-cols-2 gap-4  p-10 w-[100%]'>
                  {/* 1 */}
                  <div className='flex  space-x-2'>
                    <img src={img1} alt='error' className='w-24 h-24'/>
                    <div className='w-[100%]'>
                      <h1 className='text-sm font-bold'>ALIQUAM AND LOBORTIS...</h1>
                      <p className='text-sm normal-case text-gray-500 font-light'>Donec nec faucibus lobortis viverra blandit sem justo</p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className='flex  space-x-2'>
                    <img src={img2} alt='error' className='w-24 h-24'/>
                    <div>
                      <h1 className='text-sm font-bold '>DONEC NECA FAUCIBUS...</h1>
                      <p className='text-sm normal-case text-gray-500 font-light'>Aliquam ultrices ullamcoroe ultrices gravida dictum</p>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className='flex  space-x-2'>
                    <img src={img3} alt='error' className='w-24 h-24'/>
                    <div>
                      <h1 className='text-sm font-bold '>LOBORTIS SEM MAURIS...</h1>
                      <p className='text-sm normal-case text-gray-500 font-light'>Integer aliquet magna neca tellus orci quis semper</p>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className='flex  space-x-2'>
                    <img src={img4} alt='error' className='w-24 h-24'/>
                    <div>
                      <h1 className='text-sm font-bold '>FUSCE SEMPER ALIQUET..</h1>
                      <p className='text-sm normal-case text-gray-500 font-light'>Laoreet tellus a consectetur bibendum dolor posuere</p>
                    </div>
                  </div>
                  {/* 5 */}
                  <div className='flex  space-x-2'>
                    <img src={img5} alt='error' className='w-24 h-24'/>
                    <div>
                      <h1 className='text-sm font-bold '>ALIQUAM LIBERO IPSUM...</h1>
                      <p className='text-sm normal-case text-gray-500 font-light'>Sollicitudin ut gravida libero commodo sit malesuada</p>
                    </div>
                  </div >
                  {/* 6 */}
                  <div className='flex  space-x-2'>
                    <img src={img6} alt='error' className='w-24 h-24'/>
                    <div>
                      <h1 className='text-sm font-bold '>POSUERE HIMENAEOS...</h1>
                      <p className='text-sm normal-case text-gray-500 font-light'>Porta gravida hendrerit vitae blandit in phasellus ipsum</p>
                    </div>
                  </div>

                </section>
                {/* menu item 2 */}
                <section className='w-[30%] p-10'>
                  <img src={img7} alt='error' className='w-44 h-24' />
                  <div>
                    <h1  className='text-sm font-bold '>ETIAM SEMPER MAURIS...</h1>
                    <p className='text-sm normal-case text-gray-500 font-light'>
                      Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</p>
                  </div>
                </section>

                </div>
                
 
              </div>
            </li>
            <li><a href='#/top'>Megamenu</a></li>
            <li><Link to="/"><img src={logo} alt="error" className='w-40 h-20' /></Link></li>
            <li><a href='#/top'>Shop</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href='#/top'>Contacts</a></li>
            <li>
                <Link to="/cart" className=' relative'>
                    <ShoppingBagOutlinedIcon fontSize='large' />
                    <div className="absolute -top-2 -right-2 
                    text-sm bg-red-600 animate-pulse rounded-full w-5 text-gray-50
                    flex items-center justify-center">3</div>
                </Link>
            </li>
            <li className='relative active-User'>
              <Link to="/login"><PersonOutlineIcon fontSize='large' />
                <h1 className='text-sm lowercase absolute top-2 left-10'>{currentUser && currentUser.email}</h1>
              </Link>
              <div className='absolute top-10 w-[150px] -left-16 bg-white text-black opacity-0 menu-user transition-all duration-200 ease-in-out'>
                  <ul className='p-4 text-sm space-y-4 font-light'>
                      <li className='hover:underline'>Thông Tin</li>
                      <li className='hover:underline'>Đơn Hàng</li>
                      <li className='hover:underline'>Cài Đặt</li>
                      <li onClick={handleLogout}
                      className='hover:underline cursor-pointer'>Đăng Xuất</li>
                  </ul>
              </div>
            </li>
           
        </ul>
    </div>
  )
}

export default Menu