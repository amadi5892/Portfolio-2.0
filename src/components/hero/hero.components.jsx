import React from "react";
import './hero.styles.css';

const Hero = () => {
    return (
        <div className="hero-section" >
            <div className="hero-container">
                <div className="hero-text-box" >
                    <h2>Hello,</h2>
                    <h2>I am <span>Parrish</span>.</h2>
                    <h2>Full Stack</h2>
                    <h2><span>&</span> Mobile App Developer</h2>
                </div>
                <div className="hero-btn-section">
                    <button className="hero-btn" onClick={e => window.location.href='#contact'} >Let's Get In Touch</button>
                </div>
                <div className="sub-hero-container" >
                    <p>Currently located in <span>New York, NY</span>. I love building creative interactive applications.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;