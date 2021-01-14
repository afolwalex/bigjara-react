import React, { useState } from 'react'
import {
    Collapse,
    Navbar
} from 'reactstrap'
import courses from '../courses'

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
                                                    <a href="/">
                                                        <h3>{course.name}</h3> 
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="/">Resources</a></li>

                                    <li className="menu-item"><a href="/">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="header-btns">
                                <a href="/" className="btn btn--transparent">Sign in</a>
                                <a href="/" className="btn btn--primary hvr-shine">Get Started</a>
                            </div>
                        </div>
                      
                    </Collapse>
                </div>
            </Navbar>
        </header>
    )
}

export default Header