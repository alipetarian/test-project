import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'
import {
  getUser,
} from '../../utils/auth'
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

const Header = ({ siteTitle }) => {
  const [state, setState] = React.useState(false)
  const user = getUser()
  const size = Object.keys(user).length

  React.useEffect(() => {
    console.log('getUser ', getUser())
    if (size > 0) {
      setState(true)
    }
  }, [])

  return (
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
              { !state && (
              <>
                <li><Link to="/login" activeClassName="text-white">Login</Link></li>
                <li><Link to="/signup" activeClassName="text-white">Signup</Link></li>
              </>
              )}

              {
              state
              && (
              <>
                <li><Link to="/profile" activeClassName="text-white">Profile</Link></li>
                <li><Link to="/logout" activeClassName="text-white">Logout</Link></li>
              </>
              )
            }
            </NavList>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
