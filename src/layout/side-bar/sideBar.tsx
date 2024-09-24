import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'; // Make sure to create a corresponding CSS file
import ButtonTranslateLayout from '../../Shared-lib/buttonTranslateLayout/buttonTranslateLayout';
import { Outlet } from 'react-router-dom';

function SideBar() {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [open, setOpen] = useState(true);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    const toggleSidebar = () => {
        setOpen(!open); 
        if (open) {
            setSubMenuOpen(false); 
        }
    };

    return (
        <div className="sidebar-layout">
            <div className={`sidebar ${open ? 'open' : 'closed'}`}>
                <div className="logo-container">
                    <i className="icons-header fas fa-bars menu-icon" onClick={toggleSidebar}></i>
                    <div className="logo">
                        <img src="../../../../src/assets/image/logoSideBar/logo.png" alt="Logo" />
                    </div>
                </div>
                <ul className="menu-list">
                    <NavLink to="/home">
                        <li className="menu-item">
                            <i className="fas fa-home"></i>
                            <span className="menu-item-text">Home</span>
                        </li>
                    </NavLink>
                    <li className="menu-item" onClick={toggleSubMenu}>
                        <i className="fas fa-cogs"></i>
                        <span className="menu-item-text">Requests</span>
                        <i className={`fas ${isSubMenuOpen ? 'fa-sort-up' : 'fa-sort-down'}`}></i>
                        {isSubMenuOpen && (
                            <ul className="sub-menu">
                                <li style={{ padding: '10px 0px' }}>
                                    <NavLink to="/masterdata/item-definition">
                                        <i className='fas fa-angle-right'></i>
                                        Items definition
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* More nav items */}
                </ul>
            </div>

            <div className="main-section">
                <div className="navbar">
                    <div className="nav-content">
                        <ul className="nav-links">
                            {/* Navbar links can go here */}
                        </ul>
                        <div className="nav-user">
                            <i className="fas fa-user"></i>
                            <span>
                                <ButtonTranslateLayout />
                            </span>
                            <span>
                                <i className="fa-solid fa-bell"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="main-content  col-md-12">
                    {/* This is where your main content will be rendered */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
