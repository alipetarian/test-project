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
  Formik, Form, Field,
} from 'formik'
import * as Yup from 'yup'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebaseGatsby from 'gatsby-plugin-firebase'
import { navigate } from '@reach/router'
import { setUser, isLoggedIn, isBrowser } from '../../utils/auth'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
})

const Login = () => {
  // const [firebase, setFirebase] = useState()
  React.useEffect(() => {
    if (isLoggedIn()) {
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
      <Row>
        <Col>
          <h1 className="text-center">Login</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
            // same shape as initial values
              console.log(values)
              setSubmitting(false)
            }}
          >
            {({ errors, touched, onSubmit }) => (
              <Form onSubmit={onSubmit}>
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
        { isBrowser() && <StyledFirebaseAuth uiConfig={getUiConfig(firebaseGatsby.auth)} firebaseAuth={firebaseGatsby.auth()} />}

      </Row>
    </Container>

  )
}

export default Login
