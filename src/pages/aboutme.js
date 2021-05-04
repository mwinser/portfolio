import React from "react"


function AboutMe() {

    return(
      <section className="primary-section">
        <div className="text-tile">
          <h1>About Me</h1>
          <p>Hi! I'm a former Sleep Scientist (yes, that is a thing) in beautiful Spokane, WA and I recently started a new career in web development
          </p>
          <p>In October 2020, I began seriously learning web development with freeCodeCamp and created this website to share my work. 
          </p>
          <p>I've always loved solving problems and making stuff, so I seriously love to code, especially when I'm making tools or games that other people enjoy.
          </p>
          <p>Here are some of the technologies I use:
          </p>
          <ul>
            <li>Front End 
              <p>Javascript (ES6+), React, HTML5, CSS3, Tailwind, SASS, Wordpress, Elementor & D3 </p>
            </li>
            <li>Back End 
              <p>Node, Express, MongoDB, Mongoose, Firebase & Firestore</p>
            </li>
            <li>Principles, Patterns & Methodologies
              <p>DRY, W3C, Mobile First Design & Responsive Design</p>
            </li>
            <li>Testing & Others
              <p>Mocha, Git, NPM, VS Code, Windows Shell scripting, Figma, R & SAS </p>
            </li>
          </ul>
        </div>
      </section>
    )
  }

export default AboutMe