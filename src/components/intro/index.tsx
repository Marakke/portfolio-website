import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./intro.scss"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      intro: datoCmsIntro {
        title
        descriptionTitle
        descriptionBody
        descriptionFooter
        image {
          fluid(imgixParams: { fit: "crop", w: "300", h: "300" }) {
            ...GatsbyDatoCmsFluid
          }
          alt
        }
      }
    }
  `)

  const { intro } = data

  return (
    <div className="introContainer">
      <h1 className="title">{intro.title}</h1>
      <div className="introContent">
        <Img {...intro.image} className="image" />
        <div>
          <p className="description">{intro.descriptionTitle}</p>
          <p className="description">{intro.descriptionBody}</p>
          <p className="description">{intro.descriptionFooter}</p>
        </div>
      </div>
      <div className="lines">
        <p className="line" />
        <p className="line" />
        <p className="line" />
        <p className="line" />
        <p className="line" />
      </div>
    </div>
  )
}

export default Intro
