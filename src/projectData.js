import pepsi from "./assets/images/pepsi.gif"
import annihilator from "./assets/images/annihilator.png"
import bumblr from "./assets/images/bumblr.png"
import bdt from "./assets/images/bdt-site.webp"
import fourteenfour from "./assets/images/14four.png"
import affinius from "./assets/images/affinius.png"
import playlist from "./assets/images/playlist.png"
import micracleGro from "./assets/images/miraclegro.gif"

const projectData = [
    {
        name:"14Four Agency Site",
        description:"Multipage agency site with CMS, and complex GSAP animations",
        image: fourteenfour,
        link:"https://www.14four.com/",
        techStack: ["HTML", "CSS", "JavaScript", "GSAP", "Prismic (CMS)"]
    },
    {
        name:"Affinius Capital (USAA Real Estate)",
        description:"Multipage investment company site with fully custom component-based Wordpress CMS.",
        image: affinius,
        link:"https://affiniuscapital.com/",
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "WordPress (Custom Theme)"]
    },
    {
        name:"Better with Pepsi",
        description:"Side scrolling sweepstakes site with animations, hotspots and Spotify integration ",
        image: pepsi,
        link:"https://mot-062-better-with-pepsi.still.14four.com/" ,
        techStack: ["HTML", "CSS", "JavaScript", "GSAP", "Nuxt", "Spotify API"]
    },
    {
        name:"AT&T Annihlator Cup 2022‑2025",
        description:"Multipage event site with CMS, realtime leaderboards, and time-based content",
        image: annihilator,
        link:"https://attannihilatorcup.com/" ,
        techStack: ["HTML", "CSS", "JavaScript", "Nuxt", "Prismic (CMS)"]
    },
    {
        name:"MiracleGro Sweepstakes",
        description:"Single page sweepstakes site with custom slider, animations, and form validation",
        image: micracleGro,
        link:"https://sct-001-miracle-gro-escape-kit.still.14four.com/" ,
        techStack: ["HTML", "CSS", "JavaScript", "Nuxt","GSAP"]
    },
    {
        name:"Improv App",
        description:"A suggestion generator for the Blue Door Theatre using vanilla javascript",
        image:bdt,
        link:"https://bdt-improv.netlify.app/" ,
        git: "https://github.com/mwinser/Improv-Suggestion-App",
        personal: true,
        techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
        name:"Tumblr Clone",
        description:"A functional clone of Tumblr using React, Tailwind, Firebase Auth and Firestore.",
        image:bumblr,
        link:"https://bumblr.netlify.app/",
        git: "https://github.com/mwinser/tumblr-clone",
        personal: true,
        techStack: ["React", "Tailwind CSS", "Firebase (Auth & Firestore)"]
    },
    {
        name:"Improv Playlist Manager",
        description:"Gatsby project which creates game playlists for improv shows using Google Sheets as a headless CMS",
        image: playlist,
        link:"https://improv-playlist-manager.netlify.app/",
        git: "https://github.com/mwinser/improv-playlist-manager",
        personal: true,
        techStack: ["Gatsby", "React", "GraphQL", "Google Sheets API"]
    },
]

export default projectData
