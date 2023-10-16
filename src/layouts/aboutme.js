import React from "react"
import SkillsCard from "../components/skillsCard"
import ProfilePic from "../components/profilePic"


function AboutMe() {

    return(
      <section className="primary-section">
        <ProfilePic/>
        <div className="text-tile">
          <h1>About Me</h1>
          <p>Hi! I'm a self-taught web developer and former scientist living in the beautiful Pacific Northwest
          </p>
          <p> During Covid, I really started reconsidering my career as I got into game and web dev. I took a year off to focus on learning and took my first web development position in 2021.
          </p>
          <p>I've always loved solving problems and making stuff, so I seriously love to code.
          </p>
          <div className="flex-cards">
            <SkillsCard title="Front Skillz" skills="HTML, CSS/SASS, JS, Vue/Nuxt, React, Tailwind, GSAP, Three.js, Babylon.js, Pixi.js"/>
            <SkillsCard title="Back Skillz" skills="Node, Express, PHP, Firebase, Shopify, Wordpress, Docker"/>
            <SkillsCard title="CMSs" skills="Prismic, Sanity, Craft, Wordpress(ACF)"/>
            <SkillsCard title="Others" skills="Git, NPM, VS Code, GA/GTM, MailChimp, OpenAI API"/>
            <SkillsCard title="Passions" skills="Pixel Perfect Design Implementation, Accessibility, Prompt Engineering"/>
          </div>
          </div>
      </section>
    )
  }

export default AboutMe