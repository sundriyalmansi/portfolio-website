import React from 'react';
import './Contact.css';
import { Icon } from '@iconify/react';

const Contact = () => {
    return (
        <div className="contactsection" id="contactme">
            <div className="container">
                <div className="contact">
                    <div className="row">
                        <h2 className="title">Get In Touch</h2>
                    </div>
                    <div className="row contactItems">
                        <div className="col-md-4">
                            <div className="item">
                                <div>
                                    <Icon className="iconsizing" icon="bx:bxs-phone-call" />
                                </div>
                                <div className="content">
                                    <p className="contactColTitle">Phone</p>
                                    <p className="contactColTitle"> +1 940 315 0107</p>
                                </div>
                            </div>  
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                <div>
                                    <Icon className="iconsizing" icon="carbon:email" />
                                </div>
                                <div className="content">
                                    <p className="contactColTitle">Email</p>
                                    <p className="contactColTitle"> sundriyal1103@gmail.com</p>
                                </div>
                            </div>  
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                <div>
                                    <Icon className="iconsizing" icon="eva:pin-fill" />
                                </div>
                                <div className="content">
                                    <p className="contactColTitle">Address</p>
                                    <p className="contactColTitle"> Dallas, Texas</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Contact;
