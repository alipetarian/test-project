import React from 'react'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Signup from '../components/auth/signup'

const SignupPage = () => (
  <Layout>
    <SEO title="Signup" />
    <Signup />
  </Layout>
)

export default SignupPage
