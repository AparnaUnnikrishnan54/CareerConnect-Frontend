import React from 'react'
import { Link } from 'react-router-dom'

function Terms() {
    return (
        <section className='min-h-screen bg-blue-50 px-4 py-10'>
            <div className='max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12'>
                {/* logo */}
                <Link to='/' className='flex items-center justify-center gap-2 mb-8'>
                    <img src="/joblogo-removebg-preview.png" alt=""
                        style={{ height: '40px', width: '40px' }} />
                    <h1 className='text-xl md:text-2xl font-bold text-gray-900'>Career<span className='text-blue-600'>Connect</span></h1>
                </Link>
                <h1 className='text-3xl font-bold text-gray-900'>Terms & Conditions</h1>
                <p className='text-sm text-gray-400 p-2'>Last updated on October 2026</p>
                <ul className='space-y-6 text-gray-600 leading-7'>
                    <li>
                        <h2 className='text-lg font-semibold text-gray-900 mb-1'>1. Acceptance of Terms</h2>
                        <p>By creating an account on CareerConnect, you agree to follow these terms when using our job portal.</p>
                    </li>

                     <li>
                        <h2 className='text-lg font-semibold text-gray-900 mb-1'>2. User Accounts</h2>
                        <p>Users should provide accurate information and keep their account credentials secure.</p>
                    </li>

                     <li>
                        <h2 className='text-lg font-semibold text-gray-900 mb-1'>3. Job Seekers</h2>
                        <p>Job seekers can browse jobs and apply for suitable opportunities using accurate information.</p>
                    </li>

                     <li>
                        <h2 className='text-lg font-semibold text-gray-900 mb-1'>4. Employers</h2>
                        <p>Employers should provide accurate job descriptions when publishing vacancies.</p>
                    </li>

                     <li>
                        <h2 className='text-lg font-semibold text-gray-900 mb-1'>5. Responsible Use</h2>
                        <p>Users must not misuse the platform or submit misleading information.</p>
                    </li>

                    <li>
                        <h2 className='text-lg font-semibold text-gray-900 mb-1'>6. Contact</h2>
                        <p>Contact the CareerConnect team if you have questions about these terms.</p>
                    </li>

                </ul>

                {/* back to register */}
                <Link to='/register' className='inline-block mt-8 text-white bg-blue-600 rounded-lg py-2 px-4 font-semibold hover:bg-blue-700'>Back to Register</Link>
            </div>
        </section>
    )
}

export default Terms