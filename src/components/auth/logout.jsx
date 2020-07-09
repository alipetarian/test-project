import React from 'react'
import {
  Container, Col, Row, Button,
} from 'react-bootstrap'
import { navigate } from '@reach/router'
import swal from 'sweetalert'
import firebaseGatsby from 'gatsby-plugin-firebase'
import {
  setUser, getUser, isLoggedIn, logout,
} from '../../utils/auth'

const Logout = () => {
  const handleLogout = () => {
    logout(firebaseGatsby)
    console.log('logout ')
    setUser({})
    navigate('/login')
  }
  React.useEffect(() => {
    swal({
      title: 'Are you sure?',
      text: 'You will be loged out',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          handleLogout()
          swal('You have successfully logged out', {
            icon: 'success',
          })
        } else {
        }
      })
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" type="submit" size="lg" onClick={() => handleLogout()}>
            LOGOUT
          </Button>
        </Col>

      </Row>
    </Container>
  )
}

export default Logout
