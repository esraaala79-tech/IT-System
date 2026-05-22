import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

export default function AdminLayout() {
  return (
    <div>
      <Navbar />
      <div className='d-flex'>
        <Sidebar />
        <div className='flex-grow-1'>
          <Outlet />

        </div>

      </div>

    </div>
  )
}
