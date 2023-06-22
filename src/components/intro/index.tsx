import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./intro.scss"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      intro: datoCmsIntro {
        title
        description
      }
    }
  `)

  const { intro } = data

  return (
    <div className="introContainer">
      <h1 className="title">{intro.title}</h1>
      <p className="description">{intro.description}</p>
    </div>
  )
}

export default Intro
