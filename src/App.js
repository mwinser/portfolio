
import './App.css';
import React, {useState} from "react";
import Projects from "./pages/projects"
import Welcome from "./pages/welcome"
import AboutMe from "./pages/aboutme"
import Contact from "./pages/contact"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App () {

  const [tabName, setTabName] = useState(<Welcome/>)
  const [isMenuOpen, setIsMenuOpen]= useState(false)

  function changeTab(input){
    setTabName(input)
    setIsMenuOpen(false)
  }

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen=>!prevIsMenuOpen)
  }

  return(
    <div>
      <nav >
        <div id="titlebar">mwinser.com</div>
        <i onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faBars} /></i>
        <ul className= {isMenuOpen ? 'nav-open': null}>
          <i onClick={()=>toggleMenu()}><FontAwesomeIcon icon={faTimes} /></i>
          <li onClick={()=>changeTab(<Welcome/>)}>Welcome</li>
          <li onClick={()=>changeTab(<Projects/>)}>Projects</li>
          <li onClick={()=>changeTab(<AboutMe/>)}>About Me</li>
          <li onClick={()=>changeTab(<Contact/>)}>Contact</li>
        </ul>
      </nav>
      <main>
        {tabName}
      </main>
    </div>
  )
}


export default App;
