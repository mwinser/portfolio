
import './App.css';
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';




function App () {

  const [tabName, setTabName] = useState("Welcome")
  const [isMenuOpen, setIsMenuOpen]= useState(false)

  function changeTab(input){
    setTabName(input)
    setIsMenuOpen(false)
  }

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen=>!prevIsMenuOpen)
  }

  let tab;
    switch(tabName){
      case "Welcome":
        tab = <Welcome/>;
        break;
      case "Projects":
        tab = <Projects/>;
        break;
      case "About Me":
        tab = <AboutMe/>;
        break;
      case "Contact":
        tab = <Contact/>;
        break;
      default:
        tab = <Error/>;
    
  }
  return(
    <div>
      <nav >
        <div id="titlebar">mwinser.com</div>
        <i onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faBars} /></i>
        <ul className= {isMenuOpen ? 'nav-open': null}>
          <i onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faTimes} /></i>
          <li className={tab==="Welcome"?"navlink current":"navlink"} onClick={()=>changeTab("Welcome")}>Welcome</li>
          <li className={tab==="Projects"?"navlink current":"navlink"} onClick={()=>changeTab("Projects")}>Projects</li>
          <li className={tab==="About Me"?"navlink current":"navlink"} onClick={()=>changeTab("About Me")}>About Me</li>
          <li className={tab==="Contact"?"navlink current":"navlink"} onClick={()=>changeTab("Contact")}>Contact</li>
        </ul>
      </nav>
      <main>
        {tab}
      </main>
    </div>
  )
}

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

function Welcome (){
    return( 
    <section className="primary-section">
      <div id="profile-container" >
        <div id="img-frame"></div>
          <div className="text-tile"><h1>Hi there! I'm Mike Winser.</h1><p>I'm a Spokane-based problem solver and maker-of-stuff. This site displays some of my work.</p><p> I'm always learning new things, so check back in soon!</p>
            <div id="links">
              <a href="https://github.com/mwinser" ><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://twitter.com/winsaurus"><FontAwesomeIcon icon={faTwitter} /></a> 
              <a href="https://linkedin.com/in/mwinser"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://codepen.io/winserm"><FontAwesomeIcon icon={faCodepen} /></a>
            </div>
          </div>
        </div>
    </section>
    )
  }

function AboutMe() {

    return(
      <section className="primary-section">
        <div className="text-tile">
          <h1>About Me</h1>
          <p>I'm a former Sleep Scientist (yes, that is a thing) and I currently work as a polysomnographer in clinical sleep medicine in beautiful Spokane, WA.
          </p>
          <p>In October 2020, I began seriously learning web development with freeCodeCamp and have created this website to show off some of my work. 
          I've always loved solving problems and making stuff.
          </p>
          <p>Here are some of the technologies I use:
          </p>
          <ul>
            <li>HTML, CSS, Javascript, Bootstrap and React</li>
            <li>Node.js, express, MongoDB and Mongoose</li>
            <li>C#, Unity and Python</li>
          </ul>
        </div>
      </section>
    )
  }

function Contact (){

    return( 
      <section className="primary-section">
        <div className="text-tile">
          <h1>Contact</h1>
          <p>Have a question, comment, or interested in hiring me?</p>
          <p> Gmail me at <b>mike.winser</b></p>
          <div id="links">
              <a href="https://github.com/mwinser" ><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://twitter.com/winsaurus"><FontAwesomeIcon icon={faTwitter} /></a> 
              <a href="https://linkedin.com/in/mwinser"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://codepen.io/winserm"><FontAwesomeIcon icon={faCodepen} /></a>
            </div>
        </div>
      </section>
    )
  }

function Error() {

    return( 
      <section className="primary-section">
        <div className="text-tile">Oh Geez. There's been an error. How <strong>embarassing</strong>.
        </div>
      </section>
    )
  }


export default App;
