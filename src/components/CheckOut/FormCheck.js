import React from 'react';
import { useDispatch } from "react-redux";
const FormCheck = ({handleNext}) => {

    const dispath = useDispatch();

    const handleSubmit = () =>{
        dispath({type: 'XOA_ALL',})
        alert("Thanh toán thành công!")
    }
  return (
    <form className='flex flex-col' onSubmit={() => {handleNext(); handleSubmit()}}>
        <div className='grid grid-cols-2 gap-4'>
            <label className='flex flex-col p-4 font-bold'>Họ và tên: *
            <input type='text' placeholder='Input name' id="name"  required
            className='p-4  border-b-black border border-transparent outline-none' />
            </label>
            <label className='flex flex-col p-4 font-bold'>Địa chỉ: *
            <input type='text' placeholder='Input Address' id="name" required
            className='p-4  border-b-black border border-transparent outline-none' />
            </label>
            <label className='flex flex-col p-4 font-bold'>SDT: *
            <input type='text' placeholder='Input Number' id="name" required
            className='p-4  border-b-black border border-transparent outline-none' />
            </label>
            <label className='flex flex-col p-4 font-bold'>Email: *
            <input type='text' placeholder='Input Email' id="name" required
            className='p-4  border-b-black border border-transparent outline-none' />
            </label>

        </div>
       <button type='submit'
        className='border mt-20 p-4 bg-blue-500 
       text-white border-blue-500 hover:bg-white hover:text-blue-500
       transition-all duration-300 ease-in-out
       '>CheckOut</button>
    </form>
  )
}

export default FormCheck