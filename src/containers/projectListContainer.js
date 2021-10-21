import ProjectListItem from '../components/projectListItem'
import projectData from '../projectData'

export default function ProjectListContainer(props){
    
    const showWIP = props.showWIP || false
    return(
        projectData.filter(project=>showWIP ? project.wip : !project.wip).map((project, index) =>(
            <ProjectListItem key={index} project={project}/>
        ))
    )
}