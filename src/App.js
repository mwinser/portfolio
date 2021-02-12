
import './App.css';
import React, {useState} from "react";
import Projects from "./pages/projects"
import Welcome from "./pages/welcome"
import AboutMe from "./pages/aboutme"
import Contact from "./pages/contact"
import Error from "./pages/error"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



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








export default App;
