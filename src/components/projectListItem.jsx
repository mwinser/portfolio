export default function ProjectListItem(props){
    const {project} = props
    
    return(
        
        <a href={project.link} target="_blank" rel="noreferrer noopener" aria-label={project.name + " Link"} className="project-tile">
            <div className="project-tile-contents" >
                <div className="project-img" style={{backgroundImage: "url(" + project.image + ")"}} alt={project.name + " screenshot"} />
                <div className="project-desc">
                    <h3 className="project-title">
                         {project.name}
                    </h3>
                    <p>{project.description}</p>
                </div>
            </div>
        </a>
        
    )
}