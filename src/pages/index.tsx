import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

import Hero from "../components/hero"
import Intro from "../components/intro"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Banner from "../components/banner"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="app">
        <Hero />
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Banner />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Martti Grönholm</title>
