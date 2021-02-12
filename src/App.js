
import './App.css';
import React, {useState} from "react";
import Projects from "./pages/projects"
import Welcome from "./pages/welcome"
import AboutMe from "./pages/aboutme"
import Contact from "./pages/contact"


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
        <i onClick={()=>toggleMenu()}>
          <svg id="ex" height="50" width="50">
            <line class={isMenuOpen ? "ex top one" : "ex top"} x1="5" y1="25" x2="45" y2="25"  />
            <line class={isMenuOpen ? "ex two" : "ex"} x1="5" y1="25" x2="45" y2="25" />
            <line class={isMenuOpen ? "ex bottom three" : "ex bottom"} x1="5" y1="25" x2="45" y2="25" />
          </svg>
        </i>
        <ul className= {isMenuOpen ? 'nav-open': null}>
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
