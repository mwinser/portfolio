import React from "react"


function Projects(){
    return(
    <section id="projects">
      <a href="https://bdt-improv.netlify.app/">
        <div className="project-tile" >
          <div className="project-img" id="improv">
          </div>
          <div className="project-desc">
            <h3>Improv App</h3>
            <p>A suggestion generator for the Blue Door Theatre</p>
  
          </div>
        </div>
      </a> 
      <a href="https://codepen.io/winserm/full/XWKbapp">
        <div className="project-tile" >
          <div className="project-img" id="bats"></div>
          <div className="project-desc">
            <h3>Landing Page</h3>
            <p>Personal landing page project to work on responsive design</p>
  
          </div>
        </div>
      </a>
      <a href="https://codepen.io/winserm/full/XWKOxpv">
        <div className="project-tile" >
          <div className="project-img" id="usa"></div>
          <div className="project-desc">
            <h3>Data Visualization</h3>
            <p>Personal data visualization project using D3</p>
  
          </div>
        </div>
      </a>
      {/* <div className="project-tile">
        <a href="https://simmer.io/@WinserWorks">Unity projects</a>
        
        <a href="https://codepen.io/winserm/">Codepen projects</a>
        <a href="https://soundcloud.com/michael-winser-928373892">Music projects</a>
      </div> */}
      
  
    </section>)
    }

export default Projects