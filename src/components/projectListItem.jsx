import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons'

export default function ProjectListItem(props){
    const {project} = props
    
    return(
        
            <div className="project-tile" >
                <a href={project.link} target="_blank" rel="noreferrer noopener" aria-label={project.name + " Link"}>
                    <div className="project-img" style={{backgroundImage: "url(" + project.image + ")"}} alt={project.name + " screenshot"} />
                </a>
                <div className="project-desc">
                    <div className="project-title">
                        <a href={project.link} target="_blank" rel="noreferrer noopener" aria-label={project.name + " Link"}><FontAwesomeIcon icon={faLink} /></a>
                        <h3>{project.name}</h3>
                        {project.git && (
                            <a href={project.git} target="_blank" rel="noreferrer noopener" aria-label="Github Link"><FontAwesomeIcon icon={faGithub} /></a>
                        )}
                        {project.codepen && (
                            <a href={project.codepen} target="_blank" rel="noreferrer noopener" aria-label="CodePen Link"><FontAwesomeIcon icon={faCodepen} /></a>
                        )}
                        {!project.codepen && !project.git && (
                            <div className="project-link-placeholder" ></div>
                        )}
                    </div>
                    <p>{project.description}</p>
                </div>
            </div>
        
    )
}