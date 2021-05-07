import './App.css';
import React, {lazy, Suspense} from "react"
import {Switch, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Navbar from './components/navbar'

const Welcome = lazy(()=> import("./pages/welcome"))
const Projects = lazy(()=> import("./pages/projects"))
const AboutMe = lazy(()=> import("./pages/aboutme"))
const Contact = lazy(()=> import("./pages/contact"))
const Error = lazy(()=> import("./pages/error"))

function App () {

  return(
    <div>
      <Navbar/>
      <main>
        <Suspense fallback = {<p style={{"color":"white"}}>Loading...</p>}>
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
