import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light dark-theme customNav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style= {{ color: "white"}} />
                </button>
                <div className="menuitem collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#homepage">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#work">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skillspage">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experiencepage">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactme">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
