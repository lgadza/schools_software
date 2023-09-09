
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

// const Catalog = ()=> {
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
//                    <FontAwesomeIcon icon={faBoltLightning} className="me-2" />
//                    Shortcut
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
            


//     <div>
//       <h3 className='text-start'>Catalog</h3>
//       <Card className='my-3'>
//         <CardHeader className='d-flex align-items-center'>
//         <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-0 pe-2' />
//           <h5 className='text-start my-1 p-0'>
//             People search</h5>
//         </CardHeader>

//       <Form className='d-flex'>
      
//         <FormControl type="text" placeholder="Search by first name,last name..." className="mr-sm-2" />
//         <Button variant="outline-primary">Search</Button>
//       </Form>
//       </Card>
//       <Card className='my-3'>
//         <CardHeader className='d-flex align-items-center'>
//       <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-0 pe-2' />
//           <h5 className='text-start my-1 p-0'>Unit search</h5>
//         </CardHeader>

//       <Form className='d-flex'>
      
//      <FormControl type="text" placeholder="Search by unit name, code..." className="mr-sm-2" />
//         <Button variant="outline-primary">Search</Button>
//       </Form>
//       </Card>
//       <Card className='my-3'>
//         <CardHeader className='d-flex align-items-center'>
//         <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-0 pe-2' />
//           <h5 className='text-start my-1 p-0'>Study search</h5>
//         </CardHeader>

//       <Form className='d-flex'>
      
//         <FormControl type="text" placeholder="Search by subject name, level..." className="mr-sm-2" />
//         <Button variant="outline-primary">Search</Button>
//       </Form>
//       </Card>
   
//     </div>


//           </Col>
//         </Row>
//       </Container>
//   );
// };
// export default Catalog