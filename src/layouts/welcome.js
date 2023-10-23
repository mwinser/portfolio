import React from "react"
import ReactGA from 'react-ga4'
import Links from "../components/links";
import ProfilePic from "../components/profilePic";


function Welcome (){
  ReactGA.send({ hitType: "pageview", page: "/"});
    return( 
    <section className="primary-section">
      <div id="profile-container" >
        <ProfilePic/>
          <div className="text-tile">
            <h1>Hi there! I'm Mike Winser.</h1>
            <p>I'm a web developer with a mission to bring your digital dreams to life!</p>
            <p> Whether you're a startup seeking a captivating online presence or an established brand looking to level up your web experience, I'm here to transform your ideas into pixel-perfect reality.</p>
            <Links/>
          </div>
        </div>
    </section>
    )
  }

export default Welcome