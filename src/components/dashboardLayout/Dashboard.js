import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {AiOutlineSetting} from 'react-icons/ai';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {FcCalendar} from 'react-icons/fc';
import {TiDocumentText} from 'react-icons/ti';
import {Link, useLocation} from 'react-router-dom';

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
                <div className="image-container">
                    <img src="https://image.freepik.com/free-vector/recruiters-managers-searching-candidate-huge-cv-position-recruitment-agency-human-resources-service-recruitment-network-concept-illustration_335657-2059.jpg" height="300px" width="200px" alt=""/>
                </div>
            </nav>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;