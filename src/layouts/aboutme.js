import React from "react"
import ReactGA from 'react-ga4'
import SkillsCard from "../components/skillsCard"
import ProfilePic from "../components/profilePic"


function AboutMe() {
  ReactGA.send({ hitType: "pageview", page: "/about"});
    return(
      <section className="primary-section">
        <ProfilePic/>
        <div className="text-tile">
          <h1>About Me</h1>
          <p>Hi! I'm a self-taught web developer and former scientist living in the beautiful Pacific Northwest.
          </p>
          <p> During the pandemic, I started getting into game and web dev. I loved it so much, I decided to quit my job and spent the next year learning everything I could, taking my first web development position in 2021.
          </p>
          <p>I love solving problems, learning new things and making stuff, so I seriously love to code.
          </p>
          <div className="flex-cards">
            <SkillsCard title="Passions" skills="Pixel Perfect Design Implementation, Accessibility, AI"/>
            <SkillsCard title="Fronts" skills="HTML, CSS/SASS, JS, Vue/Nuxt, React, Tailwind, GSAP"/>
            <SkillsCard title="Backs" skills="Node, Python, PHP, Shopify, Wordpress, Docker"/>
            <SkillsCard title="CMSs" skills="Prismic, Sanity, Craft, Wordpress(ACF), Webflow, Firebase"/>
            <SkillsCard title="Others" skills="Git, npm, VS Code, GTM, MailChimp, AI"/>

          </div>
          </div>
      </section>
    )
  }

export default AboutMe