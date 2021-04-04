import React from "react"
import projectData from "../projectData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons'

function Projects(){

    const projectsListed = projectData.map((project, index) =>(


        <div key={index} className="project-tile" >
            <img className="project-img" src={project.image} alt={project.name + " screenshot"} />
            <div className="project-desc">
                <div className="project-title">
                    <a href={project.link}><FontAwesomeIcon icon={faLink} /></a>
                    <h3>{project.name}</h3>
                    {project.git && (
                        <a href={project.git}><FontAwesomeIcon icon={faGithub} /></a>
                    )}
                    {project.codepen && (
                        <a href={project.codepen}><FontAwesomeIcon icon={faCodepen} /></a>
                    )}
                </div>
                <p>{project.description}</p>
            </div>
        </div>



    ))
    return (
        <>
        <section className="primary-section">
            <div className="text-tile">
            <h1>Recent Projects</h1>
            <p>Have a look at some recent projects I've been working on:
            </p>
            </div>
        </section>
        <section id="projects">
            {projectsListed}
        </section>
        </>
    )
    }

export default Projects