import React from 'react';
import './Skills.css';
import { Icon } from '@iconify/react';




const Skills = () => {
    return (
        <div className="skillsSection" id="skillspage">
            <div className="margintop"></div>
            <hr className="hr-border"></hr>
            <h1 className="projectTitle">Skills</h1>
            <div className="parallax">
                <div className="container paddingTop">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="Skills-tech">
                                <div>
                                    <Icon className="iconsizing" icon="zondicons:education" />
                                </div>
                                <h6 className="educationTitle">Education</h6>
                                <div className="listitem">
                                    <h6>University of North Texas</h6>
                                    <p>Master of Science, Comp.Sc.</p>


                                </div>
                                <div className="listitem">
                                    <h6>University of Delhi</h6>
                                    <p>Bachelor of Science, Comp.Sc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="Skills-tech">
                                <div>
                                    <Icon className="iconsizing" icon="ant-design:code-filled" />
                                </div>
                                <h6 className="educationTitle">UX / UI</h6>
                                <div className="listitem">
                                    <h6>Languages</h6>
                                    <p>JavaScript, jQuery, HTML, CSS, Responsive Web Design</p>
                                </div>
                                <div className="listitem">
                                    <h6>Frameworks and Libraries</h6>
                                    <p>React, NodeJS, Vue, Bootstrap, Git, Azure</p>
                                </div>
                                <div className="listitem">
                                    <h6>Tools</h6>
                                    <p>Figma, AdobeXD, InVision, Sketch</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <div className="Skills-tech">
                                <div>
                                    <Icon className="iconsizing" icon="ant-design:code-filled" />
                                </div>
                                <h6 className="educationTitle">Skills</h6>


                                <div className="skill">
                                    <h6>UX Desginer
                                        <span>95%</span>
                                    </h6>
                                    <div className="skills-progress">
                                        <span className="sk1" data-value="90%"></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Front-end Development
                                        <span>85%</span>
                                    </h6>
                                    <div className="skills-progress">
                                        <span className="sk2" data-value="90%"></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Cloud
                                        <span>50%</span>
                                    </h6>
                                    <div className="skills-progress">
                                        <span className="sk3" data-value="90%"></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Full stack development
                                        <span>50%</span>
                                    </h6>
                                    <div className="skills-progress">
                                        <span className="sk4" data-value="90%"></span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills;


