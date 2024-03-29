import React from "react"
import ReactGA from 'react-ga4'
import Links from '../components/links'


function Contact (){
  ReactGA.send({ hitType: "pageview", page: "/contact"});
    return( 
      <section className="primary-section">
        <div className="text-tile">
          <h1>Contact</h1>
          <p>Have a question, comment, or interested in hiring me?</p>
          <p> Gmail me at <b>mike.winser</b></p>
          <p>Or find me at one of the following:</p>
          <Links/>
        </div>
      </section>
    )
  }

export default Contact