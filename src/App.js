import './App.css';
import React, {lazy, Suspense} from "react"
import {Switch, Route} from 'react-router-dom'
import ThemeProvider from './context/themeContext'
import * as ROUTES from './constants/routes'
import Navbar from './components/navbar'
import Spinner from './components/spinner'

const Welcome = lazy(()=> import("./layouts/welcome"))
const Projects = lazy(()=> import("./layouts/projects"))
const AboutMe = lazy(()=> import("./layouts/aboutme"))
const Contact = lazy(()=> import("./layouts/contact"))
const Error = lazy(()=> import("./layouts/error"))

function App () {

  return(
    <ThemeProvider>
      <div className="app-container">
      <Navbar/>
      <main>
        <Suspense fallback = {
          <section className="primary-section">
            <div className="text-tile" style={{"background": "unset"}}>
              <Spinner/>
            </div>
          </section>
        }>
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
    </ThemeProvider>
  )
}


export default App;
