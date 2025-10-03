import pepsi from "./assets/images/pepsi.gif"
import annihilator from "./assets/images/annihilator.png"
import bumblr from "./assets/images/bumblr.png"
// import bdt from "./assets/images/bdt-site.webp"
import fourteenfour from "./assets/images/14four.jpeg"
import affinius from "./assets/images/affinius.png"
// import playlist from "./assets/images/playlist.png"
import albert from "./assets/images/albert-headshot.avif"
import adamscott from "./assets/images/adamscott.png"
import wnba from "./assets/images/live.png"
import calbee from "./assets/images/calbee.png"
import pbr from "./assets/images/photochute.webp"
import realtime from "./assets/images/realtime.gif"

const projectData = [
    {
        name:"WNBA Shootout Shot Tracker",
        description:"In-person fan experience using AI vision to automate scoring in a head-to-head shootout.",
        image: wnba,
        category: "Client Project",
        techStack: ["Javascript", "Mediapipe", "Roboflow", "Webhooks", "AI"]
    },
    {
        name:"14Four Agency Site",
        description:"Multipage agency site with CMS, and complex GSAP animations",
        image: fourteenfour,
        link:"https://www.14four.com/",
        category: "Client Project",
        techStack: ["HTML", "SCSS", "JavaScript", "GSAP", "Prismic (CMS)"]
    },
    {
        name:"Affinius Capital (USAA Real Estate)",
        description:"Multipage investment company site with fully custom component-based Wordpress CMS.",
        image: affinius,
        link:"https://affiniuscapital.com/",
        category: "Client Project",
        techStack: ["HTML", "SCSS", "JavaScript", "PHP", "WordPress (Custom Theme)"]
    },
    {
        name:"Philips Norelco Find Your Look",
        description:"Personal project successfully pitched. AI-powered facial hair preview tool.",
        image: adamscott,
        category: "Client Project",
        techStack: ["HTML", "SCSS", "JavaScript", "Nuxt", "Mediapipe", "Stable Diffusion", "AI"]
    },
    {
        name:"Progressive PBR Photobooth",
        description:"AI Photobooth during Professional Bull Riding tournaments, wherein fans insert themselves into a printable bull-themed marketing images. Created full technical setup, including Mac mini, iPad, and Photoprinter.",
        image: pbr,
        category: "Client Project",
        techStack: ["HTML", "SCSS", "JavaScript", "Python", "Node.js","Nuxt", "Facefusion", "Mediapipe", "AWS", "AI"]
    },
    {
        name:"Better with Pepsi",
        description:"Side scrolling sweepstakes site with animations, hotspots and Spotify integration ",
        image: pepsi,
        link:"https://mot-062-better-with-pepsi.still.14four.com/" ,
        category: "Client Project",
        techStack: ["HTML", "SCSS", "JavaScript", "GSAP", "Nuxt", "Spotify API"]
    },
    {
        name:"AT&T Annihlator Cup 2022‑2025",
        description:"Multipage event site with CMS, realtime leaderboards, and time-based content",
        image: annihilator,
        link:"https://attannihilatorcup.com/" ,
        category: "Client Project",
        techStack: ["HTML", "SCSS", "JavaScript", "Nuxt", "Prismic (CMS)", "Google Sheets API"]
    },
    {
        name:"Calbee America",
        description:"Multipage site for international food company with CMS, sliders, product pages.",
        image: calbee,
        link:"https://calbeeamerica.com/" ,
        category: "Client Project",
        techStack: ["HTML", "SCSS", "JavaScript", "Nuxt", "Prismic (CMS)"]
    },
    {
        name:"Albert, the Scoping Agent",
        description:"Emailable agent that generates ready-to-use scope docs based on relevant project data, client data and related scope data in Drive. Output includes timelines, costs, questions, recommendations and references used",
        image: albert,
        // link:"https://sct-001-miracle-gro-escape-kit.still.14four.com/" ,
        category: "Internal Project",
        techStack: ["Google Workspace", "AppScript", "Gemini API", "AI"]
    },
    {
        name:"Realtime AI Article",
        description:"Article about AI, edited and rewritten in realtime based on newly published news about AI. Simulated three AI 'agents' to simultaneously edit the article on-screen.",
        image: realtime,
        // link:"https://sct-001-miracle-gro-escape-kit.still.14four.com/" ,
        category: "Internal Project",
        techStack: ["HTML", "SCSS", "JavaScript", "Nuxt", "AWS", "AI", "Cron Jobs", "Lambda Functions"]
    },
    // {
    //     name:"Improv Suggestion App",
    //     description:"An improv suggestion generator for the Blue Door Theatre using vanilla javascript",
    //     image:bdt,
    //     link:"https://bdt-improv.netlify.app/" ,
    //     git: "https://github.com/mwinser/Improv-Suggestion-App",
    //     personal: true,
    //     category: "Personal Project",
    //     techStack: ["HTML", "CSS", "JavaScript"]
    // },
    {
        name:"Tumblr Clone",
        description:"A functional clone of Tumblr including authentication, posting (text and images), comments, following, and liking.",
        image:bumblr,
        link:"https://bumblr.netlify.app/",
        git: "https://github.com/mwinser/tumblr-clone",
        personal: true,
        category: "Personal Project",
        techStack: ["HTML", "JavaScript", "React", "Tailwind CSS", "Firebase"]
    },
    // {
    //     name:"Improv Playlist Manager",
    //     description:"Gatsby project which creates game playlists for improv shows using Google Sheets as a headless CMS",
    //     image: playlist,
    //     link:"https://improv-playlist-manager.netlify.app/",
    //     git: "https://github.com/mwinser/improv-playlist-manager",
    //     personal: true,
    //     category: "Personal Project",
    //     techStack: ["Gatsby", "React", "Google Sheets API"]
    // },
]

export default projectData
