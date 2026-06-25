import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CardCarousel } from "./cardcarousel"
import questionSvg from "../../images/question.svg";

import "./skills.scss"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCms {
        skillset {
          title
          skills {
            name
            image {
              url(imgixParams: { fit: crop, w: "300", h: "300" })
              alt
            }
            level
            xp
          }
          helpText
        }
      }
    }
  `)

  const { skillset } = data.datoCms

  const [showHelp, setShowHelp] = useState(false);

  const handleMouseEnter = () => {
    setShowHelp(true);
  };

  const handleMouseLeave = () => {
    setShowHelp(false);
  };

  return (
    <div className="skills-container" id="skills" data-testid="skills-container">
      <div className="skills-content">
        <h2>{skillset.title}</h2>
        <CardCarousel>
          {skillset.skills.map((skill: any, index: number) => (
            <div key={index} className="skill-card" tabIndex={0}>
              {skill.image ? <img src={skill.image.url} alt={skill.image.alt} /> : <p className="template">{"</>"}</p>}
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
        {showHelp && <div className="help-text">{skillset.helpText}</div>}
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
