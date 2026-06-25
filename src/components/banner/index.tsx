import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./banner.scss"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCms {
        banner {
          text
          audio {
            url
          }
          buttons {
            logo {
              url(imgixParams: { fit: crop, w: "300", h: "300" })
              alt
            }
            name
            link
          }
        }
      }
    }
  `)

  const { banner } = data.datoCms

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
            <img src={button.logo.url} alt={button.logo.alt} className="logo" />
            <p className="banner-button-text">{button.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Banner
