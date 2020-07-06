import React from 'react'
import { AuthService, useAuth } from 'gatsby-theme-auth0'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'

const Account = () => {
  const { isLoading, isLoggedIn, profile } = useAuth()

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>ACCOUNT</h1>
      <div>
        {profile && (
        <p>
          Hello
          {profile.name}
        </p>
        )}
        {isLoggedIn ? (
          // eslint-disable-next-line react/button-has-type
          <button className="btn btn-primary" onClick={AuthService.logout}>Logout</button>
        ) : (
          // eslint-disable-next-line react/button-has-type
          <button className="btn btn-primary" onClick={AuthService.login}>Login</button>
        )}
      </div>

    </Layout>
  )
}

export default Account
