import React from "react";
import './contact.styles.css';

const Contact = () => {
    return (
        <div className="contact-section" >
            <div className="contact-heading" >
                <h2>Contact</h2>
            </div>
            <div className="contact-container">
                <form className="contact-form">
                    <div className="text" >
                        <div>
                            <label>
                                Name
                            </label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>
                                Email
                            </label>
                            <input type="email"/>
                        </div>
                    </div>
                    <label>
                    Message
                    </label>
                    <textarea rows='10' cols='10'></textarea>
                    <div className="contact-btn-section">
                        <button className="contact-btn">Send Message</button>
                    </div>
                </form>
            </div>
            <div className="contact-display-section">
                <div className="contact-display">
                    <h2>Contact me by <span>email</span> or <span>social media</span></h2>
                    <a href="https://www.linkedin.com/in/parrish-williamson-662410a1/" target="_blank" rel="noreferrer"><ion-icon  name="logo-linkedin" ></ion-icon></a> &nbsp;
                    <a href="https://github.com/amadi5892" target="_blank" rel="noreferrer"><ion-icon  name="logo-github" ></ion-icon></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;