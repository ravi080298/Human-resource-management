import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {AiOutlineSetting} from 'react-icons/ai';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {FcCalendar} from 'react-icons/fc';
import {TiDocumentText} from 'react-icons/ti';
import {Link, useLocation} from 'react-router-dom';
// import logo from './hr.svg';

const navItems = [
    {
        name : "Dashboard",
        icon : <BiHomeAlt/>,
        Link :  '/'
    },
    {
        name : "Recruitment",
        icon : <BsPeople/>,
        Link :  '/recruitment'
        
    },
    {
        name : "Onboarding",
        icon : <TiDocumentText />,
        Link :  '/onboarding'
    },
    {
        name : "Reports",
        icon : <HiOutlineDocumentReport />,
        Link :  '/reports'
    },
    {
        name : "Calendar",
        icon : <FcCalendar />,
        Link :  '/calendar'
    },
    {
        name : "Setting",
        icon : <AiOutlineSetting/>,
        Link :  '/setting'
    }
]

const DashboardLayout = ( {children} ) =>{
    const location = useLocation()
    console.log(location);
    return(
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <h3>Newton Hr</h3>
                </div>
                <div className="nav-container">
                    {
                        navItems.map((navItem,index) =>(
                            <Link key={index} to={navItem.Link} >
                            <div className={`nav-item ${navItem.Link === location.pathname ? 'selected' : ''}`}>
                                {navItem.icon}
                                <label className="item-name">{navItem.name}</label>
                            </div>
                            </Link>
                        ))
                    }
                </div>
                {/* <div className="image-container">
                    <img src= {logo} height="300px" width="250px" alt="image1" />
                </div> */}
            </nav>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;