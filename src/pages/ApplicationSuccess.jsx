import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ApplicationSuccess() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-5'>
        <div className='max-w-xl w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-md text-center'>
           
            <div className=' mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center'>
                <FontAwesomeIcon icon={faCircleCheck} className='text-4xl text-green-600'/>
            </div>
            
            <h1 className='text-2xl font-bold text-gray-900 my-3'>Application Submitted!</h1>
            <p className='text-gray-600 text-sm mb-8'>Congratulations! Your application has been successfully submitted.</p>

            <Link to='/jobs' className='bg-blue-600 text-white font-semibold text-sm py-3 px-6 rounded-lg hover:bg-blue-800 transition'>Explore More Jobs</Link>
            <p className='mt-10 text-sm text-gray-500'>Thank you for choosing CareerConnect!</p>
        </div>
    </div>
  )
}

export default ApplicationSuccess