import React, { useState, useMemo } from 'react';
import ReactGA from 'react-ga4'
import ProjectListContainer from "../containers/projectListContainer"
import projectData from '../projectData'; // Import project data here

const FILTER_MAP = {
    ALL: () => true,
    CLIENT: project => project.category === "Client Project",
    INTERNAL: project => project.category === "Internal Project", 
    PERSONAL: project => project.category === "Personal Project",
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Projects(){
    ReactGA.send({ hitType: "pageview", page: "/projects"});

    const [activeFilter, setActiveFilter] = useState('ALL');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
    
    // Tech stack filter state
    const [activeTechFilter, setActiveTechFilter] = useState('ALL');
    const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);
    const [focusedTechOptionIndex, setFocusedTechOptionIndex] = useState(-1);

    // Extract all unique tech skills from projects
    const allTechSkills = useMemo(() => {
        const techMap = new Map();
        projectData.forEach(project => {
            if (project.techStack) {
                project.techStack.forEach(tech => {
                    const lowerTech = tech.toLowerCase();
                    if (!techMap.has(lowerTech)) {
                        techMap.set(lowerTech, tech); // Store original casing
                    }
                });
            }
        });
        const uniqueTechs = Array.from(techMap.values()).sort();
        return ['ALL', ...uniqueTechs];
    }, []);

    // Apply both filters
    const filteredProjects = useMemo(() => {
        return projectData.filter(project => {
            const categoryMatch = FILTER_MAP[activeFilter](project);
            const techMatch = activeTechFilter === 'ALL' || 
                (project.techStack && project.techStack.some(tech => 
                    tech.toLowerCase() === activeTechFilter.toLowerCase()
                ));
            return categoryMatch && techMatch;
        });
    }, [activeFilter, activeTechFilter]);

    const handleFilterSelect = (filterName) => {
        setActiveFilter(filterName);
        setIsDropdownOpen(false);
        setFocusedOptionIndex(-1);
    };

    const handleTechFilterSelect = (techName) => {
        setActiveTechFilter(techName);
        setIsTechDropdownOpen(false);
        setFocusedTechOptionIndex(-1);
    };

    const handleDropdownKeyDown = (e) => {
        if (!isDropdownOpen) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsDropdownOpen(true);
                setFocusedOptionIndex(FILTER_NAMES.indexOf(activeFilter));
            }
            return;
        }

        // Dropdown is open
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setFocusedOptionIndex(prev => 
                    prev < FILTER_NAMES.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedOptionIndex(prev => 
                    prev > 0 ? prev - 1 : FILTER_NAMES.length - 1
                );
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                if (focusedOptionIndex >= 0) {
                    handleFilterSelect(FILTER_NAMES[focusedOptionIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsDropdownOpen(false);
                setFocusedOptionIndex(-1);
                break;
            default:
                break;
        }
    };

    const handleTechDropdownKeyDown = (e) => {
        if (!isTechDropdownOpen) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsTechDropdownOpen(true);
                setFocusedTechOptionIndex(allTechSkills.indexOf(activeTechFilter));
            }
            return;
        }

        // Dropdown is open
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setFocusedTechOptionIndex(prev => 
                    prev < allTechSkills.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedTechOptionIndex(prev => 
                    prev > 0 ? prev - 1 : allTechSkills.length - 1
                );
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                if (focusedTechOptionIndex >= 0) {
                    handleTechFilterSelect(allTechSkills[focusedTechOptionIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsTechDropdownOpen(false);
                setFocusedTechOptionIndex(-1);
                break;
            default:
                break;
        }
    };

    const handleOptionClick = (filterName, index) => {
        handleFilterSelect(filterName);
    };

    const handleTechOptionClick = (techName, index) => {
        handleTechFilterSelect(techName);
    };

    const handleDropdownBlur = (e) => {
        // Only close if focus is moving outside the dropdown
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsDropdownOpen(false);
            setFocusedOptionIndex(-1);
        }
    };

    const handleTechDropdownBlur = (e) => {
        // Only close if focus is moving outside the dropdown
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsTechDropdownOpen(false);
            setFocusedTechOptionIndex(-1);
        }
    };

    const getDisplayName = (name) => {
        if (name === 'ALL') return 'All Types';
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    const getTechDisplayName = (tech) => {
        if (tech === 'ALL') return 'All Skills';
        return tech;
    };

    return (
        <section className="projects-section"> {/* Main wrapper for project page content */}
            <h1 className="screen-reader-text">Projects</h1>
            
            <div className="projects-intro">
                <h2>My Work</h2> {/* Or a more engaging title */}
                <p>Here's a selection of projects where I've turned ideas into reality, showcasing both professional accomplishments and personal explorations.</p>
            </div>

            <div className="filter-controls">
                {/* Category Filter */}
                <div 
                    className={`custom-dropdown ${isDropdownOpen ? 'open' : ''}`}
                    role="combobox"
                    aria-controls="project-list"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="listbox"
                    aria-label="Project Type Filter"
                    aria-activedescendant={focusedOptionIndex >= 0 ? `option-${FILTER_NAMES[focusedOptionIndex]}` : undefined}
                    tabIndex={0}
                    onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                        if (!isDropdownOpen) {
                            setFocusedOptionIndex(FILTER_NAMES.indexOf(activeFilter));
                        }
                    }}
                    onKeyDown={handleDropdownKeyDown}
                    onBlur={handleDropdownBlur}
                >
                    <div className="dropdown-selected">
                        {getDisplayName(activeFilter)}
                    </div>
                    <div className="dropdown-arrow"></div>
                    {isDropdownOpen && (
                        <ul className="dropdown-options" role="listbox">
                            {FILTER_NAMES.map((name, index) => (
                                <li
                                    key={name}
                                    id={`option-${name}`}
                                    role="option"
                                    aria-selected={activeFilter === name}
                                    className={`dropdown-option ${activeFilter === name ? 'selected' : ''} ${focusedOptionIndex === index ? 'focused' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOptionClick(name, index);
                                    }}
                                    onMouseEnter={() => setFocusedOptionIndex(index)}
                                >
                                    {getDisplayName(name)}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Tech Stack Filter */}
                <div 
                    className={`custom-dropdown ${isTechDropdownOpen ? 'open' : ''}`}
                    role="combobox"
                    aria-controls="project-list"
                    aria-expanded={isTechDropdownOpen}
                    aria-haspopup="listbox"
                    aria-label="Tech Stack Filter"
                    aria-activedescendant={focusedTechOptionIndex >= 0 ? `tech-option-${allTechSkills[focusedTechOptionIndex]}` : undefined}
                    tabIndex={0}
                    onClick={() => {
                        setIsTechDropdownOpen(!isTechDropdownOpen);
                        if (!isTechDropdownOpen) {
                            setFocusedTechOptionIndex(allTechSkills.indexOf(activeTechFilter));
                        }
                    }}
                    onKeyDown={handleTechDropdownKeyDown}
                    onBlur={handleTechDropdownBlur}
                >
                    <div className="dropdown-selected">
                        {getTechDisplayName(activeTechFilter)}
                    </div>
                    <div className="dropdown-arrow"></div>
                    {isTechDropdownOpen && (
                        <ul className="dropdown-options" role="listbox">
                            {allTechSkills.map((tech, index) => (
                                <li
                                    key={tech}
                                    id={`tech-option-${tech}`}
                                    role="option"
                                    aria-selected={activeTechFilter === tech}
                                    className={`dropdown-option ${activeTechFilter === tech ? 'selected' : ''} ${focusedTechOptionIndex === index ? 'focused' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleTechOptionClick(tech, index);
                                    }}
                                    onMouseEnter={() => setFocusedTechOptionIndex(index)}
                                >
                                    {getTechDisplayName(tech)}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Render a single ProjectListContainer with the filtered projects */}
            <ProjectListContainer projects={filteredProjects} />
            
        </section>
    )
}

export default Projects