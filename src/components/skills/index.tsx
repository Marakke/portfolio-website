import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CardCarousel } from "./cardcarousel"

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
      }
    }
  `)

  const { skills } = data

  return (
    <div className="skills-container">
      <h2>{skills.title}</h2>
        <CardCarousel>
        {skills.skills.map((skill: any, index: number) => (
          <div
            key={index}
            className="skill-card"
          >
            {skill.image ? <Img {...skill.image} /> : <p className="template">{"</>"}</p>}
            <div className="skill-details">
              <h3>{skill.name}</h3>
              <p className="detail"><p className="level">Level:</p> {skill.level}</p>
              <p className="detail"><p className="xp">XP:</p> {skill.xp} years</p>
            </div>
          </div>
        ))}
        </CardCarousel>
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

export default Skills
