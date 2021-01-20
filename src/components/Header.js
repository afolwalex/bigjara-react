import React, { useState } from 'react'
import {
    Collapse,
    Navbar
} from 'reactstrap'
import courses from '../courses'
import {Link} from 'react-router-dom'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [courseCollapse, setCourseCollapse] = useState(true)

    const toggle = () => setIsOpen(!isOpen)
    const openDropdown = (e) => {
        e.preventDefault()
        setCourseCollapse(!courseCollapse)
    }

    return (
        <header className="site-header">
            <Navbar expand="lg">
                <div className="container-fluid pl-lg--35 pr-lg--35">
                    <div className="col">
                        <div className="brand-logo">
                            Big<span>j</span>ara
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        onClick={toggle}
                        aria-expanded={isOpen}
                        type="button"
                    >
                        <i className="fa fa-bars"></i>
                    </button>
                    
                    <Collapse isOpen={isOpen} navbar>
                        <div className="btn-close-off-canvas d-lg-none" onClick={toggle}>
                            <i className="fa fa-times"></i>
                        </div>
                        <div className="col">
                            <div className="main-navigation ">
                                <ul className="main-menu">
                                    <li className="menu-item has-dropdown">
                                        <a href="/" onClick={openDropdown}>Courses <i className="fa fa-angle-down d-lg-none"></i></a>
                                        <ul className={`menu-dropdown ${courseCollapse ? 'hide' : ''}`}>
                                            {courses.map((course, i) => (
                                                <li className="single-item" key={i}>
                                                    <Link to={`/course/${course.name}`}>
                                                        <h3>{course.name}</h3> 
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="menu-item"><Link to="/">Resources</Link></li>

                                    <li className="menu-item"><Link to="/">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="header-btns">
                                <Link to="/sign-in" className="btn btn--transparent">Sign in</Link>
                                <Link to="/register" className="btn btn--primary hvr-shine">Get Started</Link>
                            </div>
                        </div>
                      
                    </Collapse>
                </div>
            </Navbar>
        </header>
    )
}

export default Header