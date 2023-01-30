import React from "react";
import './projects.styles.css';

const Projects = () => {
    return (
        <div className='projects-section'>
            <div className="projects-heading" >
                <h2>Projects</h2>
            </div>
            <div className="project-container" >
                <h3>E-commerce Site (Demo)</h3>
                <img class="project-img" src={require('../../assets/ecom.jpg')} alt="ecom-site"/>
                <div className="project-info">
                    <p>Live Demo E-commerce web applicaton. This web application is an example of an E-commerce website for a future brand.</p>
                    <ul>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Node.js</li>
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