import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
        <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row '>
            <SideBar/>
            <main className='flex-1 min-w-0 p-6'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout