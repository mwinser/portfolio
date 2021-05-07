import ProjectListContainer from "../containers/projectListContainer"

function Projects(){

    return (
        <>
        <section className="primary-section">
            <div className="text-tile">
                <h1>Recent Projects</h1>
                <p>Have a look at some recent projects I've been working on:</p>
            </div>
        </section>
        <section id="projects">
            <ProjectListContainer />
        </section>
        </>
    )
    }

export default Projects