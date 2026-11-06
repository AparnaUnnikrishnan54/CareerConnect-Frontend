import React from 'react'
import ApplicationForm from '../components/ApplicationForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { faArrowLeft, faBriefcase, faCheckCircle, faIndianRupeeSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function JobDetails() {
  const {id}=useParams()
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      location: 'Bengaluru',
      type: 'Full-time',
      experience: 'Entry Level',
      salary: '₹4 - 8 LPA',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
      description:
        'We are looking for a motivated Frontend Developer to build responsive and user-friendly web applications using modern web technologies.',
      responsibilities: [
        'Develop responsive web pages using React.',
        'Create reusable and maintainable UI components.',
        'Collaborate with designers and backend developers.',
        'Test and improve application performance.'
      ],
      requirements: [
        'Knowledge of HTML, CSS and JavaScript.',
        'Basic understanding of React.',
        'Understanding of responsive web design.',
        'Good communication and problem-solving skills.'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Innovate Labs',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: 'Entry Level',
      salary: '₹5 - 10 LPA',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      description:
        'We are looking for a Backend Developer to help build reliable server-side applications and APIs.',
      responsibilities: [
        'Develop and maintain REST APIs.',
        'Work with databases to manage application data.',
        'Write clean and maintainable server-side code.',
        'Collaborate with frontend developers.'
      ],
      requirements: [
        'Basic knowledge of JavaScript and Node.js.',
        'Understanding of databases.',
        'Familiarity with REST APIs.',
        'Willingness to learn new technologies.'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'Kochi',
      type: 'Remote',
      experience: 'Entry Level',
      salary: '₹3 - 6 LPA',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'UI Design'],
      description:
        'We are looking for a creative designer to create simple, accessible and user-friendly digital experiences.',
      responsibilities: [
        'Design wireframes and user interfaces.',
        'Create prototypes for web applications.',
        'Collaborate with developers and stakeholders.',
        'Improve designs using user feedback.'
      ],
      requirements: [
        'Basic understanding of UI/UX principles.',
        'Familiarity with Figma or similar tools.',
        'Knowledge of responsive design.',
        'Creative thinking and attention to detail.'
      ]
    }
  ]
  const job=jobs.find((item)=>item.id==Number(id))

  // job not found
  if(!job){
    return(
      <div className='min-h-screen bg-white flex flex-col items-center justify-center px-4'>
        <h1 className='text-red-600 font-semibold text-2xl'>Job Not Found</h1>
        <Link to='/jobs' className='text-blue-600 hover:text-blue-800 p-5'>Browse Jobs</Link>
      </div>
    )
  }
  
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='px-4 mx-auto py-8'>

        {/* 1.back link */}
        <Link to='/jobs' className='text-blue-600 text-sm hover:text-blue-800'> 
        <FontAwesomeIcon icon={faArrowLeft}/> Back to Jobs</Link>

        {/* 2.job header card */}
        <div className='bg-white border border-gray-200 rounded-xl p-6 mb-6 mt-3'>
         
          <div className='flex items-start gap-4'>
            <div className='w-14 h-14 shrink-0 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold'>{job.company.charAt(0)}</div>
            <div>
              <p className='text-md text-blue-600 mb-1'>{job.company}</p>
              <h1 className='text-2xl font-bold text-gray-900'>{job.title}</h1>
              <p className='text-sm text-gray-500 mt-2'>{job.experience}</p>
            </div>
          </div>

          <div className='flex flex-wrap gap-5 my-4 text-sm text-gray-600'>
            <span className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faLocationDot} className='text-blue-600'/>{job.location}
            </span>
            <span className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faBriefcase} className='text-blue-600'/>{job.type}
            </span>
            <span className='flex items-center gap-2'>
              <FontAwesomeIcon icon={faIndianRupeeSign} className='text-blue-600'/>{job.salary}
            </span>
          </div>

          <div className='flex flex-wrap gap-3 mt-2'>
            {job.skills.map((skill)=>(
              <span key={skill} className='bg-blue-100 text-blue-700 text-xs p-2 rounded-md '>{skill}</span>
            ))}
          </div>
        </div>
        {/* 3.job description + application form */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* left:job details */}
          <div className='bg-white border border-gray-200 rounded-xl p-6 space-y-8'>
            {/* about job */}
            <section>
              <h2 className='text-gray-900 text-lg font-bold mb-3'>About the Role</h2>
              <p className='text-sm text-gray-700'>{job.description}</p>
            </section>
            {/* key responsibilities */}
            <section>
              <h2 className='text-lg font-bold text-gray-900 mb-3'>Key Responsibilities</h2>
              <ul className='space-y-3'>
                {job.responsibilities.map((item)=>(
                  <li className='flex item-start gap-3 text-sm text-gray-700'> 
                    <FontAwesomeIcon icon={faCheckCircle} className='text-blue-600 mt-1'/>
                    <span>{item}</span> 
                  </li>
                ))}
              </ul>
            </section>
            {/* requirements */}
            <section>
              <h2 className='text-lg font-bold text-gray-900 mb-3'>Requirements</h2>
              <ul className='space-y-3'>
                {job.requirements.map((item)=>(
                  <li className='flex item-start gap-3 text-sm text-gray-700'> 
                    <FontAwesomeIcon icon={faCheckCircle} className='text-blue-600 mt-1'/>
                    <span>{item}</span> 
                  </li>
                ))}
              </ul>
            </section>
            {/* job overview */}
            <section>
              <h1 className='text-xl font-bold text-gray-900 mb-3'>Job Overview</h1>
              <div className='grid grid-cols-2 gap-6'>
                <div className='bg-gray-100 rounded-xl mb-2 p-3'>
                  <p className='text-xs text-gray-500 mb-1'>Job Type</p>
                  <p className='text-sm text-gray-900 font-semibold '>{job.type}</p>
                </div>
                <div className='bg-gray-100 rounded-xl mb-2 p-3'>
                  <p className='text-xs text-gray-500 mb-1'>Experience</p>
                  <p className='text-sm text-gray-900 font-semibold '>{job.experience}</p>
                </div>
                <div className='bg-gray-100 rounded-xl mb-2 p-3'>
                  <p className='text-xs text-gray-500 mb-1'>Salary</p>
                  <p className='text-sm text-gray-900 font-semibold '>{job.salary}</p>
                </div>
                <div className='bg-gray-100 rounded-xl mb-2 p-3'>
                  <p className='text-xs text-gray-500 mb-1'>Location</p>
                  <p className='text-sm text-gray-900 font-semibold '>{job.location}</p>
                </div>
              </div>
            </section>
          </div>
          {/* right:application form */}
          <div>
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails