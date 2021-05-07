
import './App.css';
import React, {useState, useEffect, lazy, Suspense} from "react"
import {Switch, Link, Route, useLocation} from 'react-router-dom'
import * as ROUTES from './constants/routes'

const Welcome = lazy(()=> import("./pages/welcome"))
const Projects = lazy(()=> import("./pages/projects"))
const AboutMe = lazy(()=> import("./pages/aboutme"))
const Contact = lazy(()=> import("./pages/contact"))
const Error = lazy(()=> import("./pages/error"))

function App () {

  const [isMenuOpen, setIsMenuOpen]= useState(false)
  const location = useLocation()

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen=>!prevIsMenuOpen)
  }

  //close menu if url changes
  useEffect(()=>{setIsMenuOpen(false)},[location])

  return(
    <div>
      <nav >
        <div id="titlebar">mwinser.com</div>
        <i onClick={()=>toggleMenu()}>
          <svg id="ex" height="30" width="30">
            <line className={isMenuOpen ? "ex top one" : "ex top"} x1="3" y1="15" x2="27" y2="15"  />
            <line className={isMenuOpen ? "ex two" : "ex"} x1="3" y1="15" x2="27" y2="15" />
            <line className={isMenuOpen ? "ex bottom three" : "ex bottom"} x1="3" y1="15" x2="27" y2="15" />
          </svg>
        </i>
        <ul className= {isMenuOpen ? 'nav-open': null}>
          <Link to={ROUTES.WELCOME}><li className={location.pathname===ROUTES.WELCOME? 'current' : null}>Welcome</li></Link>
          <Link to={ROUTES.PROJECTS}><li className={location.pathname===ROUTES.PROJECTS? 'current' : null}>Projects</li></Link>
          <Link to={ROUTES.ABOUT}><li className={location.pathname===ROUTES.ABOUT? 'current' : null}>About Me</li></Link>
          <Link to={ROUTES.CONTACT}><li className={location.pathname===ROUTES.CONTACT? 'current' : null}>Contact</li></Link>
        </ul>
      </nav>
      <main>
        <Suspense fallback = {<p>Loading...</p>}>
          <Switch>
            <Route exact path={ROUTES.WELCOME} component={Welcome}/>
            <Route exact path={ROUTES.PROJECTS} component={Projects}/>
            <Route exact path={ROUTES.ABOUT} component={AboutMe}/>
            <Route exact path={ROUTES.CONTACT} component={Contact}/>
            <Route path="/" component={Error}/>
          </Switch>
        </Suspense>
      </main>
    </div>
  )
}


export default App;
