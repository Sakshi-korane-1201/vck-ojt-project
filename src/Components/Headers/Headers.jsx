import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <header id="space">
            <nav>
                <Link to="/homepage">Home</Link>
                <Link to="/aboutpage">About</Link>
                <Link to="/coursespage">Courses</Link>
                <Link to="/ContactPage">Contact</Link>
                <a href="/AdmissionPage" className='color'><button>Apply Now!</button></a> 

            </nav>
        </header>
    )
}

export default Header