import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuStatus,setMenuStatus]=useState(false)
  return (
    <nav className='bg-white border-b border-gray-200 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-2 py-4 flex items-center justify-between'>
            {/* logo */}
            <Link to='/' className='flex items-center gap-2'>
                <img src="/joblogo-removebg-preview.png" alt="" 
                style={{height:'50px' , width:'50px' }}/>
                <h1 className='text-xl md:text-2xl font-bold text-gray-900'>Career<span className='text-blue-600'>Connect</span></h1>
            </Link>

            {/* nav links */}
            <div className='hidden md:flex items-center gap-7'>
                <Link to='/' className='text-blue-600 font-semibold'>Home</Link>
                <a href="#featured" className='text-gray-600 hover:text-blue-600 transition'>Find Jobs</a>
                <a href="#categories" className='text-gray-600 hover:text-blue-600 transition'>Categories</a>
                <a href="#about" className='text-gray-600 hover:text-blue-600 transition'>About</a>
            </div>

            {/* login , register btn */}
            <div className='hidden md:flex items-center gap-5'>
                <Link to='/login' className='text-gray-700 font-medium hover:text-blue-600 transition'>Login</Link>
                <Link to='/register' className='bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition'>Get Started</Link>
            </div>


            {/* small screen menu icon */}
            <button className='md:hidden text-xl' onClick={()=>setMenuStatus(!menuStatus)}>
                <FontAwesomeIcon icon={menuStatus?faXmark:faBars}/>
            </button>

        </div>

        {/* small screen links */}
        <div className={menuStatus?"md:hidden p-5 ": 'hidden'}>
            {/* when menustatus is true , the menu icon is displayed on small screens with p-5 and hidden in md , otherwise hidden hides it */}
            <div className='flex flex-col gap-4'>
                <Link to='/' onClick={()=>setMenuStatus(false)} >Home</Link>
                <a href='#featured' onClick={()=>setMenuStatus(false)} >Find Jobs</a>
                <a href="#categories" onClick={()=>setMenuStatus(false)}>Categories</a>
                <a href="#about" onClick={()=>setMenuStatus(false)}>About</a>
                <hr />
                <Link to='/login' onClick={()=>setMenuStatus(false)}>Login</Link>
                <Link to='/register' onClick={()=>setMenuStatus(false)} 
                className="bg-blue-600 text-white text-center py-2 rounded-lg w-50">Get Started</Link>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar