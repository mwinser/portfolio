import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';

function Contact (){

    return( 
      <section className="primary-section">
        <div className="text-tile">
          <h1>Contact</h1>
          <p>Have a question, comment, or interested in hiring me?</p>
          <p> Gmail me at <b>mike.winser</b></p>
          <div id="links">
              <a href="https://github.com/mwinser" ><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://twitter.com/winsaurus"><FontAwesomeIcon icon={faTwitter} /></a> 
              <a href="https://linkedin.com/in/mwinser"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://codepen.io/winserm"><FontAwesomeIcon icon={faCodepen} /></a>
            </div>
        </div>
      </section>
    )
  }

export default Contact