import React from 'react';

export default function ProjectListContainer({ projects }) { 
    if (!projects || projects.length === 0) {
        return <p>No projects to display.</p>;
    }

    return (
        <div className="project-grid"> 
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    className="project-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="project-img-container">
                        {project.image && <img src={project.image} alt={`${project.name} screenshot`} />}
                    </div>
                    <div className="project-card-content">
                        <h3>{project.name}</h3>
                        {project.category && (
                            <div className="project-category">
                                {`// ${project.category.toLowerCase()}`}
                            </div>
                        )}
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