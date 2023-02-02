import React from "react";
import FoodApp from "../FoodApp/foodApp.component";
import './projects.styles.css';

const Projects = () => {
    return (
        <div className='projects-section'>
            <div className="projects-heading" >
                <h2>Projects</h2>
            </div>
            <FoodApp />
            <div className="project-container" >
                <h3>E-commerce Site (Demo)</h3>
                <img className="project-img" src={require('../../assets/ecom.jpg')} alt="ecom-site"/>
                <div className="project-info">
                    <p>Live Demo E-commerce web applicaton. This web application is an example of an E-commerce website for a future brand.</p>
                    <h4>Technology Used</h4>
                    <ul>
                        <li><strong>React</strong>, a JavaScript library for building user interfaces. </li>
                        <li><strong>Firebase</strong>, used for Database and User Authentication for front end development.</li>
                        <li><strong>Node.js</strong>, backend JavaScript runtime environment.</li>
                        <li><strong>SASS & JS-in-CSS</strong>, used for styling the web application.</li>
                    </ul>
                </div>
                <div className="project-content">
                    <a href="https://lucent-kringle-f4fb84.netlify.app" target="_blank" rel="noreferrer"><span>Click here to demo this E-commerce Web Application.</span></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;