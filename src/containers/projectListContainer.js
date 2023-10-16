import ProjectListItem from '../components/projectListItem'
import projectData from '../projectData'

export default function ProjectListContainer(props){
    
    const showPersonal = props.showPersonal || false
    return(
        projectData.filter(project=>showPersonal ? project.personal : !project.personal).map((project, index) =>(
            <ProjectListItem key={index} project={project}/>
        ))
    )
}