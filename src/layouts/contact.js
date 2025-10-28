import React from "react"
import ReactGA from 'react-ga4'

function Contact(){
  ReactGA.send({ hitType: "pageview", page: "/contact"});

    return( 
      <section className="primary-section">
        <div className="text-tile">
          <h1>Contact</h1>
          <p>Have a question, comment, or interested in hiring me?</p>
          <div className="contact-button"><button className="btn btn-primary"> <a href="mailto:alden.winser+portfolio@gmail.com" target="_blank" rel="noreferrer noopener">Email Alden</a></button></div>
        </div>
      </section>
    );
  }

export default Contact;