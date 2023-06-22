import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

import Hero from "../components/hero"
import Intro from "../components/intro"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
      <div className="app">
        <Intro />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Martti Grönholm</title>
