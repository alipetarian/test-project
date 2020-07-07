import React from 'react'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Profile from '../components/auth/profile'

const ProfilePage = () => (
  <Layout>
    <SEO title="Profile" />
    <h1>Profile</h1>
    <Profile />
  </Layout>
)

export default ProfilePage
