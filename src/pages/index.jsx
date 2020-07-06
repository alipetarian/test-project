import React from 'react'
import { Link } from 'gatsby'
// import BlankTemplate from '../components/common/layout/blank-temp'
import Image from '../components/common/image'
import Home from '../components/home'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image imgName="person-writing.jpg" />
    </div>
    <Link to="/styled">Go to page 2</Link>
  </Layout>
)

export default IndexPage
