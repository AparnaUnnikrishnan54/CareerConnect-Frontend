import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='bg-gray-700 text-white'>
      <div className='max-w-7xl mx-auto px-6 py-12'>

        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* logo section */}
          <div>
            <Link to='/' className='flex items-center gap-2'>
              <img src="/joblogo-removebg-preview.png" alt=""
                style={{ height: '40px', width: '40px' }} />
              <h1 className='text-xl md:text-2xl font-bold text-white'>CareerConnect</h1>
            </Link>
            <p className='text-gray-400 mt-5 leading-7'>Connecting talented people with opportunities that shape their future.</p>
            {/* Social media icons */}
            <div className='flex items-center gap-4 mt-5'>
              <FontAwesomeIcon icon={faLinkedin} className="text-gray-200 text-2xl hover:text-blue-400 transition-colors" />
              <FontAwesomeIcon icon={faInstagram} className="text-gray-200 text-2xl hover:text-blue-400 transition-colors" />
              <FontAwesomeIcon icon={faFacebook} className="text-gray-200 text-2xl hover:text-blue-400 transition-colors" />
            </div>
          </div>


          {/* quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className='space-y-3 text-gray-400'>
              <li><Link to='/' className='hover:text-white transition-colors'>Home</Link></li>
              <li><a href="#featured" className='hover:text-white transition-colors'>Find Jobs</a></li>
              <li><a href="#categories" className='hover:text-white transition-colors'>Categories</a></li>
              <li><a href="#about" className='hover:text-white transition-colors'>About Us</a></li>
            </ul>
          </div>

          {/* Candidate links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">For Candidates</h3>
            <ul className='space-y-3 text-gray-400'>
              <li><a href="#featured" className='hover:text-white transition-colors'>Browse Jobs</a></li>
              <li><Link to='/register' className='hover:text-white transition-colors'>Create Account</Link></li>
              <li><Link to='/login' className='hover:text-white transition-colors'>Login</Link></li>
            </ul>
          </div>


          {/* Contact section */}
          <div>
            <h3 className='text-lg font-semibold mb-5'>Get in Touch</h3>
            <p className="text-gray-400 leading-7">Ready to take the next step in your career? Start exploring opportunities today.</p>
            <Link to='/register' className='inline-flex items-center gap-2 mt-5 text-blue-400 hover:text-blue-300 font-semibold transition-colors'>
            Join Us <FontAwesomeIcon icon={faArrowRight}/>
            </Link>
          </div>

        </div>

        {/* COPYRIGHT SECTION */}
        <div className='border-t border-gray-500 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className="text-sm text-gray-400 text-center">© {new Date().getFullYear()} CareerConnect. All rights reserved.</p>
          <p className="text-sm text-gray-400">Built to connect talent with opportunity.</p>
        </div>

      </div>
    </footer>

  )
}

export default Footer