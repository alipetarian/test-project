import React from 'react'
import {
  Container, Col, Row, Button,
} from 'react-bootstrap'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import firebaseGatsby from 'gatsby-plugin-firebase'
import styled from 'styled-components'
import { isLoggedIn } from '../../utils/auth'
import Image from '../common/image'

const HomeContainer = styled.div`
  min-height: auto;
  width : auto;
  background-color: ${({ theme }) => theme.colors.lightGray} !important;
  padding: 5% 5%;
  border-radius: 20px;

`
const Home = () =>
  // React.useEffect(() => {
  //   if (isLoggedIn()) {
  //     navigate('/profile')
  //   }
  // }, [])
  (
    <Container>
      <Row className="mt-2">
        <Col md={3} />
        <HomeContainer>
          <Col className="d-flex align-items-center justify-content-center">
            <div
              style={{
                height: 'auto', width: '100px',
              }}
            >
              <Image imgName="logo1.jpg" />
            </div>
          </Col>
          <Col className="text-center mt-3">
            <h1>
              WELCOME TO HOME PAGE !
            </h1>
          </Col>
          <Row className="mt-5">
            <h5 className="d-flex align-items-center justify-content-center mx-2">
              Already have an account?
            </h5>
            <Link to="/login">
              <Button variant="primary" size="lg" type="submit">
                Login
              </Button>
            </Link>
          </Row>
          <Row className="mt-2">
            <h5 className="d-flex align-items-center justify-content-center mx-2">
              Don&apos;t have an account yet?
            </h5>
            <Link to="/signup">
              <Button variant="primary" size="lg" type="submit">
                SIGNUP
              </Button>
            </Link>
          </Row>
        </HomeContainer>
        <Col md={3} />
      </Row>
    </Container>
  )

export default Home

// https://codesandbox.io/s/github/marcomelilli/gatsby-firebase-simple-auth?file=/src/components/Status/index.jsx
