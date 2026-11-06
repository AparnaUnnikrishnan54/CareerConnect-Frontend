import { faE, faEnvelope, faEye, faEyeSlash, faLock, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [showPswd,setShowPswd]=useState(false)
  const [showConfirmPswd,setShowConfirmPswd]=useState(false)
  return (
    <section className='min-h-screen bg-blue-50 flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-7xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
        {/* left side */}
        <div className='p-6'>
          {/* logo */}
          <Link to='/' className='flex items-center justify-center gap-2 mb-8'>
            <img src="/joblogo-removebg-preview.png" alt=""
              style={{ height: '40px', width: '40px' }} />
            <h1 className='text-xl md:text-2xl font-bold text-gray-900'>Career<span className='text-blue-600'>Connect</span></h1>
          </Link>
          <h2 className='text-gray-900 font-bold text-3xl mb-2'>Create Your Account</h2>
          <p className='text-gray-500 mb-7'>Join CareerConnect and take the next step towards your dream career.</p>
          
          {/* form */}
          <form className='space-y-5'>
            {/* full name   */}
            <div>
              <label htmlFor="name" className='text-sm font-semibold text-gray-700'>Full Name</label>
              <div className='mt-2 relative'>
                <FontAwesomeIcon icon={faUser} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400'/>
                <input type="text" placeholder='Enter your full name' required className='w-full border border-gray-200 rounded-lg py-3 pl-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
              </div>
            </div>
            {/* email */}
            <div>
              <label htmlFor="email" className='text-sm font-semibold text-gray-700'>Email</label>
              <div className='mt-2 relative'>
                <FontAwesomeIcon icon={faEnvelope} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400'/>
                <input type="email" placeholder='Enter your email' required className='w-full border border-gray-200 rounded-lg py-3 pl-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
              </div>
            </div>
            {/* password */}
            <div>
              <label htmlFor="password" className='text-sm font-semibold text-gray-700'>Password</label>
              <div className='mt-2 relative'>
                <FontAwesomeIcon icon={faLock} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400'/>
                <input type={showPswd? "text":"password"} placeholder='Create a password' required className='w-full border border-gray-200 rounded-lg py-3 pl-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
                <button onClick={()=>setShowPswd(!showPswd)} className='absolute right-4 top-1/2 -translate-1/2 text-gray-400'> 
                  <FontAwesomeIcon icon={showPswd?faEyeSlash:faEye}/>
                 </button>
              </div>
            </div>
            {/* confirm password */}
            <div>
              <label htmlFor="confirmPassword" className='text-sm font-semibold text-gray-700'>Confirm Password</label>
              <div className='mt-2 relative'>
                <FontAwesomeIcon icon={faLock} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400'/>
                <input type={showConfirmPswd? "text":"password"} placeholder='Confirm your password' required className='w-full border border-gray-200 rounded-lg py-3 pl-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
                <button onClick={()=>setShowConfirmPswd(!showConfirmPswd)} className='absolute right-4 top-1/2 -translate-1/2 text-gray-400'>
                  <FontAwesomeIcon icon={showConfirmPswd? faEyeSlash:faEye}/>
                </button>
              </div>
            </div>
            {/* bio */}
            <div>
              <label htmlFor="bio" className='text-sm font-semibold text-gray-700'>
                Bio <span className='text-gray-400 font-extralight'>(Optional)</span>
              </label>
              <textarea type="text" placeholder='Tell us a little about yourself...' rows={3} className='mt-2 w-full border border-gray-200 rounded-lg py-3 pl-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
            </div>
            {/* profile pic */}
            <div>
              <label htmlFor="profilePic" className='text-sm font-semibold text-gray-700'>
                Profile Picture <span className='text-gray-400 font-extralight'>(Optional)</span>
              </label>
              <input type="file" accept='image/png,image/jpeg,image/webp' className='mt-2 w-full text-sm text-gray-500 file:mr-4 file:font-semibold file:bg-blue-100 file:text-blue-600 file:rounded-lg file:px-4 file:py-2 hover:file:bg-blue-200'/>
            </div>
            {/* role  */}
            <div>
              <label htmlFor="role" className='font-semibold text-sm text-gray-700' required>Register As</label>
              <select name="role" id="role" className='w-full border mt-2 border-gray-200 py-3 px-4 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-gray-600' defaultValue='job-seeker'>
                <option value="job-seeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>
            {/* terms and conditions */}
            <label className='text-sm text-gray-600 flex text-start gap-2'>
              <input type="checkbox" required className=' accent-blue-600' />
               <span>I agree to the <Link to='/terms' className='text-blue-600 hover:underline'>Terms & Conditions </Link>and Privacy Policy. </span>
            </label>
            {/* create ac btn  */}
            <button type='submit' className='text-white bg-blue-600 font-semibold w-full py-2 flex gap-3 items-center justify-center rounded-lg hover:bg-blue-700 transition-colors'>
              <FontAwesomeIcon icon={faUserCheck}/>  Create Account
            </button>
          </form>
          
          {/* login  */}
          <p className='text-sm text-gray-600 mt-7 text-center'>Already have an account? <Link to='/login' className='text-blue-600 font-semibold hover:text-blue-800' >Login</Link> </p>
        </div>

        {/* right side- illustration */}
        <div className='hidden md:flex flex-col pt-30 items-center bg-blue-50 p-5 text-center'>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Your Future Starts Here</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Build your profile, explore opportunities and get closer to your dream career.</p>
          <img src="/reg_page_image-removebg-preview.png" alt="" style={{height:'500px',width:'500px'}} />
          <p className="text-blue-600 font-medium mt-6">Create. Connect. Grow.</p>
        </div>

      </div>
    </section>
  )
}

export default Register