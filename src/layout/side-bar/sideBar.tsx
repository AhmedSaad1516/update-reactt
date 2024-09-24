import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faCogs, faBriefcase, faExclamationTriangle, faDatabase, faUsers, faFileAlt, faClock, faGlobe, faBullhorn, faTasks, faCog } from '@fortawesome/free-solid-svg-icons';
import './sideBar.css';

function SideBar() {
    const [open, setOpen] = useState(true);
  
    const toggleSidebar = () => {
      setOpen(!open);
    };

  return (
    <div className="flex col-md-12">
        {/*       <div className={`sidebar ${open ? 'open' : 'closed'} transition-all duration-300`}>
 */}
      <div className={`sidebar ${open ? 'open' : 'closed'} transition-all duration-300 bg-gray-100 dark:bg-neutral-800`}>
        <div className="logo-container flex items-center justify-between p-4">
       
          <FontAwesomeIcon icon={faBars} className="menu-icon cursor-pointer" onClick={toggleSidebar} />
        
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'selected' : '')}>
              <FontAwesomeIcon icon={faHome} />
              {open && <span className="ml-2">المستخدمين</span>}
            </NavLink>
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faCogs} />
            {open && <span className="ml-2">العمليات</span>}
          </li>
          <li className="menu-item">
            <NavLink to="/consent-form" className={({ isActive }) => (isActive ? 'selected' : '')}>
              <FontAwesomeIcon icon={faBriefcase} />
              {open && <span className="ml-2">تحليل اثر الاعمال</span>}
            </NavLink>
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            {open && <span className="ml-2">المخاطر</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faDatabase} />
            {open && <span className="ml-2">بيانات المؤسسة</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faUsers} />
            {open && <span className="ml-2">المستخدمين</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faFileAlt} />
            {open && <span className="ml-2">التقارير</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faClock} />
            {open && <span className="ml-2">الإشتبانات</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faGlobe} />
            {open && <span className="ml-2">التوعية و التدريب</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faBullhorn} />
            {open && <span className="ml-2">البلاغات</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faTasks} />
            {open && <span className="ml-2">إدارة المهام</span>}
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faCog} />
            {open && <span className="ml-2">الإعدادات</span>}
          </li>
        </ul>
      </div>

        <div className="h">
         <h1>ddd</h1>
         </div>
      
    </div>
  );
}

export default SideBar;
