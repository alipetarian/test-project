import React from 'react'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Login from '../components/auth/login'

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <Login />
  </Layout>
)

export default LoginPage
