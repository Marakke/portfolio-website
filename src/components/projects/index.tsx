import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./projectCard"
import githubSvg from "../../images/github.svg"

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
          clientDescription
          name
          backgroundColor {
            hex
          }
          textColor {
            hex
          }
          tagHeader {
            name
          }
          tagFooter {
            name
          }
        }
      }
    }
  `)

  const { projects } = data

  const handleButtonClick = () => {
    window.open(projects.buttonLink, "_blank");
  }

  return (
    <div className="projects-container" id="projects" data-testid="projects-container">
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
          <div className="projects-left">
            <ProjectCard project={projects.projects[0]} cardIndex={1} />
          </div>
          <div className="projects-right">
            <div className="projects-top">
              <ProjectCard project={projects.projects[1]} cardIndex={2} />
            </div>
            <div className="projects-bottom">
              {projects.projects.map((project: any, index: number) => (
                index >= 2 && <ProjectCard key={index} project={project} cardIndex={index+1} />
              ))}
            </div>
          </div>
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
