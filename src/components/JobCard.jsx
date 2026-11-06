
import { faArrowRight, faBookmark, faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function JobCard({ job }) {
  const [isSaved,setIsSaved]=useState(false)
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">

      {/* Company name and job type, save */}
      <div className="flex items-start justify-between mb-5 gap-3">
        
        <div className="flex items-center gap-3">

          <div className="bg-blue-200 text-blue-700 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl shrink-0">
            {job.company.charAt(0)}
          </div>
          <h4 className="text-gray-600 font-semibold text-lg">{job.company}</h4>

        </div>

        <div className="flex items-center gap-3">
          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 font-semibold rounded-full">{job.type}</span>
          <button type='button' onClick={()=>setIsSaved(!isSaved)} className={`text-lg transition ${isSaved?'text-blue-600':'text-gray-400 hover:text-blue-600'}`}>
            <FontAwesomeIcon icon={faBookmark}/>
          </button>
        </div>

      </div>

      {/* Job title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h3>

      {/* Location and experience */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
        <span className="flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} />{job.location}</span>
        <span className="flex items-center gap-2"><FontAwesomeIcon icon={faBriefcase} />{job.experience}</span>
      </div>

      {/* Salary and apply button */}
      <div className="border-t border-gray-200 pt-5 flex items-center justify-between gap-3">
        <p className="text-lg font-bold text-gray-900">{job.salary}</p>

        <Link to={`/jobs/${job.id}`} type="button" className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
          Apply Now <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

    </div>
  )
}

export default JobCard
