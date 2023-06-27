import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./hero.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: datoCmsHero {
        title1
        title2
        title3
      }
    }
  `)

  const { hero } = data

  return (
    <div className="hero-container">
      <div className="row">
        <p className="text">{"<>"}</p><p className="tag">{"</><></><></><></><></><></><></><></><></>"}</p>
      </div>
      <div className="row">
        <p className="tag2">{"<>"}</p><h1 className="text">{hero.title1}</h1><p className="tag2">{"</><></><></><></><></><></><></>"}</p>
        </div>
      <div className="row">
        <p className="tag3">{"<>"}</p><h1 className="text">{hero.title2}</h1><p className="tag3">{"</><></><></><></><></><></>"}</p>
      </div>
      <div className="row">
        <p className="tag4">{"<>"}</p><h1 className="text">{hero.title3}</h1><p className="tag4">{"</><></><></><></><></><></>"}</p>
      </div>
      <div className="row">
      <p className="text">{"</>"}</p><p className="tag5">{"</><></><></><></><></><></><></><></><></><></>"}</p>
      </div>
    </div>
  )
}

export default Hero
