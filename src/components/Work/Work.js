import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className="skillsSection" id="work">
            <div className="margintop"></div>
            <hr className="hr-border"></hr>
            <h1 className="projectTitle">Projects</h1>
            <div className='container projectscontainer'>
                <div className='project-card-left'>
                    <div className='image'>
                        {/* <img src={logo} className='projimg'
                        alt="header"/> */}
                    </div>
                    <h3 className='left-h2'>CommonPaths, GIS Application for Transportation Company</h3>
                    <p className='p-date'>Use Case: UX , UI, Branding, Leadership</p>
                    <div className='p-text'>
                        <ul>
                            <li>Synthesized user insights into feasible design decisions, deployed a MVP within 6 months.</li>
                            <li> As Lead UX Designer responsible for entire user-friendly interface.</li> 
                            <li> Designed wireframes for 40 screens for desktop and tablet devices.</li>
                            <li> Developed functional responsive UI components </li>
                        </ul>
                    </div>
                    <div className='card-footer-btn'>
                        <a href='https://www.figma.com/proto/PJ3loLlD1bcbBsWqn9ecJf/MV-Design-Case-Study?page-id=0%3A1&node-id=2%3A3&viewport=241%2C48%2C0.71&scaling=scale-down-width' className='firstbtn'>Read case study</a>
                    </div>

                </div>
                <div className='project-card-left'>
                    <div className='image'>
                        {/* <img src={ddm} className='projimg'
                        alt="header"/> */}
                    </div>
                    <h3 className='left-h2'>Demand Decision Management, DXC Corporate App</h3>
                    <p className='p-date'>Use Case: UX , UI, Branding, Leadership</p>
                    <div className='p-text'>
                        <ul>
                        <li>Designed application to streamline resourcing pipeline process for higher leadership of DXC generating in $1M of profit each quarter.</li>
                            <li> Designed Wireframes & mockups for fully responsive web application </li> 
                            <li> Craeted ease to use interface whcih reduced user time by 30%. </li> 
                            <li> Developed modular componentsi with HTML5, CSS3, JavaScript and Bootstrap.</li>
                        </ul>
                    </div>
                    <div className='card-footer-btn'>
                        {/* <a href='#' className='firstbtn'>Read case study</a> */}

                    </div>

                </div>
                <div className='project-card-left'>
                    <div className='image'>
                        {/* <img src={redesign} className='projimg'
                        alt="header"/> */}
                    </div>
                    <h2 className='left-h2'>Health Care Application Redesign</h2>
                    <p className='p-date'>Use Case: UX , UI, Branding, Leadership</p>
                    <div className='p-text'>
                        <ul>
                            <li>Improved end-to-end experience of Guardian Life Insurance Internal Platform by conducting usability reviews, identifying UX issues and proposing design recommendations.</li>
                            <li>Redesigned the portal to provide customized user experience to health care professionals with advanced features.</li>
                            <li> Redesiging web application that provides intelligent clinical decision support.</li> 
                            <li> Created Style tiles and design thinking sessions to gather user requirements.</li>
                            <li> Designed for Accessisilibility, WCAG Compliant by following WCAG 2.0 and WCAG 2.1 A & AA.</li>
                        </ul>
                    </div>
                    {/* <div className='card-footer-btn'>
                        <a href='#' className='firstbtn'>Read case study</a>
                    </div> */}

                </div>
                <div className='project-card-left'>
                    <div className='image'>
                        <img src="https://i.postimg.cc/Kzzx26yz/Image-2x.jpg" className='projimg'
                        alt="header"/>
                    </div>
                    <h2 className='left-h2'>Electronic Platform for Cancer</h2>
                    <p className='p-date'>Use Case: UX , UI, Branding, Leadership</p>
                    <div className='p-text'>
                        <ul>
                            <li> Evaluated current branding and company details to create new style guides and present alternative style tiles. </li>
                            <li> Improved end-to-end experience of Guardian Life Insurance Internal Platform by conducting usability reviews, identifying UX issues and proposing design recommendations.</li>
                            <li> Redesigned the portal to provide customized user experience to health care professionals with advanced features. </li>
                            <li>Design for Accessibility and following WCAG 2.O and WCAG 2.1 accessibility guidelines for making the web app accessible for all types of users. </li>
                        </ul>
                    </div>
                    {/* <div className='card-footer-btn'>
                        <a href='#' className='firstbtn'>Read case study</a>
                    </div> */}
                </div>
            </div>
        </div>
        
    )
    
}

export default Work;