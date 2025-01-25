import React, { useState } from "react"
import arrowUpSvg from "../../images/arrowUp.svg"

import "./projectCard.scss"

const ProjectCard = ({ project, cardNumber }: { project: any; cardNumber: number }) => {
  const [isExpanded, setIsExpanded] = useState(cardNumber === 1)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      key={project.name}
      className={`project-card ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <div className="card-header" onClick={toggleExpand}>
        <p className="client">{project.clientDescription}</p>
        <button className={`toggle-button ${isExpanded ? "expanded" : "collapsed"}`} onClick={toggleExpand}>
          <img src={arrowUpSvg} alt="Scroll to top" />
        </button>
      </div>
      <p className="name">{project.name}</p>
      {isExpanded && (
        <div className="card-content">
          <div className="tags">
            {project.tags.map((tag: any, index: number) => (
              <span className="tag" key={index}>{tag.name}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
