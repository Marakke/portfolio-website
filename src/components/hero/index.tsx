import React from "react"

import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero-container">
      {['', 2, 3, 4, 5].map((row) => (
        <div key={`row${row}`} className={`row${row}`}>{}</div>
      ))}
    </div>
  )
}

export default Hero
