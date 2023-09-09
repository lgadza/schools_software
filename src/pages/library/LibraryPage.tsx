


// import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen,faClipboard, faMagnifyingGlass, faSitemap, faQuestionCircle, faBoltLightning, faBusinessTime, faBookAtlas } from '@fortawesome/free-solid-svg-icons';

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, FormControl, Button, Card } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { Container, Row, Col, ListGroup,Nav } from 'react-bootstrap';
// import CardHeader from 'react-bootstrap/esm/CardHeader';
// // import logo from "../../../assets/TM logo.png"
// import NavigationBar from '../../components/NavigationBar';

// const LibraryPage = ()=> {
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
// const [books, setBooks] = useState([]);
// const [searchTerm, setSearchTerm] = useState('');
// const [searchResults, setSearchResults] = useState([]);
// const [newBook, setNewBook] = useState({
//   title: '',
//   author: '',
//   isbn: '',
//   publicationDate: '',
//   category: '',
// });

// const handleAddBook = (e) => {
//   e.preventDefault();
//   setBooks([...books, newBook]);
//   setNewBook({
//     title: '',
//     author: '',
//     isbn: '',
//     publicationDate: '',
//     category: '',
//   });
// };

// const handleSearch = () => {
//   const results = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   setSearchResults(results);
// };

//   return (
//       <Container>
//         <NavigationBar/>
//         <Row>
//           <Col md={3}>
//           <div className="sidebar">
            
//             <div className="sidebar-menu">
//             <Nav className="d-flex flex-column align-items-start">
//             <input
//          type="text"
//          placeholder="Search by Title, ISBN, or Author"
//          value={searchTerm}
//          onChange={(e) => setSearchTerm(e.target.value)}
//        />
//             <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                    <FontAwesomeIcon icon={faBookAtlas} className="me-2" />
//                    Category
//                  </Nav.Link>
//                </Nav.Item>
           
               
//                <Nav.Item>
//                  <Nav.Link onClick={toggleMenu}>
//                    <FontAwesomeIcon icon={faBusinessTime} className="me-2" />
//                    Over-due
//                  </Nav.Link>
//                  </Nav.Item>
//                </Nav>
              
//             </div>
//     </div>
//           </Col>
//           <Col md={9}>
            

// <Row>
 
  
//      <div>

     
// <form onSubmit={handleAddBook}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={newBook.title}
//           onChange={(e) =>
//             setNewBook({ ...newBook, title: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           value={newBook.author}
//           onChange={(e) =>
//             setNewBook({ ...newBook, author: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="ISBN"
//           value={newBook.isbn}
//           onChange={(e) =>
//             setNewBook({ ...newBook, isbn: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Publication Date"
//           value={newBook.publicationDate}
//           onChange={(e) =>
//             setNewBook({ ...newBook, publicationDate: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={newBook.category}
//           onChange={(e) =>
//             setNewBook({ ...newBook, category: e.target.value })
//           }
//         />
//         <button type="submit">Add Book</button>
//       </form>


       

//        <h2>Book Catalog</h2>

//        {searchResults.length === 0 ? (
//          <p>No books found.</p>
//        ) : (
//          <ul>
//            {searchResults.map((book, index) => (
//              <li key={index}>
//                <h3>{book.title}</h3>
//                <p>Author: {book.author}</p>
//                {/* Display other book details */}
//              </li>
//            ))}
//          </ul>
//        )}
//      </div>
   
// </Row>

//           </Col>
//         </Row>
//       </Container>
//   );
// };
// export default LibraryPage


