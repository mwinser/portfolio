import React, {useState, useEffect} from "react"
import {Link, useLocation} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Navbar(){
    
    
  const [isMenuOpen, setIsMenuOpen]= useState(false)
  const location = useLocation()

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen=>!prevIsMenuOpen)
  }

  //close menu if url changes
  useEffect(()=>{setIsMenuOpen(false)},[location])

    
    
    return(
    <nav>
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
        </ul>
    </nav>
  )
}