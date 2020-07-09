import React from 'react'
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
import firebaseGatsby from 'gatsby-plugin-firebase'
import { navigate } from '@reach/router'
import swal from 'sweetalert'
import styled from 'styled-components'
import {
  setUser, getUser,
} from '../../utils/auth'

const SignupContainer = styled.div`
  min-height: auto;
  width : auto;
  background-color: ${({ theme }) => theme.colors.lightGray} !important;
  padding: 5% 5%;
  border-radius: 20px;
`
const SignupSchema = Yup.object().shape({
  firstname: Yup.string().min(3, 'Too Short!').required('Required'),
  lastname: Yup.string().min(3, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
  phonenumber: Yup.number().min(3, 'Too Short!').required('Required'),
  address: Yup.string().min(3, 'Too Short!').required('Required'),
  dob: Yup.string().required('Required'),

})

const Signup = () => {
  React.useEffect(() => {
    if (Object.keys(getUser()).length > 0) {
      navigate('/profile')
    }
  }, [])
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3} />
        <Col md={6}>
          <SignupContainer>
            <h1 className="text-center mb-2">Sign Up</h1>
            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                phonenumber: '',
                address: '',
                dob: '',

              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log('valuesss ', values)
                firebaseGatsby.auth().createUserWithEmailAndPassword(values.email, values.password)
                  .then(({ user }) => {
                    setUser(values)
                    console.log('success1 ', user.uid)
                    console.log('firebase object', firebaseGatsby)
                    firebaseGatsby.firestore().collection('users').doc(`${user.uid}`).set(values)
                    console.log('success2 ')
                    swal({
                      title: 'Success',
                      text: 'You\'ve successfully signed up',
                      icon: 'success',
                      dangerMode: false,
                    })
                    navigate('/profile')
                  }).catch((err) => {
                    swal({
                      title: 'Error',
                      text: 'Error in signing up',
                      icon: 'error',
                      dangerMode: true,
                    })
                    console.log('err ', err)
                  })
              }}
            >
              {({
                errors, touched,
              }) => (

                <Form>
                  <Row>
                    <Col>
                      <FormGroup controlId="exampleForm.ControlInput1">
                        <FormLabel>First Name</FormLabel>
                        <Field
                          name="firstname"
                          type="firstname"
                          className="form-control"
                        />
                      </FormGroup>
                      {errors.firstname && touched.firstname ? (
                        <FormText className="text-danger">{errors.firstname}</FormText>
                      ) : null}
                    </Col>
                    <Col>
                      <FormGroup controlId="exampleForm.ControlInput2">
                        <FormLabel>Last Name</FormLabel>
                        <Field
                          name="lastname"
                          type="lastname"
                          className="form-control"
                        />
                      </FormGroup>
                      {errors.lastname && touched.lastname ? (
                        <FormText className="text-danger">{errors.lastname}</FormText>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col>
                      <FormGroup controlId="exampleForm.ControlInput3">
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
                    </Col>
                    <Col>
                      <FormGroup controlId="formBasicPassword">
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
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col>
                      <FormGroup controlId="formBasicaddress">
                        <FormLabel>Address</FormLabel>
                        <Field
                          name="address"
                          type="address"
                          as="textarea"
                          className="form-control"
                        />
                      </FormGroup>
                      {errors.address && touched.address ? (
                        <FormText className="text-danger">{errors.address}</FormText>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col>
                      <FormGroup controlId="formBasicphonenumber">
                        <FormLabel>Phonenumber</FormLabel>
                        <Field
                          name="phonenumber"
                          type="phonenumber"
                          className="form-control"
                        />
                      </FormGroup>
                      {errors.phonenumber && touched.phonenumber ? (
                        <FormText className="text-danger">{errors.phonenumber}</FormText>
                      ) : null}
                    </Col>
                    <Col>
                      <FormGroup controlId="formBasicdob">
                        <FormLabel>Date of Birth</FormLabel>
                        <Field
                          name="dob"
                          type="date"
                          className="form-control"
                          as="input"
                        />
                      </FormGroup>
                      {errors.dob && touched.dob ? (
                        <FormText className="text-danger">{errors.dob}</FormText>
                      ) : null}
                    </Col>
                  </Row>

                  <Button variant="primary" type="submit" size="lg">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </SignupContainer>
        </Col>
        <Col md={3} />
      </Row>
    </Container>
  )
}

export default Signup
