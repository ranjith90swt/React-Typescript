import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

const Sidebar = () => {
     const { sidebarOpen, sidebarCollapsed } = useAppSelector(
        (state) => state.ui
    );
    return (
       <aside
            className={`admin-sidebar ${
                sidebarCollapsed ? "collapsed" : ""
            } ${sidebarOpen ? "show" : ""}`}
        >
            <div className="sidebar-logo">
               <span><i className="bi bi-airplane"></i></span> 
               <span className="logo-text">AdminPro</span>
            </div>

            <div className="sidebar-menu">
                <h6 className='sidebar-menu-title'>Menu List</h6>
                <NavLink to="/dashboard" className="sidebar-link"><span className="sidebar-icon"><i className="bi bi-speedometer2"></i></span> <span>Dashboard</span></NavLink>
                <NavLink to="/" className="sidebar-link"><span className="sidebar-icon"><i className="bi bi-box"></i></span> <span>Components</span></NavLink>
                <NavLink to="/users" className="sidebar-link"><span className="sidebar-icon"><i className="bi bi-grid"></i></span> <span>Table List</span></NavLink>
            </div>

        </aside>
    )
}

export default Sidebar