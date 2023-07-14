import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import emailSvg from "../../images/email.svg";
import linkedinSvg from "../../images/linkedin.svg";
import githubSvg from "../../images/github.svg";

import "./contact.scss"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contact: datoCmsContact {
        titleWhite
        titleBlack
        descriptionHeader
        descriptionFooter
        highlightedWords
        email
        linkedin
        github
      }
    }
  `)

  const { contact } = data

  const highlightedWords = contact.highlightedWords.split(", ");

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2 className="title-white">{contact.titleWhite}</h2>
        <h2 className="title-black">{contact.titleBlack}</h2>
      </div>
      <div className="contact-content">
        <div className="contact-links">
          <div className="contact-link">
            <img src={emailSvg} alt="Email Icon" />
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
          </div>
          <div className="contact-link">
            <img src={linkedinSvg} alt="LinkedIn Icon" />
            <a href={"https://" + contact.linkedin} className="link">
              {contact.linkedin}
            </a>
          </div>
          <div className="contact-link">
            <img src={githubSvg} alt="GitHub Icon" />
            <a href={"https://" + contact.github} className="link">
              {contact.github}
            </a>
          </div>
        </div>
        <div className="contact-description">
          <p className="description">{contact.descriptionHeader}</p>
          <p className="description">
            {contact.descriptionFooter.split(" ").map((word: string, index: number) =>
              highlightedWords.includes(word) ? (
                <span key={index} style={{ color: "black", fontWeight: 700 }}>
                  {word}{" "}
                </span>
              ) : (
                `${word} `
              )
            )}
          </p>
        </div>
      </div>
      <div className="lines contact">
        <p className="line" />
        <p className="line" />
        <p className="line" />
        <p className="line" />
        <p className="line" />
      </div>
    </div>
  )
}

export default Contact
