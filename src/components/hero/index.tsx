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
    <div>
      <p className="tag">{"<></><></><></><></><></><></><></><></>"}</p>
      <p className="tag2">{"<></><></><></><></><></><></><></><></>"}</p>
      <p className="text">{hero.heroText}</p>
      <p className="tag4">{"<></><></><></><></><></><></><></><></>"}</p>
      <p className="tag5">{"<></><></><></><></><></><></><></><></>"}</p>
    </div>
  )
}

export default Hero
