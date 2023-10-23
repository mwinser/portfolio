import React from "react"
import ReactGA from 'react-ga4'

function Error() {
  ReactGA.send({ hitType: "pageview", page: "/error"});
    return( 
      <section className="primary-section">
        <div className="text-tile">
          <h1>Oh Noes...</h1>
          <p>There's been an error. How <strong>embarassing</strong>.</p>
        </div>
      </section>
    )
  }

export default Error