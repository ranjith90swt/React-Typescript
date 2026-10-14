import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='admin-wrapper'>
        <Sidebar />
        <main className='admin-main'> 
            <Header />
            <div className="main-content">
                <Outlet />
            </div>

        </main>
        
    </div>
  )
}

export default AdminLayout