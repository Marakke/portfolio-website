import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Hero from "../components/hero"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Hello world!</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Martti Grönholm</title>
