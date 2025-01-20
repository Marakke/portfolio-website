import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./intro.scss"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      intro: datoCmsIntro {
        title
        subtitle
        subtitleSecondary
        descriptionTitle
        descriptionBody
        descriptionSubbody
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
    <div className="intro-container" id="introduction" data-testid="intro-container">
      <div className="intro-titles">
        <h2>{intro.title}</h2>
        <span className="intro-title-divider">{" - "}</span>
        <div className="intro-subtitles">
          <h3 className="intro-subtitle">{intro.subtitle}</h3>
          <h3 className="intro-subtitleSecondary">{intro.subtitleSecondary}</h3>
        </div>
      </div>
      <div className="intro-content">
        <Img {...intro.image} className="image" />
        <div>
          <p className="description">{intro.descriptionTitle}</p>
          <p className="description">{intro.descriptionBody}</p>
          <p className="description">{intro.descriptionSubbody}</p>
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
