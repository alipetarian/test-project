import React, { useState } from 'react'
import {
  Container,
  Col,
  Row,
  Button,
  FormLabel,
  FormGroup,
  FormText,
} from 'react-bootstrap'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebaseGatsby from 'gatsby-plugin-firebase'
import { navigate } from '@reach/router'
import swal from 'sweetalert'
import styled from 'styled-components'
import {
  setUser, isLoggedIn, isBrowser, getUser,
} from '../../utils/auth'

const LoginContainer = styled.div`
  min-height: auto;
  width : auto;
  background-color: ${({ theme }) => theme.colors.lightGray} !important;
  padding: 5% 5%;
  border-radius: 20px;

`
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
})

const Login = () => {
  // const [firebase, setFirebase] = useState()
  const [state, setState] = React.useState({ email: '', password: '' })
  React.useEffect(() => {
    if (Object.keys(getUser()).length > 0) {
      navigate('/profile')
    }
  }, [])

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user)
          navigate('/profile')
        },
      },
    }
  }

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3} />
        <Col md={6}>
          <LoginContainer>
            <h1 className="text-center">Login</h1>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log('values ', values)
                firebaseGatsby.auth().signInWithEmailAndPassword(values.email, values.password).then(() => {
                  console.log('success')
                  setUser(values)
                  swal({
                    title: 'Success',
                    text: 'You\'ve successfully logged in',
                    icon: 'success',
                    dangerMode: false,
                  })
                  navigate('/profile')
                }).catch((err) => {
                  swal({
                    title: 'Error',
                    text: 'User not found',
                    icon: 'error',
                    dangerMode: true,
                  })
                  console.log('err ', err)
                })
              }}
            >
              {({
                errors, touched, onSubmit, values: { email, password }, isSubmitting, isValid,
              }) => (

                <Form>

                  <FormGroup controlId="exampleForm.ControlInput1">
                    <FormLabel>Email address</FormLabel>
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                    />
                  </FormGroup>
                  {errors.email && touched.email ? (
                    <FormText className="text-danger">{errors.email}</FormText>
                  ) : null}

                  <FormGroup controlId="formBasicPassword" className="mt-2">
                    <FormLabel>Password</FormLabel>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                  </FormGroup>
                  {errors.password && touched.password ? (
                    <FormText className="text-danger">{errors.password}</FormText>
                  ) : null}

                  { isBrowser() && <StyledFirebaseAuth uiConfig={getUiConfig(firebaseGatsby.auth)} firebaseAuth={firebaseGatsby.auth()} />}

                  <Button variant="primary" type="submit" size="lg">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </LoginContainer>

        </Col>

        <Col md={3} />
      </Row>
    </Container>

  )
}

export default Login
