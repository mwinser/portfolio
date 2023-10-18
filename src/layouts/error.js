import React from "react"
import ReactGA from 'react-ga'

function Error() {
  ReactGA.pageview('/#/error')
    return( 
      <section className="primary-section">
        <div className="text-tile">Oh Geez. There's been an error. How <strong>embarassing</strong>.
        </div>
      </section>
    )
  }

export default Error