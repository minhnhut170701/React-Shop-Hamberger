import React from 'react';
import user from '../images/author-1.jpg';

import StarIcon from '@mui/icons-material/Star';
const Comment = () => {
  return (
    <div className='comment-banner h-[570px] max-w-full text-gray-50 mt-10'>
        <div className='flex flex-col items-center justify-center pt-[120px] space-y-5'>
            <img src={user} alt="error" className='lg:w-36 lg:h-36 w-24 h-24
            rounded-full' />
            <div className=' text-center max-w-4xl font-medium lg:text-3xl text-xl font-serif'>
                <p>
                "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque"</p>
            </div>

            <div>
                <StarIcon style={{ color: '#f7be27' }}/>
                <StarIcon style={{ color: '#f7be27' }}/>
                <StarIcon style={{ color: '#f7be27' }}/>
                <StarIcon style={{ color: '#f7be27' }}/>
                <StarIcon style={{ color: '#f7be27' }}/>
            </div>

            <h2 className=' uppercase'>BY SEAN MCMARTHY</h2>

        </div>
       
    </div>
  )
};

export default Comment;