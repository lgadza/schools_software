
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

// const News = ()=> {
//   const [studentOpen, setStudentOpen] = useState(false);

//   const toggleStudent = () => {
//     setStudentOpen(!studentOpen);
//   }
//   const [subjectsOpen, setSubjectsOpen] = useState(false);

//   const toggleSubjects = () => {
//     setSubjectsOpen(!subjectsOpen);
//   }
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
//                    Home
//                  </Nav.Link>
//                </Nav.Item>
           
//                <Link to="/" className="nav-link" onClick={toggleMenu}>
//                  <FontAwesomeIcon icon={faUsers} className="me-2" />
//                  Students, Employees
//                </Link>
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                    <FontAwesomeIcon icon={faSitemap} className="me-2" />
//                    Organizational units
//                  </Nav.Link>
//                </Nav.Item>
               
             
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                    <Link to="librarians"><FontAwesomeIcon icon={faBook} className="me-2" />
//                    <span>Subjects</span></Link>
//                  </Nav.Link>
//                </Nav.Item>
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                  <Link to="/hostel">
//                     <FontAwesomeIcon icon={faBookOpen} className="me-2" />
//                     Studies
//                   </Link>
//                  </Nav.Link>
//                </Nav.Item>
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                  <Link to="/clubs">
//                     <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
//                     Help
//                   </Link>
//                  </Nav.Link>
//                </Nav.Item>
//                </Nav>
              
//             </div>
//     </div>
//           </Col>
//           <Col md={9}>
            


//       <small className='d-flex justify-content-end my-2'>last modification of this document: 16 days ago</small>
//     <div>
//       <h3 className='bg-primary py-2 text-light'>Welcome to the TSSSweb system of Founders High School!</h3>
   
//     </div>


//           </Col>
//         </Row>
//       </Container>
//   );
// };
// export default News