import React from 'react';
import './Projects.css';
import dishLogo from '../../Images/Dish.png';
import mvtProjImg from '../../Images/mvt.png';
import dxcLogo from '../../Images/DXC_logo1.png';
import plasma from '../../Images/plasmaport.png';
import coh from '../../Images/coh.png';
import ddm from '../../Images/ddm.png';
import mdProj from '../../Images/md.png';


const Projects = () => {
    return (
        <div className="div-projects" id="projects">
            <hr className="hr-border"></hr>
            <h1 className="title-proj">Projects</h1>
            <div className="row div-width">
                {/* ------------------------ */}
            {/* <div id="works-grid" className="w-layout-grid works-grid" sx="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img src="https://uploads-ssl.webflow.com/6059528f6310c802ec3f8e00/61f08473cdc8a164bc22cecb_Frame%2082k.png" loading="lazy" srcset="https://uploads-ssl.webflow.com/6059528f6310c802ec3f8e00/61f08473cdc8a164bc22cecb_Frame%2082k-p-500.png 500w, https://uploads-ssl.webflow.com/6059528f6310c802ec3f8e00/61f08473cdc8a164bc22cecb_Frame%2082k.png 842w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 535.1640625px, 842px" alt="Homepage of groove app" class="image-18" />
                    <div id="block" class="div-block-5">
                        <a href="/work/groove" class="project-name-link"><strong>StudyStream</strong><br/></a><div class="work-description"><div class="paragraph-light project-home"><strong>UX/UI Design<br/></strong>Redesigning StudyStream's website </div></div><a href="/work/studystream" class="cta w-button">View Project</a></div></div> */}
            {/* ------------------------ */}
            {/* +++++++++++++++++++++++++ */}
                <div className="panel wide-case-study-panel">
                    <div href="/case-studies/samsung" className="link-block w-inline-block">
                        <img alt="" src={mvtProjImg} className="proj_img" />
                    </div>
                    <div className="panel-body wide-case-study-panel-body">
                        <a href="/samsung" className="link-block-5 w-inline-block">
                        <img width="60" alt="" src={dxcLogo} class="case-study-panel-logo"/>
                            <h3 className="card-heading">CommonPaths, ADA Compliant Routing</h3>
                        </a>
                        <div className="project-summary">
                            <ul>
                                <li>Award winning project for Accessibility by King County Metro Magazine.</li>
                                <li>Interactive and Responsive UI for GIS app with real time data.</li>
                                <li>As Lead UX Developer, designed and developed 40+ UI screens.</li>
                                <li>Integrated PostgreSQL data to frontend interface.</li>
                            </ul>
                        </div>
                        <a href="https://www.figma.com/proto/PJ3loLlD1bcbBsWqn9ecJf/MV-Design-Case-Study?page-id=0%3A1&node-id=2-3&viewport=241%2C48%2C0.71&scaling=scale-down-width" target="_blank" rel="noreferrer" className="wide-case-study-panel-link-copy w-inline-block">
                            <div className="row row-justify-between">
                                <div className="text-block-3">View Client Story</div>   
                                <img className='arrow_img' src="https://uploads-ssl.webflow.com/5f0f048c4a53257cc3f296f9/5f0f048d8828dd0130a4f56f_icon-chevron-right.svg" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            
                {/* Second Project Card */}
                <div className="panel wide-case-study-panel">
                    <a href="/case-studies/samsung" className="link-block w-inline-block">
                        <img alt="" src={plasma} className="proj_img" />
                    </a>
                    <div className="panel-body wide-case-study-panel-body">
                        <a href="/samsung" className="link-block-5 w-inline-block">
                        <img width="60" alt="" src={dishLogo} class="case-study-panel-logo"/>
                            <h3 className="card-heading">Plasma, Product Lifecycle Management Tool.</h3>
                        </a>
                        <div className="project-summary">
                            <ul>
                                <li>Product lifecycle management tool for Wireless 5G devices. </li>
                                <li>Designed Dashboard for leadership to provide business insight using AI.</li>
                                <li>Delivered modular components implementing DISH Design System.</li>
                            </ul>
                        </div>
                        <a href="https://www.figma.com/proto/PJ3loLlD1bcbBsWqn9ecJf/Case-Studies?embed_host=share&kind=&node-id=1138-19&page-id=1138%3A18&scaling=min-zoom&t=ZhjfHUaGdhxTK5Iv-1&type=design&viewport=431%2C619%2C0.06" target="_blank" rel="noreferrer" className="wide-case-study-panel-link-copy w-inline-block">
                            <div className="row row-justify-between">
                                <div className="text-block-3">View Client Story</div>   
                                <img className='arrow_img' src="https://uploads-ssl.webflow.com/5f0f048c4a53257cc3f296f9/5f0f048d8828dd0130a4f56f_icon-chevron-right.svg" alt="" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Third Project Card */}
                <div className="panel wide-case-study-panel">
                    <div href="/case-studies/samsung" className="link-block w-inline-block">
                        <img alt="" src={ddm} className="proj_img" />
                    </div>
                    <div className="panel-body wide-case-study-panel-body">
                        <a href="/samsung" className="link-block-5 w-inline-block">
                        <img width="60" alt="" src={dxcLogo} class="case-study-panel-logo"/>
                            <h3 className="card-heading">DXC Demand Decision Management</h3>
                        </a>
                        <div className="project-summary">
                            <ul>
                                <li>Application to streamline resource pipeline process generating $1M in profits each quarter.</li>
                                <li>Lead design team for rapid prototyping to build data driven dashboards for efficient decision making.</li>
                                <li>Developed NodeJS web application with VueJS, Bootstrap, HTML, CSS and consumed JSON data coming from GraphQL APIs on UI.</li>
                            </ul>
                        </div>
                        <div class="wide-case-study-panel-link-copy w-inline-block">
                            <div className="row row-justify-between">
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:nodejs-icon" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="devicon:vuejs" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:html-5" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:css-3" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:graphql" data-inline="false"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fourth Project Card */}
                <div className="panel wide-case-study-panel">
                    <div href="/case-studies/samsung" className="link-block w-inline-block">
                        <img alt="" src={coh} className="proj_img" />
                    </div>
                    <div className="panel-body wide-case-study-panel-body">
                        <a href="/samsung" className="link-block-5 w-inline-block">
                        <img width="60" alt="" src={dxcLogo} class="case-study-panel-logo"/>
                            <h3 className="card-heading">Electronic Pathways, Web Platform for Clinicians</h3>
                        </a>
                        <div className="project-summary">
                            <ul>
                                <li>Solution that solves productivity issues for clinicians.</li>
                                <li>Decreased turnaround time for cancer patient treatments by 38%.</li>
                                <li>Created resuable components using NextJS.</li>
                                <li>Led the design work by creating prototypes, user journeys and storybaording.</li>
                            </ul>
                        </div>
                        <div class="wide-case-study-panel-link-copy w-inline-block">
                            <div className="row row-justify-between">
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:react" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:javascript" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:bootstrap" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:html-5" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:css-3" data-inline="false"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fifth Project Card */}
                <div className="panel wide-case-study-panel">
                    <div href="/case-studies/samsung" className="link-block w-inline-block">
                        <img alt="" src={mdProj} className="proj_img" />
                    </div>
                    <div className="panel-body wide-case-study-panel-body">
                        <a href="/samsung" className="link-block-5 w-inline-block">
                        <img width="60" alt="" src={dxcLogo} class="case-study-panel-logo"/>
                            <h3 className="card-heading">Healthcare WebApp ReDesign</h3>
                        </a>
                        <div className="project-summary">
                            <ul>
                                <li>Redesign site with new advanced features.</li>
                                <li>Responsible for making Accessibility compliant designs under WCAG 2.0 guidelines.</li>
                                <li>Created high-fidelity wireframes and interactive prototypes.</li>
                            </ul>
                        </div>
                        <a href='https://www.mdguidelines.com/' target="_blank" rel="noreferrer" className="wide-case-study-panel-link-copy w-inline-block">
                            <div className="row row-justify-between">
                                <div className="text-block-3">View Client Story</div>   
                                <img className='arrow_img' src="https://uploads-ssl.webflow.com/5f0f048c4a53257cc3f296f9/5f0f048d8828dd0130a4f56f_icon-chevron-right.svg" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            {/* +++++++++++++++++++++++++ */}
            {/* Old Cards */}
                {/* <div className="col-sm-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="front face">
                                <h5 className="card-title">Plasma, Product Lifecycle management tool</h5>
                                <h6>DISH WIRELESS, Dallas, Texas</h6>
                                <p className="card-text">Figma, JIRA, AI, JavaScript</p>
                                <ul>
                                    <li>Designed poduct lifecycle management tool for Wireless 5G devices. </li>
                                    <li>Designed Dashboard for leadership to provide business insighst using artifical intelligence.</li>
                                    <li>Delivered modular components implementing DISH Design System.</li>
                                </ul>
                                
                            </div>
                            <div className="back face">
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="cib:dot-net" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:c-sharp" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:javascript" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:bootstrap" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="bx:bxl-jquery" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:html-5" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:css-3" data-inline="false"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="front face">
                                <h5 className="card-title">CommonPaths ADA Compliant Routing</h5>
                                <h6>MV Transportation, Seattle</h6>
                                <p className="card-text">Figma, Typescript, Pug, PostgreSQL, ExpressJS</p>
                                <ul>
                                    <li>Award winning project for Aceessibility by King County Metro Magazine.</li>
                                    <li>Interactive and Responsive UI for GIS app with real time data.</li>
                                    <li>As Lead UX Designer responsible for 40+ UI screens.</li>
                                    <li>Integrated PostgreSQL data to frontend interface.</li>
                                </ul>
                            </div>
                            <div className="back face">
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:dotnet" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:c-sharp" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:javascript" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:bootstrap" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="bx:bxl-jquery" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:html-5" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:css-3" data-inline="false"></span>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer-btn'>
                            <a className="btn btn-outline-primary downloadcv nav-link firstbtn" href='https://www.figma.com/proto/PJ3loLlD1bcbBsWqn9ecJf/MV-Design-Case-Study?page-id=0%3A1&node-id=2%3A3&viewport=241%2C48%2C0.71&scaling=scale-down-width' >Read case study</a>
                         </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="front face">
                                <h5 className="card-title">DXC Demand Decision Management</h5>
                                <h6>DXC Technologies, New Orleans</h6>
                                <p className="card-text">VueJS, Azure, NodeJs, Figma</p>
                                <ul>
                                    <li>Artificial Intelligent car race simulation application.</li>
                                    <li>Highly resposive application with cool animations.</li>
                                    <li>Integrated with Twitter APIfor prepopulated tweets</li>
                                </ul>
                            </div>
                            <div className="back face">
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:python" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:react" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:javascript" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:bootstrap" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="bx:bxl-jquery" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:html-5" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:css-3" data-inline="false"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="front face">
                                <h5 className="card-title">Electronic Pathways, Web platform for Clinicians</h5>
                                <h6>HealthCare, California</h6>
                                <p className="card-text">React, Nextjs, Tailwind, Figma</p>
                                <ul>
                                    <li>Developed frontend solution that solves productivity issues for clinicians and increases turnaround time for treatments by 38% for cancer patients.</li>
                                    <li>Created resuable components using Reactjs and nextjs.</li>
                                    <li>Led the design work by creating prototypes, creating user journeys and storybaording.</li>
                                </ul>
                            </div>
                            <div className="back face">
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:python" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:react" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:javascript" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:bootstrap" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="bx:bxl-jquery" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:html-5" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:css-3" data-inline="false"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="front face">
                                <h5 className="card-title">Healthcare WebApp ReDesign</h5>
                                <h6>MD Guidelines, New Orleans</h6>
                                <p className="card-text">Prototyping, Wireframing, Visual Design, Figma</p>
                                <ul>
                                    <li>Collabrated with other UX designers and stakeholders to redesign site with new advanced features.</li>
                                    <li>Responsible for making designs Accessibility  compliant under WCAG 2.0 guidelines.</li>
                                    <li>Creating high-fidelity wirframes and interactive prototypes.</li>
                                </ul>
                            </div>
                            <div className="back face">
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:python" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:react" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:javascript" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:bootstrap" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="bx:bxl-jquery" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:html-5" data-inline="false"></span>
                                </div>
                                <div className="icon icon-lg icon-shape shadow rounded-circle">
                                    <span class="iconify ic" data-icon="logos:css-3" data-inline="false"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects