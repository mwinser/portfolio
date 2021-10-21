import ProjectListContainer from "../containers/projectListContainer"

function Projects(){

    return (
        <>
        <section className="primary-section">
            <div className="text-tile">
                <h1>Projects</h1>
                <p>Check out a sampling of my completed projects:</p>
            </div>
        </section>
        <section id="projects">
            <ProjectListContainer />
        </section>
        <section className="primary-section">
            <div className="text-tile">
                <h1>Works in Progress</h1>
                <p>Functional projects I'm currently working on:</p>
            </div>
        </section>
        <section id="projects">
            <ProjectListContainer showWIP={true}/>
        </section>
        </>
    )
    }

export default Projects