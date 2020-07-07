import React from 'react'
import {
  Container, Col, Row, Button,
} from 'react-bootstrap'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import firebaseGatsby from 'gatsby-plugin-firebase'
import { isLoggedIn } from '../../utils/auth'

const Home = () => {
  React.useEffect(() => {
    if (isLoggedIn()) {
      navigate('/profile')
    }
  }, [])
  return (

    <Container>
      <h1>
        HELLO,
      </h1>
      <Row>
        <Col>
          <Link to="/login">
            <Button variant="primary" size="lg" type="submit">
              Login
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to="/signup">
            <Button variant="primary" size="lg" type="submit">
              SIGNUP
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
export default Home
