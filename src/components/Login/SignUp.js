import React, {useRef, useState} from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link,useNavigate } from "react-router-dom"
import banner from "../../images/login.jpg";
import {Helmet} from "react-helmet";
const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault()
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
      }
      else{
        try{
          setError('')
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history("/login")
        }catch{
          setError('Failed to create account')
        }
      }
      setLoading(false)

    }
  return (
    <section className='md:flex 
    border max-w-6xl ml-auto mr-auto mt-28 mb-16 rounded-md'>
      <Helmet htmlAttributes>
                <meta charSet="utf-8" />
                <title>Signup Page</title>
            </Helmet>
      {/* banner */}
      <div className=' md:w-[60%] relative'>
           <img src={banner} alt="error" className='h-[600px] rounded-md' />
           <div className='absolute left-36 bottom-44  text-white text-center leading-5'>
              <h1 className='font-bold text-5xl'>VIP</h1>
              <p className='text-2xl font-medium'>Thành viên được nhận ưu đãi lên đến 
              <span className='bg-yellow-500 text-black ml-2'>50%</span></p>
           </div>
        </div>

      {/* signup form */}
      <div className='md:w-[40%]  mr-auto ml-auto mt-10'>
        <h1 className='font-bold text-2xl text-center p-4'>SignUp Page</h1>
        <form onSubmit={handleSubmit}
        className='max-w-2xl p-10  ml-auto mr-auto space-y-10'>
          {error && <div className='bg-gray-300 text-red-600 p-4'>{error}</div>}
            <label className='flex flex-col  font-bold' >Email: 
              <input 
              className=' p-2 border '
              type="email" 
              placeholder='Input Email...' 
              name='email'
              ref={emailRef}
              required/>
            </label>
            <label className='flex flex-col  font-bold' >Password: 
              <input 
              className=' p-2 border '
              type="password" 
              placeholder='Input Password...' 
              name='email'
              ref={passwordRef}
              required/>
            </label>

            <label className='flex flex-col  font-bold' >
              Password Confirmation: 
              <input 
              className=' p-2  border'
              type="password" 
              placeholder='Input Password Confirmation...' 
              name='email'
              ref={passwordConfirmRef}
              required/>
            </label>

            <button disabled={loading}
            className='border p-2 mt-4
            bg-red-600 text-white 
              hover:bg-white border-red-600 hover:text-red-600 transition-all duration-300 ease-in-out
               flex items-center justify-center w-full'
            type='submit'>SignUp</button>
            
        </form>
        <div className="w-full text-center mt-2 pb-4">
            Already have an account? <Link to="/login" className='text-yellow-500'>Log In</Link>
          </div>

      </div>
    </section>
    
  )
}

export default SignUp