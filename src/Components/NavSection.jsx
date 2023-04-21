import React from 'react'
import { Link } from 'react-router-dom';
import {FaHome} from "@react-icons/all-files/fa/FaHome"
import './NavSection.css'
import ApiResponseAJAX from './ApiResponseAJAX';
const NavSection = () => {
    return (
        <nav className='nav'>
         <div className="homepage">
            <Link to = '/'><button><FaHome /> HOME</button></Link>
        </div>
           <ApiResponseAJAX />
        </nav>
    )
}

export default NavSection
