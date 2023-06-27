import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

import Hero from "../components/hero"
import Intro from "../components/intro"
import Skills from "../components/skills"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
      <div className="app">
        <Intro />
        <Skills />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Martti Grönholm</title>
