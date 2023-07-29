import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import linkSvg from "../../images/link.svg"

import "./footer.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footer: datoCmsFooter {
        accessibilityReportTitle
        accessibilityReport {
          url
        }
        sourceCodeTitle
        sourceCodeLink
      }
    }
  `)

  const { footer } = data

  return (
    <div className="footer-container" data-testid="footer-container">
      <a href={footer.accessibilityReport.url} target="_blank" className="accessibility-report">
        <img src={linkSvg} alt="Download Icon" />
        {footer.accessibilityReportTitle}
      </a>
      <a href={footer.sourceCodeLink} target="_blank" className="source-code">{footer.sourceCodeTitle}</a>
    </div>
  )
}

export default Footer
