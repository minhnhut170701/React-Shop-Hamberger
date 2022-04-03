import React from 'react'
import StarIcon from '@mui/icons-material/Star';

import author1 from "../../images/author-1.jpg";
import author2 from "../../images/author-2.jpg";
import author3 from "../../images/author-3.jpg";
const Review = () => {
  return (
        <div className='mt-10'>
          {/* item 1 */}
            <div className='flex space-x-8 p-4'>
              <img src={author1} alt='error' className='w-20 h-20 rounded-full' />
              <div className='space-y-5'>

                <div>
                  <StarIcon style={{ color: '#f7be27' }}/>
                  <StarIcon style={{ color: '#f7be27' }}/>
                  <StarIcon style={{ color: '#f7be27' }}/>
                  <StarIcon style={{ color: '#f7be27' }}/>
                </div>

                <div className='flex items-center space-x-4'>
                  <h1 className='font-bold text-lg'>Sean mcmarthy</h1>
                  <h5 className='text-gray-400 text-lg font-medium'>December 4, 2020</h5>
                </div>

                <p>Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna tempus an aliquet porta vitae auctor aliqum mullam blandit tempor sapien gravida congue eros magna nihil impedit tempor. Semper lacus cursus porta lectus enim ipsum</p>

              </div>

            </div>
        </div>
  )
}

export default Review