import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [showPswd,setShowPswd]=useState(false)
  return (
    <section className='min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12'>
      {/* login card */}
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10'>
        {/* brand name */}
        <Link to='/' className='flex items-center justify-center gap-2 mb-8'>
          <img src="/joblogo-removebg-preview.png" alt=""
            style={{ height: '40px', width: '40px' }} />
          <h1 className='text-xl md:text-2xl font-bold text-gray-900'>Career<span className='text-blue-600'>Connect</span></h1>
        </Link>

        {/* welcome */}
        <div className='text-center mb-8'>
          <h2 className='mb-3 text-gray-900 font-bold text-2xl'>Welcome Back !</h2>
          <p className='text-lg text-gray-600'>Login to continue</p>
        </div>

        {/* login form */}
        <form className='space-y-5'>
          {/* email */}
          <div>
            <label htmlFor="email" className='block text-sm font-semibold text-gray-700 mb-2'>Email</label>
             <div className='relative'>
              <FontAwesomeIcon icon={faEnvelope} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'/>
              <input type="email" placeholder='Enter your email' required className='w-full border border-gray-200 rounded-lg py-3 pl-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
             </div>
          </div>
          {/* password */}
          <div>

           <div className="flex items-center justify-between mb-2">
             <label htmlFor="password" className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
             <a href="#forgot-password" className='text-sm text-blue-600 hover:text-blue-800'>Forgot password?</a>
           </div>

           <div className='relative'>
            <FontAwesomeIcon icon={faLock} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'/>
            <input type={showPswd ? 'text' : 'password'} placeholder='Enter your password' required 
            onClick={()=>setShowPswd(!showPswd)} className='w-full border border-gray-200 rounded-lg py-3 pl-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
           <button type='button' className='absolute right-4 top-1/2 -translate-y-1/2 '>
             <FontAwesomeIcon icon={showPswd?faEyeSlash:faEye} className='text-gray-600'/>
           </button>
           </div>

          </div>

          {/* remember me */}
          <div className='flex items-center gap-2'>
            <input type="checkbox" className='w-4 h-4 accent-blue-600' id='remember'/>
            <label htmlFor="remember" className='text-sm text-gray-600'>Remember me</label>
          </div>

          {/* login btn */}
          <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>Login</button>
        </form>


        {/* register link */}
        <p className='text-center text-gray-600 text-sm mt-6'>
          Don't have an account?
          <Link to='/register' className='text-blue-600 font-semibold hover:text-blue-800'> Create Account</Link>
        </p>

      </div>
    </section>
  )
}

export default Login