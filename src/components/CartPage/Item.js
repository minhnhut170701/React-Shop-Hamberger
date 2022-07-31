import React from 'react';


import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



import { useSelector, useDispatch } from "react-redux";
const Item = () => {
 
    const cartProduct = useSelector((state) => state.cartItem)
    const totalItem = useSelector((state) => state.total)
    
    const dispatch = useDispatch()

    console.log(totalItem)
  


  return (
    <div className='overflow-x-auto'>
     <table className='lg:table-fixed sm:inline-table w-full text-left table-auto'>
            <thead>
                <tr className='border-b-black border border-transparent '>
                    <th className='lg:pb-10 pl-14 lg:pl-0' >Product</th>
                    <th className='lg:pb-10 pl-14 lg:pl-0'>Price</th>
                    <th className='lg:pb-10 pl-14 lg:pl-0' >Quantity</th>
                    <th className='lg:pb-10 pl-14 lg:pl-0' >Total</th>
                    <th className='lg:pb-10 pl-14 lg:pl-0' >Delete</th>
                </tr>
            </thead>
    {cartProduct.length === 0 ? (
        <div className='max-w-full mt-10'>
            <h1 className='text-2xl font-bold'>Nothing have any item...</h1>
        </div>
    ):
    (
       
        <tbody className='mt-10'>
            {/* item */}
            {cartProduct.map((item) =>( 
                <tr className='border-b-black border border-transparent ' key={item.id}>
                        <td className='lg:p-5 p-2 lg:pl-0'>
                            <div className='flex items-center space-x-4 '>
                                <img src={item.img} alt='error' className='w-20 h-16' />
                                <div>
                                    <h1 className='font-bold text-xl'>{item.name}</h1>
                                    <p className='font-sans text-gray-700 mr-20'>Magna donec and ipsum gravida</p>
                                </div>
                            </div>
                        </td>
                        <td className='p-5 lg:pl-0 pl-14'><h1 className='font-semibold text-xl'>${item.pirce}</h1></td>
                        <td className='p-5 lg:pl-0 pl-14'>
                            <div className='flex items-center space-x-3'>
                                <button className='font-bold'
                                onClick={() => dispatch(
                                    {
                                    //  Tên action và tham số truyền
                                        type: 'THEM_SL',
                                        productId: item.id
                                    }
                                ) }>+</button>

                                <p className='lg:w-10 text-center border '>{item.quantity}</p>

                                <button className='font-bold'
                                onClick={() => dispatch(
                                    {
                                    //  Tên action và tham số truyền
                                        type: 'GIAM_SL',
                                        productId: item.id
                                    }
                                ) }>-</button>
                                
                            </div>
                        
                        </td>
                        <td className='p-5 lg:pl-0 pl-14 mr-10'><h1 className='font-semibold text-xl'>${item.sum}</h1></td>
                        <td className='p-5 lg:pl-0 pl-14 ml-4'>
                            <button onClick={() =>
                                dispatch(
                                {
                                //  Tên action và tham số truyền
                                    type: 'XOA_CART',
                                    productId: item.id
                                }
                            )} >
                                <DeleteOutlineIcon fontSize='large' />
                            </button>
                        </td>
                    </tr>
            
            ))}
        </tbody>


     )}
    
     </table>
    </div>
  )
}

export default Item