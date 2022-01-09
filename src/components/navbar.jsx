import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect, useContext} from "react"
import {Link, useLocation} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { themes, ThemeContext } from "../context/themeContext"

export default function Navbar(){
  
  const [theme, setTheme] = useContext(ThemeContext)
  const [isSun, setIsSun] = useState(true)
    
  const [isMenuOpen, setIsMenuOpen]= useState(false)
  const location = useLocation()

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen=>!prevIsMenuOpen)
  }
  function toggleTheme() {
    setTheme(prevTheme=> prevTheme === themes.dark ? themes.light : themes.dark)
    setIsSun(prevIsSun=>!prevIsSun)
    
  }

  //close menu if url changes
  useEffect(()=>{setIsMenuOpen(false)},[location])
  useEffect(()=>{
    window.root.style.setProperty('--foreground', theme.foreground)
    window.root.style.setProperty('--middle', theme.middle)
    window.root.style.setProperty('--background', theme.background)
    window.root.style.setProperty('--border', theme.border)
    window.root.style.setProperty('--project-tile', theme.projectTile)
    window.root.style.setProperty('--text', theme.text)
  }, [theme])

    
    
    return(
    <nav style={{color: theme.foreground}}>
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
            <Link to={ROUTES.ABOUT}><li className={location.pathname===ROUTES.ABOUT? 'current' : null}>About</li></Link>
            <Link to={ROUTES.CONTACT}><li className={location.pathname===ROUTES.CONTACT? 'current' : null}>Contact</li></Link>
            <li onClick={()=>toggleTheme()}><FontAwesomeIcon icon={isSun ? faSun : faMoon}/></li>
        </ul>
    </nav>
  )
}