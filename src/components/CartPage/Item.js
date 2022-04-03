import React from 'react';


import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



import { useSelector, useDispatch } from "react-redux";
const Item = () => {
 
    const cartProduct = useSelector((state) => state.cartItem)
    const totalItem = useSelector((state) => state.total)
    
    const dispatch = useDispatch()

    console.log(totalItem)
  


  return (
    <>
     <table className='md:table-auto sm:inline-table w-full text-left'>
            <thead>
                <tr className='border-b-black border border-transparent '>
                    <th className='pb-10' scope='col'>Product</th>
                    <th className='pb-10' scope='col'>Price</th>
                    <th className='pb-10' scope='col'>Quantity</th>
                    <th className='pb-10' scope='col'>Total</th>
                    <th className='pb-10' scope='col'>Delete</th>
                </tr>
            </thead>
    {cartProduct.length === 0 ? (
        <div className='max-w-full mt-10'>
            <h1 className='text-2xl font-bold'>Nothing have any item...</h1>
        </div>
    ):
    (
        <>
       
        {/* item */}
        {cartProduct.map((item) =>( 
            <tbody className='mt-10' key={item.id}>
                {/* item 1 */}
                <tr className='border-b-black border border-transparent '>
                    <td className='p-5 pl-0'>
                        <div className='flex items-center space-x-4'>
                            <img src={item.img} alt='error' className='w-20 h-16' />
                            <div>
                                <h1 className='font-bold text-xl'>{item.name}</h1>
                                <p className='font-sans text-gray-700'>Magna donec and ipsum gravida</p>
                            </div>
                        </div>
                    </td>
                    <td className='p-5 pl-0'><h1 className='font-semibold text-xl'>${item.pirce}</h1></td>
                    <td className='p-5 pl-0'>
                        <div className='flex items-center space-x-3'>
                            <button className='font-bold'
                            onClick={() => dispatch(
                                {
                                //  Tên action và tham số truyền
                                    type: 'THEM_SL',
                                    productId: item.id
                                }
                            ) }>+</button>

                            <p className='w-10 text-center border '>{item.quantity}</p>

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
                    <td className='p-5 pl-0'><h1 className='font-semibold text-xl'>${item.sum}</h1></td>
                    <td className='p-5 pl-0'>
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
            </tbody>
        ))}
        
        </>

     )}
    
     </table>
    </>
  )
}

export default Item