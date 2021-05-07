import React from "react"
import Links from "../components/links";


function Welcome (){
    return( 
    <section className="primary-section">
      <div id="profile-container" >
        <div id="img-frame" title="Mike at the Gorge"></div>
          <div className="text-tile"><h1>Hi there! I'm Mike Winser.</h1><p>I'm a Spokane-based web developer and maker-of-stuff. This site displays some of my work.</p><p> I'm always learning new things, so check back in soon!</p>
            <Links/>
          </div>
        </div>
    </section>
    )
  }

export default Welcome