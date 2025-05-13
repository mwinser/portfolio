import React from 'react';
// We will likely remove ProjectListItem or refactor it later.
// For now, ProjectListContainer will render the cards directly.
// import ProjectListItem from '../components/projectListItem'

// projectData will be passed as a prop from the parent (projects.js)
// import projectData from '../projectData'

export default function ProjectListContainer({ projects }) { // Expect a 'projects' prop
    if (!projects || projects.length === 0) {
        return <p>No projects to display.</p>; // Or some other placeholder
    }

    return (
        <div className="project-grid"> {/* Use the grid class from App.css */}
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    className="project-card"
                    style={{ animationDelay: `${index * 0.1}s` }} // Add stagger delay
                >
                    <div className="project-img-container">
                        {project.image && <img src={project.image} alt={`${project.name} screenshot`} />}
                    </div>
                    <div className="project-card-content">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        {project.techStack && project.techStack.length > 0 && (
                            <div className="project-tech-stack">
                                {project.techStack.map((tech, i) => (
                                    <div key={i} className="tech-tag"><span>{tech}</span></div>
                                ))}
                            </div>
                        )}
                        <div className="project-links">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View Live
                                </a>
                            )}
                            {project.git && (
                                <a href={project.git} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}