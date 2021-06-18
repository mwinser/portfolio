import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons'

export default function ProjectListItem(props){
    const {project} = props
    
    return(
        
            <div className="project-tile" >
                <a href={project.link}>
                    <div className="project-img" style={{backgroundImage: "url(" + project.image + ")"}} alt={project.name + " screenshot"} />
                </a>
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
        
    )
}