import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
    const [open, setOpen] = useState(true);
    const [requestsOpen, setRequestsOpen] = useState(false); 

    const toggleSidebar = () => {
        setOpen(!open);
    };


    const closeRequestsMenu = () => {
        setRequestsOpen(false);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className={`col-xxl-2 col-lg-3 col-md-4 col-sm-1 bg-main sidebar ${open ? 'open' : 'closed'}`}>
                    <div className="sidebar-sticky">
                     
                        <img 
                            src="../../../../src/assets/image/logoSideBar/logo.png" 
                            className="img-fluid mb-3 logo" 
                            alt="Audit Station Logo" 
                        />
                      
                        <ul className="sidebarNav flex-column">
             
                            <li className="nav-items py-3">
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => isActive ? 'span-nav nav-link nav-links routerLink' : 'nav-link'}
                                >
                                    <i className="fa-solid fa-house pe-2"></i>
                                    <span className={`d-none-767 ${open ? '' : 'd-none'}`}>Dashboard</span>
                                </NavLink>
                            </li>
                            

                            <li className="nav-items py-3">
                                <div className="nav-link" onClick={() => setRequestsOpen(!requestsOpen)} style={{ cursor: 'pointer' }}>
                                    <i className="fa-solid fa-inbox pe-2"></i>
                                    <span className={`d-none-767 span-nav ${open ? '' : 'd-none'}`}>Requests</span>
                                    <i className={`icons fa-solid ${requestsOpen ? 'fa-chevron-up' : 'fa-chevron-down'} ms-auto`}></i>
                                </div>
                                {requestsOpen && open && (
                                    <ul className="sidebarNav-submenu">
                                        <li className="nav-items py-2">
                                            <NavLink
                                                to="/request"
                                                className={({ isActive }) => isActive ? 'nav-link nav-links routerLink' : 'nav-link'}
                                                onClick={closeRequestsMenu} 
                                            >
                                                <span>Request</span>
                                            </NavLink>
                                        </li>


                                        <li className="nav-items py-2">
                                            <NavLink
                                                to="/company-request"
                                                className={({ isActive }) => isActive ? 'nav-link nav-links routerLink' : 'nav-link'}
                                                onClick={closeRequestsMenu} 
                                            >
                                                <span>Company request</span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-items py-2">
                                            <NavLink
                                                to="/certified-request"
                                                className={({ isActive }) => isActive ? 'nav-link nav-links routerLink' : 'nav-link'}
                                                onClick={closeRequestsMenu} 
                                            >
                                                <span>Certified request</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {[
                                { name: 'Users', icon: 'user', path: '/users' },
                                { name: 'User Management', icon: 'users', path: '/user-management' },
                                { name: 'Questions', icon: 'circle-question', path: '/questions' },
                                { name: 'Accreditation Management', icon: 'certificate', path: '/accreditation' },
                                { name: 'Categories', icon: 'list', path: '/categories' },
                                { name: 'Permissions', icon: 'circle-exclamation', path: '/permissions' },
                                { name: 'Steps To Be Unique', icon: 'stairs', path: '/steps' },
                                { name: 'Statistics', icon: 'chart-simple', path: '/statistics' },
                                { name: 'FAQS', icon: 'circle-question', path: '/faqs' },
                                { name: 'Chat Support', icon: 'message', path: '/chat' },
                                { name: 'Contact Support', icon: 'headset', path: '/contact' },
                            ].map((item) => (
                                <li className="nav-items py-3" key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => isActive ? 'nav-link nav-links routerLink' : 'nav-link'}
                                    >
                                        <i className={`fa-solid fa-${item.icon} pe-2`}></i> 
                                        <span className={`d-none-767 ${open ? '' : 'd-none'}`}>{item.name}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>


                <main className="col-md-8 col-xxl-10 col-lg-9 col-sm-11 p-0 container">
                    <nav className="prof navbar navbar-expand justify-content-end">
                        <button className="btn openMenuBtn" onClick={toggleSidebar}>
                            <i className={`fa-solid fa-bars ${open ? 'active' : ''}`}></i>
                        </button>

                        <div>
                            <ul className="profileNav navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end align-items-center pe-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="../../../src/assets/image/translate/text.png" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                    </ul>
                                </li>
                                <li className="brd me-3 px-1">
                                    <button className="btn notifications">
                                        <i className="fa-solid fa-bell"></i>
                                        <span>3</span>
                                    </button>
                                </li>
                                <div className="col-1">
                                    <img src="../../../src/assets/image/logoSideBar/Rectangle 1393.png" className="w-100 rounded-5" alt="Profile Placeholder" />
                                </div>
                                <ul className="col-3 p-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-dark py-0 pe-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Musfiq
                                        </a>
                                        <span className="nav-link font-color py-0 fs-10 pe-0">Admin</span>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </nav>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default SideBar;
