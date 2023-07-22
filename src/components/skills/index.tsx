import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CardCarousel } from "./cardcarousel"
import questionSvg from "../../images/question.svg";

import "./skills.scss"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      skills: datoCmsSkillset {
        title
        skills {
          name
          image {
            fluid(imgixParams: { fit: "crop", w: "300", h: "300" }) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          level
          xp
        }
        helpText
      }
    }
  `)

  const { skills } = data

  const [showHelp, setShowHelp] = useState(false);

  const handleMouseEnter = () => {
    setShowHelp(true);
  };

  const handleMouseLeave = () => {
    setShowHelp(false);
  };

  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2>{skills.title}</h2>
        <CardCarousel>
          {skills.skills.map((skill: any, index: number) => (
            <div key={index} className="skill-card" tabIndex={0}>
              {skill.image ? <Img {...skill.image} /> : <p className="template">{"</>"}</p>}
              <div className="skill-details">
                <h3>{skill.name}</h3>
                <div className="detail">
                  <p className="level">Level:</p> {skill.level}
                </div>
                <div className="detail">
                  <p className="xp">XP:</p> {skill.xp} years
                  <img
                    src={questionSvg}
                    alt="Question Icon"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
            </div>
          ))}
        </CardCarousel>
        {showHelp && <div className="help-text">{skills.helpText}</div>}
      </div>
      <div className="lines horizontal">
        <p className="line horizontal" />
        <p className="line horizontal" />
        <p className="line horizontal" />
        <p className="line horizontal" />
        <p className="line horizontal" />
      </div>
    </div>
  )
}

export default Skills
