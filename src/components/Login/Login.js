import React, {useState, useRef} from 'react';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"


import banner from "../../images/login.jpg";
import {Helmet} from "react-helmet";

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()
  
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history("/")
    } catch {
      setError("Failed to log in")
    }
    setLoading(false)
  }

    
  return (
   
      <section className='md:flex
      border max-w-6xl ml-auto mr-auto mt-28 mb-16 rounded-md'>
        {/* banner */}
        <Helmet htmlAttributes>
                <meta charSet="utf-8" />
                <title>Login Page</title>
            </Helmet>
        <div className=' md:w-[60%] relative'>
           <img src={banner} alt="error" className='h-[600px] rounded-md' />
           <div className='absolute left-36 bottom-44  text-white text-center leading-5'>
              <h1 className='font-bold text-5xl'>VIP</h1>
              <p className='text-2xl font-medium'>Thành viên được nhận ưu đãi lên đến 
              <span className='bg-yellow-500 text-black ml-2'>50%</span></p>
           </div>
        </div>
        {/* login form */}
          <div className=' mr-auto ml-auto pt-28  md:w-[40%] pb-6'>
          <h1 className='font-bold text-2xl text-center p-4'>Login Page</h1>
          {error && <div className='bg-gray-300 text-red-600 p-4'>{error}</div>}
          <form onSubmit={handleSubmit}
          className=' p-10  ml-auto mr-auto space-y-10'>
              <label className='flex flex-col  font-bold' >Email: 
                <input 
                className=' p-2 border'
                type="email" 
                placeholder='Input Email...' 
                name='email'
                ref={emailRef}
                required/>
              </label>
              <label className='flex flex-col  font-bold' >Password: 
                <input 
                className=' p-2 border'
                type="password" 
                placeholder='Input Password...' 
                name='email'
                ref={passwordRef}
                required/>
              </label>

              <button disabled={loading}
              className='border p-2 mt-4
              bg-red-600 text-white 
              hover:bg-white border-red-600 hover:text-red-600 transition-all duration-300 ease-in-out
               flex items-center justify-center w-full'
              type='submit'>Login</button>
              
          </form>
            <div className="w-full text-center mt-2">
              Already have an account? <Link to="/signup"  className='text-yellow-500'>Sign Up</Link>
            </div>
        </div>

       
        
      </section>
     

      
      
    
  )

};



export default Login;