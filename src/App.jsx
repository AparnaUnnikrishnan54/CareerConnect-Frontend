import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Terms from './pages/Terms'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import ApplicationSuccess from './pages/ApplicationSuccess'
import DashboardLayout from './user/layouts/DashboardLayout'
import AppliedJobs from './user/pages/AppliedJobs'
import UserDashboard from './user/pages/UserDashboard'
import SavedJobs from './user/pages/SavedJobs'
import Profile from './user/pages/Profile'



function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <h1 className='text-3xl font-bold'>404 - Page Not Found</h1>
    </div>
  )
}
function App() {
  const location=useLocation()
  const hideLayout=location.pathname==='/login'||location.pathname==='/register'
  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/terms' element={<Terms/>}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/jobs/:id' element={<JobDetails/>}/>
        <Route path='/applicationSuccess' element={<ApplicationSuccess/>}/>
        
        <Route path='/user-dashboard' element={<DashboardLayout/>}>
          <Route index element={<UserDashboard/>}/>
          <Route path='applications' element={<AppliedJobs/>}/>
          <Route path='saved-jobs' element={<SavedJobs/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
        
      </Routes>
      {!hideLayout && <Footer />}
    </>
  )
}

export default App
