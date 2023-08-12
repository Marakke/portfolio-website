import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./experience.scss"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      experience: datoCmsExperience {
        education {
          title
          university
          programmes {
            name
            startYear
            endYear
          }
        }
        workExperience {
          title
          workPlaces {
            name
            startYear
            endYear
          }
        }
      }
    }
  `)

  const { experience } = data

  return (
    <div className="experience-container" id="experience" data-testid="experience-container">
      <div className="education-container">
        <h2>{experience.education.title}</h2>
        <div className="education-content">
          <h3 className="university">{experience.education.university}</h3>
          <div className="programmes">
            {experience.education.programmes.map(( programme: any ) => (
              <div className="programme" key={programme.name}>
                <p className="name">{programme.name}</p>
                <p className="years">{programme.startYear} {"->"} {programme.endYear}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="work-experience-container">
        <h2>{experience.workExperience.title}</h2>
        <div className="work-places">
          {experience.workExperience.workPlaces.map(( workPlace: any ) => (
            <div className="work-place" key={workPlace.name}>
              <h3 className="name">{workPlace.name}</h3>
              <p className="years">{workPlace.startYear} {"->"} {workPlace.endYear}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lines experience">
        <p className="line experience" />
        <p className="line experience" />
        <p className="line experience" />
        <p className="line experience" />
        <p className="line experience" />
      </div>
    </div>
  )
}

export default Experience
