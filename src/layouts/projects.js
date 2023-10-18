import ReactGA from 'react-ga'
import ProjectListContainer from "../containers/projectListContainer"

function Projects(){
    ReactGA.pageview('/#/projects')
    return (
        <>
        <section className="primary-section">
            <div className="text-tile">
                <h1>Sample Projects</h1>
            </div>
        </section>
        <section id="projects">
            <ProjectListContainer />
        </section>
        <section className="primary-section">
            <div className="text-tile">
                <h1>Personal Projects</h1>
            </div>
        </section>
        <section id="projects">
            <ProjectListContainer showPersonal={true}/>
        </section>
        </>
    )
    }

export default Projects