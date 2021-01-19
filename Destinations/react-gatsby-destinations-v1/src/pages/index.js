import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Hero from "../components/Hero/Hero"
import InfoSection from "../components/InfoSection/InfoSection"
import Testimonials from "../components/Testimonials/Testimonials"
import Stats from "../components/Stats/Stats"
import Email from "../components/Email/Email"


const IndexPage = () => (
  <Layout>
  <GlobalStyle/>
    <SEO title="Home" />
    <Hero/>
    <InfoSection heading = "Our Favorite Destinations"/>
    <Testimonials/>
    <Stats/>
    <Email/>
  </Layout>
)

export default IndexPage
