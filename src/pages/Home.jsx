import { faArrowRight, faBriefcase, faChartLine, faComputer, faHandshake, faLocationDot, faPalette, faRocket, faSackDollar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import JobCard from '../components/JobCard'


function Home() {
  const jobs = [
  {
    id: 1,
    company: 'Tech Solutions',
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Bengaluru',
    experience: 'Entry Level',
    salary: '₹4 - 8 LPA'
  },
  {
    id: 2,
    company: 'Innovate Labs',
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'Hyderabad',
    experience: 'Entry Level',
    salary: '₹5 - 10 LPA'
  },
  {
    id: 3,
    company: 'Creative Studio',
    title: 'UI/UX Designer',
    type: 'Remote',
    location: 'Kochi',
    experience: 'Entry Level',
    salary: '₹3 - 6 LPA'
  }
]
  return (
    <>
      {/* MAIN SECTION */}
      <section className='bg-blue-50 px-6 py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <p className='text-blue-600 font-semibold mb-4'>YOUR NEXT OPPORTUNITY STARTS HERE</p>
          <h1 className='text-gray-900  font-bold text-4xl md:text-6xl mb-6'>Find Your <span className='text-blue-600'>Dream Job</span></h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-10'>Discover opportunities that match your skills and career goals. Take the next step in your career with CareerConnect.</p>
          {/* job search form */}
          <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-md p-3 flex flex-col gap-3 md:flex-row'>
            <div className='relative flex-1'>
              <FontAwesomeIcon icon={faSearch} className='absolute text-gray-400 left-4 top-1/2 -translate-y-1/2'/>
              <input type="text" placeholder='Job title or keyword' className='w-full flex-1 px-3 py-3 pl-11 border border-gray-200 rounded-lg ' />
            </div>
            <div className='relative flex-1'>
              <FontAwesomeIcon icon={faLocationDot} className='absolute text-gray-400 left-4 top-1/2 -translate-y-1/2'/>
              <input type="text" placeholder='Location' className='w-full flex-1 py-3 px-3 pl-11 border border-gray-200 rounded-lg ' />
            </div>
            <button className=' bg-blue-600 text-white py-3 md:px-4 rounded-lg font-semibold hover:bg-blue-700'>Find Jobs</button>
          </div>

          <p className='text-gray-500 text-sm mt-5'>Popular searches: React Developer, Python Developer, UI/UX Designer</p>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id='categories' className='px-6 py-20 bg-white'>
        <div className='max-w-7xl mx-auto'>

          <div className='text-center mb-12'>
            <p className='text-blue-600 font-semibold mb-3'>EXPLORE OPPORTUNITIES</p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Popular Categories</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Explore different career paths and find opportunities that match your interests and skills.
            </p>
          </div>

          {/* cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

            <div className='border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition'>
              <div className='bg-blue-100 text-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-5'>
                <FontAwesomeIcon icon={faComputer} className='text-2xl' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Software Development</h3>
              <p className="text-gray-600 text-sm leading-6 mb-4">Build applications, websites, and software solutions.</p>
              <Link to="/jobs" className="text-blue-600 font-semibold text-sm">Explore Jobs <FontAwesomeIcon icon={faArrowRight} /> </Link>
            </div>

            <div className='border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition'>
              <div className='bg-purple-100 text-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-5'>
                <FontAwesomeIcon icon={faPalette} className='text-2xl' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Design</h3>
              <p className="text-gray-600 text-sm leading-6 mb-4">Create engaging digital experiences and visual designs.</p>
              <Link to="/jobs" className="text-blue-600 font-semibold text-sm">Explore Jobs <FontAwesomeIcon icon={faArrowRight} /> </Link>
            </div>

            <div className='border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition'>
              <div className='bg-orange-100 text-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-5'>
                <FontAwesomeIcon icon={faChartLine} className='text-2xl' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Marketing</h3>
              <p className="text-gray-600 text-sm leading-6 mb-4">Grow brands through digital marketing and strategy.</p>
              <Link to="/jobs" className="text-blue-600 font-semibold text-sm">Explore Jobs <FontAwesomeIcon icon={faArrowRight} /> </Link>
            </div>

            <div className='border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition'>
              <div className='bg-green-100 text-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-5'>
                <FontAwesomeIcon icon={faSackDollar} className='text-2xl' />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Finance</h3>
              <p className="text-gray-600 text-sm leading-6 mb-4">Discover roles in accounting, banking, and finance.</p>
              <Link to="/jobs" className="text-blue-600 font-semibold text-sm">Explore Jobs <FontAwesomeIcon icon={faArrowRight} /> </Link>
            </div>

          </div>

        </div>
      </section>


      {/* FEATURED JOBS SECTION */}
      <section id='featured' className='bg-gray-50 px-6 py-20'>
        <div className='max-w-7xl mx-auto'>

          <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10'>

            <div>
              <p className='text-blue-600 font-semibold mb-3'>CAREER OPPURTUNITIES</p>
              <h2 className='text-gray-900 text-3xl md:text-4xl font-bold'>Featured Jobs</h2>
              <p className="text-gray-600">Discover opportunities from different companies.</p>
            </div>

            <Link to='/jobs' className='text-blue-600 hover:text-blue-800'>View All Jobs <FontAwesomeIcon icon={faArrowRight} /> </Link>

          </div>

          {/* job cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
              jobs.map((job)=>(
                <JobCard key={job.id} job={job}/>
              ))
            }

            {/* <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition'>

              <div className='flex items-start justify-between mb-5'>

                <div className='flex flex-row gap-3'>
                  <div className='bg-blue-200 text-blue-700 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl'>T</div>
                  <h4 className='text-gray-500 font-semibold my-auto text-lg'>Tech Solutions</h4>
                </div>

                <span className='bg-green-100 text-green-700 text-xs px-3 font-semibold rounded-full '>Full-time</span>
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-3'>Frontend Developer</h3>


              <div className='flex flex-wrap gap-4 text-sm text-gray-500 mb-5'>
                <span><FontAwesomeIcon icon={faLocationDot} /> Bengaluru</span>
                <span><FontAwesomeIcon icon={faBriefcase} /> Entry Level</span>
              </div>

              <div className='border-t border-gray-200 pt-5 flex items-center justify-between gap-3'>
                <p className='text-lg font-bold text-gray-900'>₹4 - 8 LPA</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition'>Apply Now <FontAwesomeIcon icon={faArrowRight} /> </button>
              </div>

            </div>

            <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition'>

              <div className='flex items-start justify-between mb-5'>

                <div className='flex flex-row gap-3'>
                  <div className='bg-yellow-200 text-yellow-700 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl'>I</div>
                  <h4 className='text-gray-500 font-semibold my-auto text-lg'>Innovate Labs</h4>
                </div>

                <span className='bg-green-100 text-green-700 text-xs px-3 font-semibold rounded-full '>Full-time</span>
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-3'>Backend Developer</h3>


              <div className='flex flex-wrap gap-4 text-sm text-gray-500 mb-5'>
                <span><FontAwesomeIcon icon={faLocationDot} /> Hyderabad</span>
                <span><FontAwesomeIcon icon={faBriefcase} /> Entry Level</span>
              </div>

              <div className='border-t border-gray-200 pt-5 flex items-center justify-between gap-3'>
                <p className='text-lg font-bold text-gray-900'>₹5 - 10 LPA</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition'>Apply Now <FontAwesomeIcon icon={faArrowRight} /> </button>
              </div>

            </div>

            <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition'>

              <div className='flex items-start justify-between mb-5'>

                <div className='flex flex-row gap-3'>
                  <div className='bg-purple-200 text-purple-700 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl'>C</div>
                  <h4 className='text-gray-500 font-semibold my-auto text-lg'>Creative Studio</h4>
                </div>

                <span className='bg-blue-100 text-blue-700 text-xs px-3 font-semibold rounded-full '>Remote</span>
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-3'>UI/UX Designer</h3>


              <div className='flex flex-wrap gap-4 text-sm text-gray-500 mb-5'>
                <span><FontAwesomeIcon icon={faLocationDot} /> Kochi</span>
                <span><FontAwesomeIcon icon={faBriefcase} /> Entry Level</span>
              </div>

              <div className='border-t border-gray-200 pt-5 flex items-center justify-between gap-3'>
                <p className='text-lg font-bold text-gray-900'>₹3 - 6 LPA</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition'>Apply Now <FontAwesomeIcon icon={faArrowRight} /> </button>
              </div>

            </div> */}

          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id='about' className='bg-white px-6 py-20'>
        <div className='max-w-7xl mx-auto'>

          <div className='text-center mb-12'>
            <p className='text-blue-600 font-semibold mb-3'>WHY CareerConnect?</p>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Your Career, Our Priority</h2>
            <p className='mx-auto  text-gray-600'>We make your job search simpler, helping you discover opportunities and move forward with confidence.</p>
          </div>

          {/* benefit cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

            <div className=' border border-gray-200 p-6 rounded-xl hover:shadow-lg transition'>
              <div className='flex items-center justify-center  bg-blue-100 text-blue-600 w-14 h-14 rounded-lg mb-2 '>
                <FontAwesomeIcon icon={faSearch} className='text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Easy Job Search</h3>
              <p className='text-gray-600 leading'>Find job opportunities based on your skills, interests, and career goals.</p>
            </div>

            <div className=' border border-gray-200 p-6 rounded-xl hover:shadow-lg transition'>
              <div className='flex items-center justify-center  bg-green-100 text-green-600 w-14 h-14 rounded-lg mb-2 '>
                <FontAwesomeIcon icon={faHandshake} className='text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Trusted opportunities</h3>
              <p className='text-gray-600 leading'>Explore opportunities across different industries and discover roles suited to you.</p>
            </div>

            <div className=' border border-gray-200 p-6 rounded-xl hover:shadow-lg transition'>
              <div className='flex items-center justify-center  bg-purple-100 text-purple-600 w-14 h-14 rounded-lg mb-2 '>
                <FontAwesomeIcon icon={faRocket} className='text-2xl' />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Career Growth</h3>
              <p className='text-gray-600 leading'>Take the next step in your professional journey and work towards your ambitions.</p>
            </div>

          </div>


        </div>
      </section>

      {/* ACTION SECTION */}
      <section className='px-6 py-16 bg-white'>
        <div className='max-w-7xl mx-auto bg-blue-700 flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl px-8  md:px-14 '>

          <div className='max-w-xl text-center md:text-left'>
            <h2 className='text-blue-100 font-semibold mb-4'>READY TO START YOUR CAREER?</h2>
            <p className='text-2xl font-bold text-white mb-5'>Create your account and explore job opportunities.</p>
            <Link to='/register' className='inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors'>
              Create Account</Link>
          </div>

          <div className="flex items-center justify-center shrink-0">
            <img src="/woman-working-with-computer-bright-colorful-vector-illustration-removebg-preview.png" alt="" 
            className="w-64 h-64 md:w-96 md:h-96 object-contain"/>
          </div>

        </div>

      </section>

    </>
  )
}

export default Home