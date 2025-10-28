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
          <p>Hi! I'm a software developer and former scientist living in the beautiful Pacific Northwest.
          </p>
          <p>Technology moves fast and AI even moreso. Staying on the cutting edge ensures that my clients' projects are built to the highest standards with the best practices available.
          </p>
          <p> I've built countless web-based and in-person interactive experiences for major brands in various industries, from Pepsi to Progressive, from advertising to healthcare. </p>
          <p>I love solving problems, learning new things and making stuff, so I seriously love to do what I do.
          </p>
          <div className="flex-cards">
            <SkillsCard title="Passions" skills="Pixel Perfect Design Implementation, Accessibility, AI"/>
            <SkillsCard title="Fronts" skills="HTML, CSS/SASS/SCSS, JavaScript, Vue/Nuxt, React, Tailwind, GSAP"/>
            <SkillsCard title="Backs" skills="Node.js, Python, PHP, Shopify, Wordpress, Docker"/>
            <SkillsCard title="CMSs" skills="Prismic, Sanity, Craft, Wordpress(ACF), Webflow, Firebase"/>
            <SkillsCard title="Others" skills="Git, npm, VS Code, GTM, MailChimp, AI, AI-assisted Coding"/>

          </div>
          </div>
      </section>
    )
  }

export default AboutMe