import React from 'react';
//img
import aboutBanner from "../images/about-01.png";
import burger from "../images/burger.png";
import fire from "../images/fries.png";
import ckicken from "../images/chicken.png";
import salad from "../images/salad.png";


//css
import"../App.css";
const About = () => {
  return (
    <div className='max-w-full lg:flex block lg:max-w-6xl
    items-centerjustify-center ml-auto mr-auto pt-24 lg:space-x-4 p-4'>
       <img src={aboutBanner} alt="error" className='lg:w-[50%] h-[700px] xl:-mt-[300px] lg:-mt-0 ml-auto mr-auto' />
       <div className='lg:max-w-[40%]'>
            <h2 className=' font-bold text-5xl text-red-900'>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h2>
            <p className='mt-4 text-gray-600 text-lg'>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor 
            lacinia cubilia curae at integer orci congue and metus in mollislorem primis gravida</p>
            {/* Icon */}
            <div className='flex items-center justify-center lg:space-x-4 mt-10 space-x-2 '>
              <div className='flex flex-col items-center justify-center'>
                <img title='burger' src={burger} alt='error' className='w-[100px] h-[70px] mt-3' />
                <p className='font-bold text-lg'>BURGERS</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
               <img title='fire' src={fire} alt='error' className='w-[100px] h-[70px] mt-3' />
               <p className='font-bold text-lg'>FRIES</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img title='ckicken' src={ckicken} alt='error' className='w-[100px] h-[70px] mt-3' />
                <p className='font-bold text-lg'>CHICKEN</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img title='salad' src={salad} alt='error' className='w-[100px] h-[70px] mt-3' />
                <p className='font-bold text-lg'>SALADS</p>
              </div>
            </div>
       </div>
    </div>
  )
};

export default About