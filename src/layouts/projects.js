import ReactGA from 'react-ga'
import ProjectListContainer from "../containers/projectListContainer"

function Projects(){
    ReactGA.pageview('/projects')
    return (
        <>
        <h1 className="screen-reader-text">Projects</h1>
        <section className="primary-section">
            <div className="text-tile">
                <h2>Professional Work</h2>
            </div>
        </section>
        <section id="projects">
            <ProjectListContainer />
        </section>
        <section className="primary-section">
            <div className="text-tile">
                <h2>Personal Projects</h2>
            </div>
        </section>
        <section id="projects">
            <ProjectListContainer showPersonal={true}/>
        </section>
        </>
    )
    }

export default Projects