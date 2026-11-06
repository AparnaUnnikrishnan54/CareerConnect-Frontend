
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBriefcase,
  faBookmark,
  faUser,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { user } from '../data/dashboardData'

function DashboardSidebar() {
  const menuItems = [
    {
      name: 'Overview',
      path: '/user-dashboard',
      icon: faHouse,
      end: true
    },
    {
      name: 'Applied Jobs',
      path: '/user-dashboard/applications',
      icon: faBriefcase
    },
    {
      name: 'Saved Jobs',
      path: '/user-dashboard/saved-jobs',
      icon: faBookmark
    },
    {
      name: 'My Profile',
      path: '/user-dashboard/profile',
      icon: faUser
    }
  ]

  return (
    <aside className="w-full md:w-64 shrink-0 bg-white border-b md:border-b-0 md:border-r border-gray-200 p-5">

      {/* User Information */}
      <div className="flex items-center gap-3 p-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
          {user.name.charAt(0)}
        </div>

        <div>
          <h2 className="font-bold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <FontAwesomeIcon icon={item.icon} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-8 pt-5 border-t border-gray-100">
        <button
          type="button"
          className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-red-600 transition"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </button>
      </div>

    </aside>
  )
}

export default DashboardSidebar
