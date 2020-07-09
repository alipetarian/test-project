import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/common/image'
import Home from '../components/home'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
