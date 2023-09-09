
import { Navbar, Nav} from 'react-bootstrap';
import fhs1 from '../assets/fhs_img/fhs1.jpg'
import fhs_logo from "../assets/fhs_img/fhs_logo.png"

function NavigationBar(): JSX.Element {
  return (
    <div className='nav-bar d-flex flex-column'>
      <div>
        <div className='text-end py-2'>You're not logged in | <span>log in</span></div>
      <div className='header-container'>

        <img src={fhs1} alt="fhs" className='school-header-img' />
        <div className='school-logo-container d-flex align-items-center'>
          <img src={fhs_logo} className='school-logo' alt="fhs_logo" />
      <h1 className='text-light'>Founders High School</h1>
        </div>
      </div>
      </div>
    <Navbar bg="light" className='px-5' expand="lg">
      <Navbar.Brand href="/">
      <div className="sidebar-toggle d-flex justify-content-between">
        

             <div>
             <span></span>
              <span></span>
              <span></span>
             </div>
            </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/mss/news">News</Nav.Link>
          <Nav.Link href="/mss/students">Students</Nav.Link>
          <Nav.Link href="/teachers">Staff</Nav.Link>
          <Nav.Link href="/courses">Library</Nav.Link>
          {/* <Nav.Link href="/assignments">Assignments</Nav.Link> */}
          <Nav.Link href="/reports">Reports</Nav.Link>
          <Nav.Link href="/mss/catalog">Catalog</Nav.Link>
          <Nav.Link href="/mymssweb">My UMSSWEB</Nav.Link>
          <Nav.Link href="/mss/admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavigationBar;
