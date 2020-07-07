import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'
import firebaseGatsby from 'gatsby-plugin-firebase'
import { setUser, getUser, logout } from '../../utils/auth'

import Image from './image'
import Logo from '../../images/logo2.png'

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
  <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <div style={{
        height: '100px', width: '100px',
      }}
      >
        <Image imgName="logo4.png" />
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <NavList>
            <li>
              <Link to="/" activeClassName="text-white">Home</Link>
            </li>
            <li><Link to="/login" activeClassName="text-white">Login</Link></li>
            <li><Link to="/signup" activeClassName="text-white">Sigup</Link></li>
            <li><Link onClick={() => logout(firebaseGatsby)} to="/logout" activeClassName="text-white">Logout</Link></li>
            <li><Link to="/profile" activeClassName="text-white">Profile</Link></li>
          </NavList>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
