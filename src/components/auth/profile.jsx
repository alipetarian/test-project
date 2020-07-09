import React from 'react'
import {
  Container, Col, Row,
} from 'react-bootstrap'
import { getUser, isLoggedIn } from '../../utils/auth'

const Profile = () => {
  const user = getUser()
  const {
    firstname, lastname, email, address, phonenumber, dob,
  } = user && user
  console.log('userss ', getUser())
  // const { accessToken } = user && user.stsTokenManager
  // React.useEffect(() => {
  //   if (!isLoggedIn()) {
  //     navigate('/login')
  //   }
  // }, [])

  // const size = Object.keys(user).length

  return (
    <Container>
      <Row>
        <Col>
          {
               isLoggedIn ? (
                 <p className="text-gray-700 text-base">
                   <ul>
                     <li>
                       <div className="text-sm">
                         <b>First Name</b>
                         :
                       </div>
                       <div className="pl-2 ">{`${firstname}`}</div>
                     </li>
                     <li>
                       <div className="text-sm">
                         <b>Last Name</b>
                         :
                       </div>
                       <div className="pl-2 ">{`${lastname}`}</div>
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
                         <b>Phone Number</b>
                         :
                       </div>
                       <div className="pl-2 truncate">{`${phonenumber !== null ? phonenumber : 'Not available'}`}</div>
                     </li>
                     <li>
                       <div className="text-sm">
                         <b>Address</b>
                         :
                       </div>
                       <div className="pl-2 truncate">{`${address !== null ? address : 'Not available'}`}</div>
                     </li>
                     <li>
                       <div className="text-sm">
                         <b>Date of birth</b>
                         :
                       </div>
                       <div className="pl-2 truncate">{`${dob !== null ? dob : 'Not available'}`}</div>
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
