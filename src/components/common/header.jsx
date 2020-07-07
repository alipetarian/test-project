import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Image from './image'

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  &:hover {
    color: #000000
  }

  & a {
    color: #999999;
    font-size: .9rem;
    margin-right: 1.3rem;
    text-decoration: none;
    
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'black',
      marginBottom: '1.45rem',
      maxHeight: '100px',
    }}
  >

    <div className="container-fluid">
      <div className="row">

        <div className="col">
          <div style={{
            marginBottom: '1.45rem',
            maxHeight: '100px',
            maxWidth: '100px',
          }}
          >
            <Image imgName="logo2.png" />
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center">

          <nav>
            <NavList>
              <li>
                <Link className="" activeClassName="text-primary" to="/">Home</Link>
              </li>
              <li>
                <Link className="" activeClassName="text-primary" to="/login">login</Link>
              </li>
              <li>
                <Link className="" activeClassName="text-primary" to="/logout">Logout</Link>
              </li>
              <li>
                <Link className="" activeClassName="text-primary" to="/profile">Profile</Link>
              </li>
            </NavList>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
