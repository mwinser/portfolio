import './App.css';
import React, {lazy, Suspense, useEffect} from "react"
import {Switch, Route} from 'react-router-dom'
import ThemeProvider from './context/themeContext'
import * as ROUTES from './constants/routes'
import Navbar from './components/navbar'
// import Namedrop from './layouts/namedrop'
import Footer from './components/footer'
import Spinner from './components/spinner'
import ReactGA from 'react-ga4'

const Welcome = lazy(()=> import("./layouts/welcome"))
const Projects = lazy(()=> import("./layouts/projects"))
const StudioArt = lazy(()=> import("./layouts/studioArt"))
const AboutMe = lazy(()=> import("./layouts/aboutme"))
const Contact = lazy(()=> import("./layouts/contact"))
const Error = lazy(()=> import("./layouts/error"))

function App () {
ReactGA.initialize('G-RL5NX1MQCQ');
  useEffect(()=>{
    const container = document.querySelector('.app-container');
    if (!container) return;

    const prepareImage = (img)=>{
      if (!img || img.classList.contains('image-fade')) return;
      img.classList.add('image-fade');
      const markLoaded = ()=> img.classList.add('is-loaded');
      if (img.complete && img.naturalWidth > 0){
        markLoaded();
      } else {
        img.addEventListener('load', markLoaded, { once: true });
        img.addEventListener('error', markLoaded, { once: true });
      }
    };

    container.querySelectorAll('img').forEach(prepareImage);

    const mo = new MutationObserver((mutations)=>{
      mutations.forEach((m)=>{
        m.addedNodes && m.addedNodes.forEach((node)=>{
          if (node.nodeType !== 1) return;
          if (node.tagName === 'IMG') {
            prepareImage(node);
          } else {
            node.querySelectorAll && node.querySelectorAll('img').forEach(prepareImage);
          }
        });
      });
    });
    mo.observe(container, { childList: true, subtree: true });
    return ()=> mo.disconnect();
  },[])
  return(
    <ThemeProvider>
      <div className="app-container">
        <div className="shower one"></div>
        <div className="shower two"></div>
        <div className="shower three"></div>
        <Navbar/>
        {/* <Namedrop/> */}
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
              <Route exact path={ROUTES.STUDIO_ART} component={StudioArt}/>
              <Route exact path={ROUTES.ABOUT} component={AboutMe}/>
              <Route exact path={ROUTES.CONTACT} component={Contact}/>
              <Route path="/" component={Error}/>
            </Switch>
          </Suspense>
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}


export default App;
