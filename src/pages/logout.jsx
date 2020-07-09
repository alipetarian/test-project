import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Logout from '../components/auth/logout'

const LogoutPage = () => (
  <Layout>
    <SEO title="Logout" />
    <Logout />
  </Layout>
)

export default LogoutPage
