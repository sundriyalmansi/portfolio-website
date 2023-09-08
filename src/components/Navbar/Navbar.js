import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Images/mlogo1.png"




const Navbar = () => {
    return (
        <div className="nav-container fixed-top">
            <div className="award-banner"><a href="https://www.metro-magazine.com/10154991/king-county-metro-mv-transportation-wins-innovative-solution-award-for-accessibi"> 🥳 Featured Award winning Product </a></div>
            <nav className="navbar navbar-expand-lg navbar-light customNav">
                <a className="abcd" href="#homepage"><img alt='mlogo' src={logo}></img> Mansi</a>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
                    </button>
                    <div className="menuitem collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-animation nav-link" href="#homepage">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-animation nav-link" href="#skillspage">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-animation nav-link" href="#experiencepage">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-animation nav-link" href="#projects">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-animation nav-link" href="#contactme">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar




