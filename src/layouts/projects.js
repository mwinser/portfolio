import React, { useState } from 'react';
import ReactGA from 'react-ga4'
import ProjectListContainer from "../containers/projectListContainer"
import projectData from '../projectData'; // Import project data here

const FILTER_MAP = {
    ALL: () => true,
    PROFESSIONAL: project => !project.personal,
    PERSONAL: project => project.personal,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Projects(){
    ReactGA.send({ hitType: "pageview", page: "/projects"});

    const [activeFilter, setActiveFilter] = useState('ALL');

    const filteredProjects = projectData.filter(FILTER_MAP[activeFilter]);

    return (
        <section className="projects-section"> {/* Main wrapper for project page content */}
            <h1 className="screen-reader-text">Projects</h1>
            
            <div className="projects-intro">
                <h2>My Work</h2> {/* Or a more engaging title */}
                <p>Here's a selection of projects where I've turned ideas into reality, showcasing both professional accomplishments and personal explorations.</p>
            </div>

            <div className="filter-controls">
                {FILTER_NAMES.map(name => (
                    <button 
                        key={name} 
                        type="button" 
                        className={`filter-btn ${activeFilter === name ? 'active' : ''}`}
                        onClick={() => setActiveFilter(name)}
                        aria-pressed={activeFilter === name}
                    >
                        {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()} {/* Capitalize filter name */}
                    </button>
                ))}
            </div>

            {/* Render a single ProjectListContainer with the filtered projects */}
            <ProjectListContainer projects={filteredProjects} />
            
        </section>
    )
}

export default Projects