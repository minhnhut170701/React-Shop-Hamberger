import React from 'react';


//icons
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MostRead = ({name, img, desc, comment,fav}) => {
  return (
    <section className='max-w-4xl flex space-x-4 border ml-auto mr-auto'>
                <div className='overflow-hidden'>
                    <img src={img} alt="error" className='w-full hover:scale-110 transition-all duration-400 ease-in-out'/>
                </div>
                <div className='mt-5 w-[100%] space-y-4 h-[300px]'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className='text-gray-400'>{desc}</p>
                    <div className='flex items-center space-x-5'>
                        <section className='text-gray-400 flex items-center space-x-2'>
                            <ChatBubbleIcon  fontSize='medium' />
                            <p>{comment}</p>
                        </section>
                        <section className='text-gray-400 flex items-center space-x-2'>
                            <FavoriteIcon  fontSize='medium' />
                            <p>{fav}</p>
                        </section>
                    </div>
                </div>
            </section>
  )
}

export default MostRead