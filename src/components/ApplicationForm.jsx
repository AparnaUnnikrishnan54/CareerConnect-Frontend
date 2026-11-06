import { faEnvelope, faFileArrowUp, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function ApplicationForm() {
  return (
    <div className='bg-white border border-gray-200 rounded-xl p-6'>
        <div className='mb-5'>
            <h2 className='text-2xl font-bold text-gray-900'>Apply for this Job</h2>
            <p className='text-sm text-gray-500 mt-2'>Fill in your details to submit your application.</p>
        </div>

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
            {/* phone */}
            <div>
              <label htmlFor="phone" className='text-sm font-semibold text-gray-700'>Phone Number</label>
              <div className='mt-2 relative'>
                <FontAwesomeIcon icon={faPhone} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400'/>
                <input type="tel" placeholder='Enter your phone number' required className='w-full border border-gray-200 rounded-lg py-3 pl-11 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'/>
              </div>
            </div>

            {/* resume upload */}
            <div>
                <label htmlFor="resume" className='text-sm font-semibold text-gray-700'>Upload Resume</label>
                <label htmlFor="resume" className='mt-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400'>
                    <FontAwesomeIcon icon={faFileArrowUp} className='text-blue-600 text-2xl mb-3'/>
                    <span className='text-sm text-gray-700'>Click to upload your resume (PDF only)</span>
                    <input type="file" id='resume' accept='.pdf' required className='hidden' />
                </label>
            </div>

             {/* cover letter */}
            <div>
                <label htmlFor="coverletter" className='text-sm font-semibold text-gray-700'>Cover Letter <span className='font-extralight text-gray-500'>(Optional)</span></label>
                <textarea  id='coverletter' rows={4} className='mt-2 w-full border border-gray-200 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200' placeholder="Briefly introduce yourself..."/>
            </div>

            {/* submit btn */}
            <div className='flex justify-center'>
              <Link to='/applicationSuccess' className='bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition px-20'>Submit Application</Link>
            </div>
        </form>
    </div>
  )
}

export default ApplicationForm