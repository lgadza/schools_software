
// import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen,faClipboard, faMagnifyingGlass, faSitemap, faQuestionCircle, faBoltLightning } from '@fortawesome/free-solid-svg-icons';

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, FormControl, Button, Card } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { Container, Row, Col, ListGroup,Nav } from 'react-bootstrap';
// import CardHeader from 'react-bootstrap/esm/CardHeader';
// // import logo from "../../../assets/TM logo.png"
// import NavigationBar from '../../components/NavigationBar';

// const Students = ()=> {
//   // const [studentOpen, setStudentOpen] = useState(false);

//   // const toggleStudent = () => {
//   //   setStudentOpen(!studentOpen);
//   // }
//   // const [subjectsOpen, setSubjectsOpen] = useState(false);

//   // const toggleSubjects = () => {
//   //   setSubjectsOpen(!subjectsOpen);
//   // }
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//       <Container>
//         <NavigationBar/>
//         <Row>
//           <Col md={3}>
//           <div className="sidebar">
            
//             <div className="sidebar-menu">
//             <Nav className="d-flex flex-column align-items-start">
//             <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                    <FontAwesomeIcon icon={faHome} className="me-2" />
//                    Schedule
//                  </Nav.Link>
//                </Nav.Item>
           
//                <Link to="/" className="nav-link" onClick={toggleMenu}>
//                  <FontAwesomeIcon icon={faUsers} className="me-2" />
//                  Class Groups
//                </Link>
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                    <FontAwesomeIcon icon={faSitemap} className="me-2" />
//                    User Plans
//                  </Nav.Link>
//                </Nav.Item>
               
             
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                    <Link to="librarians"><FontAwesomeIcon icon={faBook} className="me-2" />
//                    <span>Statements</span></Link>
//                  </Nav.Link>
//                </Nav.Item>
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                  <Link to="/hostel">
//                     <FontAwesomeIcon icon={faBookOpen} className="me-2" />
//                     Privacy Preferences
//                   </Link>
//                  </Nav.Link>
//                </Nav.Item>
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                  <Link to="/clubs">
//                     <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
//                     TSSSweb Preferences
//                   </Link>
//                  </Nav.Link>
//                </Nav.Item>
//                </Nav>
              
//             </div>
//     </div>
//           </Col>
//           <Col md={9}>
            

// <Row>
//     <Col>
//     <Card className='p-0 text-start'>
//         <Card.Header>
//             Access to WIFI network
//         </Card.Header>
//         <Card.Body>
//             <div className='text-nowrap'>Login: <strong>72783@student.fhs.edu.zw</strong></div>
//             <div className='text-nowrap'>Password: <strong>Yuu673</strong></div>
//             <span>Using the access account to the WIFI network is tantamount to acceptance of the Relations.</span>
//             <p>More info at: <Link to='http://wifi.fhs.edu.zw'>http://wifi.fhs.edu.zw</Link></p>
//         </Card.Body>
//     </Card>
//     <Card className='p-0 text-start my-3'>
//         <Card.Header>
//             Access to WIFI network
//         </Card.Header>
//         <Card.Body>
//             <div className='text-nowrap'>Login: <strong>72783@student.fhs.edu.zw</strong></div>
//             <div className='text-nowrap'>Password: <strong>Yuu673</strong></div>
//             <span>Using the access account to the WIFI network is tantamount to acceptance of the Relations.</span>
//             <p>More info at: <Link to='http://wifi.fhs.edu.zw'>http://wifi.fhs.edu.zw</Link></p>
//         </Card.Body>
//     </Card>
//     </Col>
//     <Col></Col>
//     <Col></Col>
// </Row>

//           </Col>
//         </Row>
//       </Container>
//   );
// };
// export default Students