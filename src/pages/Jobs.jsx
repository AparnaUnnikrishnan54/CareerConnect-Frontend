import { faIndianRupeeSign, faLocationDot, faSliders, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import JobCard from '../components/JobCard'

function Jobs() {
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
    },
    {
      id: 4,
      company: 'GlobalTech',
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Bengaluru',
      experience: 'Mid Level',
      salary: '₹8 - 15 LPA'
    },
    {
      id: 5,
      company: 'NextGen Solutions',
      title: 'Data Analyst',
      type: 'Part-time',
      location: 'Hyderabad',
      experience: 'Entry Level',
      salary: '₹3 - 7 LPA'
    },
    {
      id: 6,
      company: 'Alpha Corp',
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Mumbai',
      experience: 'Mid Level',
      salary: '₹10 - 18 LPA'
    }
  ]
  const locations = ['Bengaluru', 'Hyderabad', 'Kochi', 'Remote', 'Mumbai']
  const jobTypes = ['Full-time', 'Part-time', 'Internship', 'Remote']
  const experiencelevel = ['Entry Level', 'Experienced', 'Senior Level']
  const salaries = ['₹0 - 3 LPA', '₹3 - 7 LPA', '₹7 - 10 LPA', "₹10+ LPA"]
  //reusable filter section
  const FilterSection = ({ title, icon, items }) => (
    <div className='border border-gray-100 p-5 '>
      <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
        <FontAwesomeIcon icon={icon} className="text-blue-600" />{title}
      </h3>
      <div className='space-y-3'>
        {items.map((item) => (
          <label key={item} className='flex items-center gap-3 text-sm text-gray-600 cursor-pointer'>
            <input type="checkbox" className='h-4 w-4 accent-blue-600' />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  )
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* heading */}
      <section>
        <div className='max-w-7xl mx-auto px-6 py-12 md:py-16'>
          <span className='font-semibold text-blue-600  inline-block mb-2'>EXPLORE OPPURTUNITIES</span>
          <h1 className='text-3xl text-gray-900 font-bold mb-2'>Find Your Next Oppurtunity</h1>
          <p className='text-sm text-gray-600'>Explore job oppurtunities that matches your skills and career goals.</p>
        </div>
      </section>

      {/* main content */}
      <section className='max-w-7xl mx-auto px-4 py-10'>
        
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* 1. filter sidebar */}
          <aside className='bg-white border border-gray-200 rounded-xl shadow-sm h-fit'>
            {/* filter , clear all */}
            <div className='flex items-center justify-between p-5 border border-gray-100'>
              <h1 className='text-lg font-bold text-gray-900'><FontAwesomeIcon icon={faSliders} /> Filter</h1>
              <button type='button' className='text-blue-500 text-sm'>Clear All</button>
            </div>

            {/* location filter */}
            <FilterSection title="Location" icon={faLocationDot} items={locations} />
            {/* job type filter */}
            <FilterSection title="Job Type" icon={faSuitcase} items={jobTypes} />
            {/* experience level filter */}
            <FilterSection title="Experience Level" icon={faUser} items={experiencelevel} />
            {/* salary filter */}
            <FilterSection title="Salary" icon={faIndianRupeeSign} items={salaries} />
          </aside>

          {/* 2. job listing - cards */}
          <div className='lg:col-span-3 grid grid-cols-1 xl:grid-cols-2 gap-5'>
            {
              jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            }
          </div>

        </div>

        {/* pagination */}
        <div className='flex justify-center items-center gap-2 mt-10'>
          {/* previous< */}
          <button type='button' className='h-10 w-10 border border-gray-200 rounded-lg text-gray-400 bg-white'>&lt;</button>
          {/* pages */}
          {
            [1, 2, 3, 4].map((page) => (
              <button key='button' type='button' className={`w-10 h-10 rounded-lg font-medium 
                  ${page === 1 ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                {page}
              </button>
            ))
          }
          {/* next > */}
          <button type='button' className='h-10 w-10 border border-gray-200 rounded-lg text-gray-400 bg-white'>&gt;</button>
        </div>
      </section>
    </div>
  )
}

export default Jobs