import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./navbar.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      navbar: datoCmsNavbar {
        items {
          name
        }
      }
    }
  `)

  const { navbar } = data

  return (
    <div className="navbar-container" data-testid="navbar-container">
      {navbar.items.map((item: any, index: number) => (
        <a key={index} href={`#${item.name.toLowerCase()}`} className="navbar-item">
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default Navbar
