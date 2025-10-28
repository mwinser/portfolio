// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect} from "react"
import {Link, useLocation, useHistory} from 'react-router-dom'
import { gsap } from "gsap"
import * as ROUTES from '../constants/routes'
// import { themes, ThemeContext } from "../context/themeContext"
// import ReactGA from 'react-ga4'

export default function Navbar(){
  
  // const [theme, setTheme] = useContext(ThemeContext)
  // const [isSun, setIsSun] = useState(true)
    
  const [isMenuOpen, setIsMenuOpen]= useState(false)
  const location = useLocation()
  const history = useHistory()

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen=>!prevIsMenuOpen)
  }

  function handleNavClick(e, to){
    if (location.pathname === to){
      if (isMenuOpen) setIsMenuOpen(false)
      return
    }
    e.preventDefault()
    const mainEl = document.querySelector('main')
    if (!mainEl){
      if (isMenuOpen) setIsMenuOpen(false)
      history.push(to)
      return
    }
    gsap.to(mainEl, { duration: 0.2, opacity: 0, onComplete: () => {
      history.push(to)
      gsap.fromTo(mainEl, { opacity: 0 }, { duration: 0.3, opacity: 1 })
    }})
    if (isMenuOpen) setIsMenuOpen(false)
  }
  /*
  function toggleTheme() {
    setTheme(prevTheme=> {
      ReactGA.event({
        category: "Custom Click",
        action: "Toggle Theme",
        label: prevTheme === themes.dark ? "Light" : "Dark", // optional
      })
      return prevTheme === themes.dark ? themes.light : themes.dark
    })
    setIsSun(prevIsSun=>!prevIsSun)
    
  }
  */

  //close menu if url changes
  useEffect(()=>{setIsMenuOpen(false)},[location])
  /*
  useEffect(()=>{
    window.root.style.setProperty('--foreground', theme.foreground)
    window.root.style.setProperty('--middle', theme.middle)
    window.root.style.setProperty('--background', theme.background)
    window.root.style.setProperty('--border', theme.border)
    window.root.style.setProperty('--project-tile', theme.projectTile)
    window.root.style.setProperty('--text', theme.text)
  }, [theme])
  */

    
    
    return(
    // <nav style={{color: theme.foreground}}>
    <nav>

        <ul className= {isMenuOpen ? 'nav-open': null}>
            <Link to={ROUTES.WELCOME} onClick={(e)=>handleNavClick(e, ROUTES.WELCOME)}><li className={location.pathname===ROUTES.WELCOME? 'current' : null}>Welcome</li></Link>
            <Link to={ROUTES.PROJECTS} onClick={(e)=>handleNavClick(e, ROUTES.PROJECTS)}><li className={location.pathname===ROUTES.PROJECTS? 'current' : null}>Projects</li></Link>
            <Link to={ROUTES.STUDIO_ART} onClick={(e)=>handleNavClick(e, ROUTES.STUDIO_ART)}><li className={location.pathname===ROUTES.STUDIO_ART? 'current' : null}>Studio Art</li></Link>
            <Link to={ROUTES.ABOUT} onClick={(e)=>handleNavClick(e, ROUTES.ABOUT)}><li className={location.pathname===ROUTES.ABOUT? 'current' : null}>About</li></Link>
            <Link to={ROUTES.CONTACT} onClick={(e)=>handleNavClick(e, ROUTES.CONTACT)}><li className={location.pathname===ROUTES.CONTACT? 'current' : null}>Contact</li></Link>

            {/* <button aria-label="dark/light theme toggle" onClick={()=>{toggleTheme(); return toggleMenu()}}>
              <li className="theme-switch"> 
                <FontAwesomeIcon icon={isSun ? faSun : faMoon}/>
              </li>
            </button> */}

        </ul>
        <button className="hamburger" aria-label="toggle mobile menu" onClick={()=>toggleMenu()}>
            <svg id="ex" height="30" width="30">
                <line className={isMenuOpen ? "ex top one" : "ex top"} x1="3" y1="15" x2="27" y2="15"  />
                <line className={isMenuOpen ? "ex two" : "ex"} x1="3" y1="15" x2="27" y2="15" />
                <line className={isMenuOpen ? "ex bottom three" : "ex bottom"} x1="3" y1="15" x2="27" y2="15" />
            </svg>
        </button>

    </nav>
  )
}