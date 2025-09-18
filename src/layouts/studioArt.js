import React, { useMemo } from 'react'
import ReactGA from 'react-ga4'
import artData from '../artData'

function StudioArt(){
  ReactGA.send({ hitType: "pageview", page: "/studio-art"});

  const sortedArt = useMemo(() => {
    return [...artData].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [])

  return (
    <section className="projects-section studio-art">
      <h1 className="screen-reader-text">Studio Art</h1>
      {/* <div className="projects-intro">
        <h2>Studio Art</h2>
        <p>A selection of personal art studies and illustrations.</p>
      </div> */}

      <div className="project-grid">
        {sortedArt.map((piece, index) => (
          <div 
            key={`${piece.title}-${index}`} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-img-container">
              {piece.image && <img src={piece.image} alt={`${piece.title}`} />}
            </div>
            <div className="project-card-content">
              <h3>{piece.title}</h3>
              <p>{piece.description}</p>
              <time dateTime={piece.date} style={{display:'none'}}>{piece.date}</time>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StudioArt 