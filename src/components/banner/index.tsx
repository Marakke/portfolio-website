import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./banner.scss"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      banner: datoCmsBanner {
        text
        audio {
          url
        }
        buttons {
          logo {
            fluid(imgixParams: { fit: "crop", w: "300", h: "300" }) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          name
          link
        }        
      }
    }
  `)

  const { banner } = data

  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <div className="banner-container" data-testid="banner-container">
      <audio src={banner.audio.url} controls={true} controlsList="nodownload noplaybackrate" />
      <h2 className="banner-text">{banner.text}</h2>
      <div className="banner-buttons">
        {banner.buttons.map(( button: any ) => (
          <button
            key={button.name}
            className="banner-button"
            onClick={() => handleButtonClick(button.link)}
          >
            <Img {...button.logo} className="logo" />
            <p className="banner-button-text">{button.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Banner
