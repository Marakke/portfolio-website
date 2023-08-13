import React from "react"

import "./projectCard.scss"

const ProjectCard = ({ project, cardIndex }: { project: any; cardIndex: number }) => {
  const handleProjectClick = (project: any) => {
    window.open(project.link, "_blank");
  }

  return (
    <button
      key={project.name}
      className={`project-card ${!project.link ? 'no-link' : ''}`}
      style={{ backgroundColor: project.backgroundColor.hex, color: project.textColor.hex }}
      onClick={() => handleProjectClick(project)}
    >
      <p className="client">{project.client}</p>
      <p className="name">{project.name}</p>
      <div className="tags">
        <div className={`tags-header card-${cardIndex}`}>
          {project.tagHeader.map((tag: any, index: number) => (
            <p className={`tag-header card-${cardIndex}`} key={index}>{tag.name}</p>
          ))}
        </div>
        <div className={`tags-footer card-${cardIndex}`}>
          {project.tagFooter.map((tag: any, index: number) => (
            <p className={`tag-footer card-${cardIndex}`} key={index}>{tag.name}</p>
          ))}
        </div>
      </div>
    </button>
  )
}

export default ProjectCard
