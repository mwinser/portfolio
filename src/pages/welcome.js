import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';

function Welcome (){
    return( 
    <section className="primary-section">
      <div id="profile-container" >
        <div id="img-frame"></div>
          <div className="text-tile"><h1>Hi there! I'm Mike Winser.</h1><p>I'm a Spokane-based problem solver and maker-of-stuff. This site displays some of my work.</p><p> I'm always learning new things, so check back in soon!</p>
            <div id="links">
              <a href="https://github.com/mwinser" ><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://twitter.com/winsaurus"><FontAwesomeIcon icon={faTwitter} /></a> 
              <a href="https://linkedin.com/in/mwinser"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://codepen.io/winserm"><FontAwesomeIcon icon={faCodepen} /></a>
            </div>
          </div>
        </div>
    </section>
    )
  }

export default Welcome