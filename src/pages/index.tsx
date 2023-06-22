import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "./index.scss"

import Hero from "../components/hero"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Martti Grönholm</title>
