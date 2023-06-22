import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./hero.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: datoCmsHero {
        headerText
        title
        description
      }
    }
  `)

  const { hero } = data

  return (
    <div>
      <h2 className="header-text">{hero.headerText}</h2>
      <h1 className="title">{hero.title}</h1>
      <p className="description">{hero.description}</p>
    </div>
  )
}

export default Hero
