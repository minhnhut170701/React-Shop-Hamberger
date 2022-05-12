import React from 'react'
import { useParams } from "react-router-dom";
import { getInvoice } from "../../data/item";

import {Link} from "react-router-dom"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


import {useDispatch } from "react-redux";
const InforItem = () => {
   
     // lấy id được truyền vào từ trang chủ
     let params = useParams();
     // lấy id được truyền rồi xét xem có trong data hay khong 
     // sau đó trả về data
     let invoice = getInvoice(parseInt(params.invoiceId, 10));
    
     //lấy id sản phẩm đã hiện tại trong trang chi tiết
     const productId = invoice.id;


     const dispatch = useDispatch()

  return (
         <div className='lg:flex lg:space-x-20 max-w-4xl mr-auto ml-auto mt-10 p-4'>
                <div className='w-full'>
                    <img src={`${invoice.img}`} alt={invoice.name} loading='lazy' className='w-full h-[450px] object-cover' />
                </div>

                <div>
                    <h2 className='font-bold text-4xl pb-10 uppercase'>{invoice.name}</h2>
                    <div className='pb-10'>
                        <p className='font-bold text-xl'>Giá: <span className='text-yellow-500'>${invoice.pirce}</span></p>
                        <p></p>
                    </div>
                    <p className="leading-6 text-gray-500 text-lg">{invoice.decs}</p>

                    {/* infor */}
                    <div className='mt-4 space-y-2 '>
                        <div className='flex items-center justify-between border-b-2 pb-4'>
                            <h3 className='font-bold text-lg'>Portion Size:</h3>
                            <p>390g</p>
                        </div>
                        <div className='flex items-center justify-between border-b-2 pb-4'>
                            <h3 className='font-bold text-lg'>Calories:</h3>
                            <p>680Kj</p>
                        </div >
                        <div className='flex items-center justify-between border-b-2 pb-4'>
                            <h3 className='font-bold text-lg'>Allergies:</h3>
                            <p>Lactose, Gluten, Mustard</p>
                        </div>
                        <div className='flex items-center justify-between border-b-2 pb-4'>
                            <h3 className='font-bold text-lg'>Tags:</h3>
                            <p>Burgers, Fast Food, Testo</p>
                        </div>
                    </div>

                    {/* add to cart */}
                    <div className='mt-10 space-x-4 flex items-center p-4'>
                        <input type="number" value='1' min="1" max="20" className='outline-none border w-16 p-2' />
                        <Link to="/cart" onClick={() =>
                            dispatch(
                            {
                            //  Tên action và tham số truyền
                                type: 'THEM_CART',
                                productId: productId
                            }
                        )}
                        className='font-bold bg-yellow-400 p-1 pl-4 pr-4 flex items-center'>
                            <ShoppingBagOutlinedIcon fontSize='large' />
                            ADD to cart
                        </Link>
                    </div>
                </div>
            </div>
  )
}





export default InforItem