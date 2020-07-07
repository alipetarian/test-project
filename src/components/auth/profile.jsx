import React from 'react'
import {
  Container, Col, Row,
} from 'react-bootstrap'
import { navigate } from '@reach/router'
import { setUser, getUser, isLoggedIn } from '../../utils/auth'

const Profile = () => {
  const user = getUser()
  const { displayName, email, emailVerified } = user && user
  console.log('user ', user)
  // const { accessToken } = user && user.stsTokenManager
  // React.useEffect(() => {
  //   if (!isLoggedIn()) {
  //     navigate('/login')
  //   }
  // }, [])
  const size = Object.keys(user).length

  return (
    <Container>
      <Row>
        <Col>
          {
               size > 0 ? (
                 <p className="text-gray-700 text-base">
                   <ul>
                     <li>
                       <div className="text-sm">
                         <b>Name</b>
                         :
                       </div>
                       <div className="pl-2 ">{`${displayName}`}</div>
                     </li>
                     <li>
                       <div className="text-sm">
                         <b>Email</b>
                         :
                       </div>
                       <div className="pl-2 ">{`${email}`}</div>
                     </li>
                     <li>
                       <div className="text-sm">
                         <b>Email Verified</b>
                         :
                       </div>
                       <div className="pl-2 ">{`${emailVerified}`}</div>
                     </li>
                     <li>
                       <div className="text-sm">
                         <b>Firebase Access Token</b>
                         :
                       </div>
                       {/* <div className="pl-2 truncate">{`${accessToken && accessToken}`}</div> */}
                     </li>
                   </ul>
                 </p>
               )
                 : (
                   <h1>
                     YOU ARE NOT LOGGED IN
                   </h1>
                 )
        }

        </Col>

      </Row>
    </Container>
  )
}

export default Profile
