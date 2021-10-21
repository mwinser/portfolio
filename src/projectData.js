import petals from "./petals-site.png"
import castaways from "./castaways-site.png"
import bumblr from "./bumblr.png"
import bdt from "./bdt-site.webp"
import slider from "./Price-Slider.gif"
import blogr from "./blogr.png"
import accordion from "./accordion.png"
import playlist from "./playlist.png"
import scroll from "./scroll.png"

const projectData = [
    {
        name:"Tumblr Clone",
        description:"A functional clone of Tumblr using React, Tailwind, Firebase Auth and Firestore.",
        image:bumblr,
        link:"https://bumblr.netlify.app/",
        git: "https://github.com/mwinser/tumblr-clone"
    },
    {
        name:"Ecommerce Site",
        description:"Project using React Router to create a multipage responsive site with a cart and local storage",
        image:petals,
        link:"https://petal-site.netlify.com" ,
        git: "https://github.com/mwinser/ecommerce-site"
    },
    {
        name:"Castaways Game",
        description:"A Survivor-style game using useReducer to manage complicated state objects",
        image:castaways,
        link:"https://castaways.netlify.com" ,
        git: "https://github.com/mwinser/castaways"
    },
    {
        name:"Improv App",
        description:"A suggestion generator for the Blue Door Theatre using vanilla javascript",
        image:bdt,
        link:"https://bdt-improv.netlify.app/" ,
        git: "https://github.com/mwinser/Improv-Suggestion-App"
    },
    {
        name:"Accordion Design",
        description:"Design project featuring accordion-style image menu with expanding panels",
        image: accordion,
        link:"https://accordion-articles.netlify.app/",
        git: "https://github.com/mwinser/AccordionArticles",
        wip: true, 
    },
    {
        name:"Improv Playlist Manager",
        description:"Gatsby project for creating game playlists for improv shows using Google Sheets as a headless CMS",
        image: playlist,
        link:"https://improv-playlist-manager.netlify.app/",
        git: "https://github.com/mwinser/improv-playlist-manager",
        wip: true, 
    },
    {
        name:"Scrolling Effects",
        description:"Project to display a variety of scroll effects and animations",
        image: scroll,
        link:"https://scroll-animatrix.netlify.app/",
        git: "https://github.com/mwinser/ScrollAnimations",
        wip: true, 
    },
    {
        name:"Pricing Slider",
        description:"Frontend Mentor project converting design to code, with a focus on cross-browser compatibility",
        image: slider,
        link:"https://slider-prices.netlify.app/",
        git: "https://github.com/mwinser/interactive-pricing-component" 
    },
    {
        name:"Landing Page",
        description:"Frontend Mentor project converting design to code, with a focus on responsiveness using JS and SASS",
        image: blogr,
        link:"https://blogr-landr.netlify.app/",
        git: "https://github.com/mwinser/blogr-landingpage-challenge" 
    },
    {
        name:"Data Visualization",
        description:"freeCodeCamp data visualization project using D3",
        image:"https://assets.codepen.io/5166947/internal/screenshots/pens/XWKOxpv.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1605745655&width=960",
        link:"https://codepen.io/winserm/full/XWKOxpv",
        codepen:"https://codepen.io/winserm/pen/XWKOxpv" 
    }
]

export default projectData
