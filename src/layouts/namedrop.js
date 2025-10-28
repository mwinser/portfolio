import React, { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"


function Namedrop (){
    const containerRef = useRef(null)

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        const letters = gsap.utils.toArray(".letter")
        gsap.from(letters, {
          x: -40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: { each: 0.12, from: "end" }
        })
      }, containerRef)
      return () => ctx.revert()
    }, [])

    return( 
      <div className="namedrop" ref={containerRef}>
        <div className="letter">A</div>
        <div className="letter">L</div>
        <div className="letter">D</div>
        <div className="letter">E</div>
        <div className="letter">N</div>
      </div>
    )
  }

export default Namedrop