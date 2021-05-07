import ProjectListItem from '../components/projectListItem'
import projectData from '../projectData'

export default function ProjectListContainer(){
    return(
        projectData.map((project, index) =>(
            <ProjectListItem key={index} project={project}/>
        ))
    )
}