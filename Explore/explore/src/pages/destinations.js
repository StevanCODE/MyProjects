import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"
import Destinations from "../components/Destinations"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Destinations/>
  </Layout>
)

export default IndexPage
