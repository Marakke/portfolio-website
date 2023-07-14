import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import githubSvg from "../../images/github.svg";

import "./projects.scss"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: datoCmsProjectList {
        title
        descriptionTop
        descriptionBottom
        buttonText
        buttonLink
        projects {
          client
          name
          link
        }
      }
    }
  `)

  const { projects } = data

  const handleButtonClick = () => {
    window.open(projects.buttonLink, "_blank");
  }

  const handleProjectClick = (project: any) => {
    window.open(project.link, "_blank");
  }

  return (
    <div className="projects-container">
      <h2>{projects.title}</h2>
      <div className="projects-content">
        <div className="content-left">
          <div>
            <p className="description">{projects.descriptionTop}</p>
            <p className="description">{projects.descriptionBottom}</p>
          </div>
          <button className="buttonDesktop" onClick={handleButtonClick}>
            <img src={githubSvg} alt="GitHub Icon" />
            {projects.buttonText}
          </button>
        </div>
        <div className="content-right">
          {projects.projects.map(( project: any ) => (
            <button
              key={project.name}
              className={`project ${!project.link ? 'no-link' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              <p className="client">{project.client}</p>
              <p className="name">{project.name}</p>
            </button>
          ))}
        </div>
        <button className="buttonMobile" onClick={handleButtonClick}>
          <img src={githubSvg} alt="GitHub Icon" />
          {projects.buttonText}
        </button>
      </div>
      <div className="lines horizontal projects">
        <p className="line horizontal" />
        <p className="line horizontal" />
        <p className="line horizontal" />
        <p className="line horizontal" />
        <p className="line horizontal" />
      </div>
    </div>
  )
}

export default Projects
