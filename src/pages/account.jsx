import React from 'react'
import { navigate } from 'gatsby'
import firebaseGatsby from 'gatsby-plugin-firebase'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'

const Account = () => {
  console.log('acc ')
  return (

    <Layout>
      <SEO title="Account" />
      <h1>ACCOUNT</h1>

    </Layout>

  )
}

export default Account
