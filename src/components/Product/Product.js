import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link} from "react-router-dom";


const Product = ({name, img, decs, pirce, idItem}) => {

  return (
    
       
      <div className='overflow-hidden rounded-xl '>
            <Link to={`/${idItem}/banh-mi-hamburger`}
              key={idItem}>
              <img src={img} alt='error' className='hover:scale-105 transition-all duration-300 rounded-[10px]' />
            </Link>
            <div className=' border-gray-300 border relative z-10 bg-white -top-3 space-y-4 rounded-b-[20px] 
            p-4'>
              {/* favorite and star */}
              <div className='flex items-center justify-between w-64   mt-2 p-2 -ml-2'>
                <div>
                  <StarIcon style={{ color: '#f7be27' }}/>
                  <StarIcon style={{ color: '#f7be27' }}/>
                  <StarIcon style={{ color: '#f7be27' }}/>
                  <StarIcon style={{ color: '#f7be27' }}/>
                </div>
                <FavoriteBorderOutlinedIcon />
              </div>

              {/* name */}
              <div className='w-64 ml-auto mr-auto space-y-4'>
                <h1 className=' font-bold text-xl text-[#642f21]'>{name}</h1>
                <p className='text-[#7d7f7d] max-h-12 overflow-hidden'>{decs}</p>
                <div className=' bg-[#642f21] w-20 rounded-md'>
                  <h5 className='text-[#f7be27] text-xl font-bold text-center'>$ {pirce}</h5>
                </div>
              </div>
            </div>
      </div>
    
    
  )
};

export default Product;