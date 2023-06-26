import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./hero.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: datoCmsHero {
        heroText
      }
    }
  `)

  const { hero } = data

  return (
    <div className="heroContainer">
      <p className="tag">{"<></><></><></><></><></><></><></><></>"}</p>
      <p className="tag2">{"<></><></><></><></><></><></><></><></>"}</p>
      <h1 className="text">{hero.heroText}</h1>
      <p className="tag4">{"<></><></><></><></><></><></><></><></>"}</p>
      <p className="tag5">{"<></><></><></><></><></><></><></><></>"}</p>
    </div>
  )
}

export default Hero
