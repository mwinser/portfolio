import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';


function Welcome (){
    return( 
    <section className="primary-section">
      <div id="profile-container" >
        <div id="img-frame" title="Mike at the Gorge"></div>
          <div className="text-tile"><h1>Hi there! I'm Mike Winser.</h1><p>I'm a Spokane-based web developer and maker-of-stuff. This site displays some of my work.</p><p> I'm always learning new things, so check back in soon!</p>
            <div id="links">
              <a href="https://github.com/mwinser" title="Github"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://twitter.com/winsaurus" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a> 
              <a href="https://linkedin.com/in/mwinser"title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://codepen.io/winserm"title="Codepen"><FontAwesomeIcon icon={faCodepen} /></a>
              <a href="https://replit.com/@mwinser"title="Replit"><img width="36px" style={{"verticalAlign": "-0.2em"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg" alt="replit logo"/></a>
            </div>
          </div>
        </div>
    </section>
    )
  }

export default Welcome