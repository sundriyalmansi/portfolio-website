import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <div className="div-projects" id="projects">
            <hr className="hr-border"></hr>
            <h1 className="title-proj">Projects</h1>
            <div className="row div-width">
                {/* ------------------------ */}
            <div id="works-grid" className="w-layout-grid works-grid" sx="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                <img src="https://uploads-ssl.webflow.com/6059528f6310c802ec3f8e00/61f08473cdc8a164bc22cecb_Frame%2082k.png" loading="lazy" srcset="https://uploads-ssl.webflow.com/6059528f6310c802ec3f8e00/61f08473cdc8a164bc22cecb_Frame%2082k-p-500.png 500w, https://uploads-ssl.webflow.com/6059528f6310c802ec3f8e00/61f08473cdc8a164bc22cecb_Frame%2082k.png 842w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 535.1640625px, 842px" alt="Homepage of groove app" class="image-18" />
                    <div id="block" class="div-block-5">
                        <a href="/work/groove" class="project-name-link"><strong>StudyStream</strong><br/></a><div class="work-description"><div class="paragraph-light project-home"><strong>UX/UI Design<br/></strong>Redesigning StudyStream's website </div></div><a href="/work/studystream" class="cta w-button">View Project</a></div></div>
            {/* ------------------------ */}
                <div className="col-sm-6 mb-4">
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
                </div>
            </div>
        </div>
    )
}

export default Projects