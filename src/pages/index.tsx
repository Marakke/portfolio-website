import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Helmet } from "react-helmet";

import "./index.scss"

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Banner from "../components/banner"
import Contact from "../components/contact"
import Footer from "../components/footer"
import ScrollToTopButton from "../components/scrollToTopButton"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <meta
          name="description"
          content="I am a passionate web developer with a strong focus on front-end technologies. 
            Check out my portfolio to see my latest projects and skills!"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <div className="app">
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        {/* <Banner /> */}
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Martti Grönholm</title>
