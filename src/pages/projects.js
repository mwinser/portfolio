import React from "react"
import projectData from "../projectData"

function Projects(){

    const projectsListed = projectData.map(project =>(

        <a href={project.link}>
        <div className="project-tile" >
            <img className="project-img" src={project.image} alt={project.name + " screenshot"} />
            <div className="project-desc">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </div>
        </a> 


    ))
    return (
        <section id="projects">
            {projectsListed}
        </section>
    )
    }

export default Projects