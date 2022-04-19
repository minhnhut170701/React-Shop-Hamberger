import React from 'react';

import {Link} from "react-router-dom"

//data
import data from "../../data/blog";

//compnents
import Header from "../Header/Menu";

//images
import img1 from "../../images/blog/img-01.jpg";

//icons
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BlogPage from './BlogPage';
import MostRead from './MostRead';

const Blogs = () => {
  return (
    <div>
        {/* container header */}
        <div className='bg-blog-pattern h-[400px] flex'>
            <Header />
            <h1 className='text-6xl font-bold uppercase text-white flex items-center max-w-6xl mr-auto ml-auto'>Blog Listing</h1>
        </div>

        {/* infor */}
        <div className='max-w-6xl mr-auto ml-auto mt-10'>
            {/* favblog */}
            <section className='max-w-6xl flex space-x-4 border ml-auto mr-auto'>
                <Link to="/banh-mi-hamhuger" className='overflow-hidden'>
                    <img src={img1} alt="error" className='w-full hover:scale-110 transition-all duration-400 ease-in-out'/>
                </Link>
                <div className='mt-5 w-[70%] p-4 space-y-4'>
                    <h1 className='text-2xl font-bold'>QUAERAT NEQUE PURUS IPSUM A NEQUE DOLOR</h1>
                    <p className='text-gray-400'>ALIQUM MULLAM BLANDIT TEMPOR AT SAPIEN GRAVIDA DONEC IPSUM JUSTO LECTUS AENEAN MAGNA...</p>
                    <div className='flex items-center space-x-5'>
                        <section className='text-gray-400 flex items-center space-x-2'>
                            <ChatBubbleIcon  fontSize='medium' />
                            <p>15</p>
                        </section>
                        <section className='text-gray-400 flex items-center space-x-2'>
                            <FavoriteIcon  fontSize='medium' />
                            <p>10</p>
                        </section>
                    </div>
                </div>
            </section>

            {/* list blog */}
            <section className='max-w-6xl mr-auto ml-auto mt-10 space-y-4'>
                <h1 className='text-xl font-bold border-b-black border border-transparent pb-2'>LATEST ARTICLES</h1>
                <div className='flex items-center space-x-4'>
                    {data.slice(0,3).map((item) =>(
                        <div key={item.id}>
                            <BlogPage  name={item.name} img={item.img} desc={item.desc} comment={item.comment} fav={item.fav} />
                        </div>
                        
                    ))}
                </div>
            </section>

            {/* most read */}
            <section className='max-w-6xl mr-auto ml-auto mt-10 space-y-4'>
                <h1 className='text-xl font-bold border-b-black border border-transparent pb-2'>MOST READ ARTICLES</h1>
                <div>
                    {data.slice(3,5).map((item) =>(
                        <div key={item.id}>
                            <MostRead  name={item.name} img={item.img} desc={item.desc} comment={item.comment} fav={item.fav} />
                        </div>
                        
                    ))}
                </div>
            </section>
        </div>

        {/* Conntact */}
        <aside className='max-w-6xl mr-auto ml-auto mt-28 
        text-center border bg-gray-100 space-y-4 p-10'>
            <h1 className='text-2xl font-bold'>SUBSCRIBE TO NEWSLETTER</h1>
            <p className='text-gray-500'>Subscribe to the weekly newsletter for all the latest updates</p>
            <form className='flex justify-center space-x-2'>
                <input type='text' placeholder='Your email address' required
                className='w-56 h-14 p-2 border-gray-500 border' />
                <button type='submit' className='p-4 border bg-red-600 text-white
                 hover:bg-white hover:text-red-600 border-red-600
                transition-all duration-300 ease-in-out font-bold'>SIGN UP</button>
            </form>
        </aside>

    </div>
    
  )
}

export default Blogs