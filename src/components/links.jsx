
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';

export default function Links() {
    return(
        <div id="links">
            <a href="https://github.com/mwinser" ><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://twitter.com/winsaurus"><FontAwesomeIcon icon={faTwitter} /></a> 
            <a href="https://linkedin.com/in/mwinser"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://codepen.io/winserm"><FontAwesomeIcon icon={faCodepen} /></a>
            <a href="https://replit.com/@mwinser"><img width="36px" style={{"verticalAlign": "-0.2em"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg" alt="replit logo"/></a>
        </div>
    )
}