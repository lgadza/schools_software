import React, { useState } from 'react';
import './HomeNavbar.css'; // Create a CSS file for styling and import it here
import makro_logo from "../../assets/md_logo_small4.png"
import makro_logo2 from "../../assets/md_logo_small2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCalendarCheck, faChevronDown, faChevronUp, faLightbulb, faListCheck, faLocationCrosshairs, faMagnifyingGlassMinus, faPeopleGroup, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SignInModal from '../../components/Modal/SignIn';

const HomeNavbar: React.FC = () => {
  const [showSignInModal,setShowSignInModal]=useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false); // Added state for the Solutions dropdown

  const handleSearchIconClick = () => {
    setIsSearchActive((prevState) => !prevState);
  };
const navigate=useNavigate()
  const handleMenuToggleClick = () => {
    setIsMobileNavActive((prevState) => !prevState);
  };

  // Function to toggle the Solutions dropdown
  const toggleSolutionsDropdown = () => {
    setIsSolutionsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="page-wrapper container glow pb-2 home-navbar">
      <div className="nav-wrapper px-0 container">
        <nav className={`navbar text-nowrap ${!isMobileNavActive ? 'mobile-nav' : 'is-active'}`}>
          <a href='/' className='d-flex align-items-center'>
            <img
              src={makro_logo2}
              alt="Makro Logo"
              style={{ width: `${30}px`, height: `${30}px`, borderRadius: "5%",objectFit:"contain" }}
            />
            <img
              src={makro_logo}
              alt="Makro Logo"
              className='ms-2'
              style={{ width: `${150}px`, height: `${50}px`, borderRadius: "5%",objectFit:"contain" }}
            />
          </a>
          <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggleClick}>
            <span className="menu-bar content_bg-2"></span>
            <span className="menu-bar content_bg-2"></span>
            <span className="menu-bar content_bg-2"></span>
          </div>
          <ul className={`nav ms-5 ${isSearchActive ? 'search' : 'no-search'}`}>
          <li className="  p-2 nav-list-item header fw-bolder" onClick={()=>navigate("/")} >
              Home
            </li>
            <li className=" py-2 px-3 nav-list-item d-none d-md-block header fw-bolder"  onClick={toggleSolutionsDropdown}>
              Solutions
              {isSolutionsDropdownOpen?(

                <FontAwesomeIcon className='ms-1' icon={faChevronUp} style={{ fontSize: "14px" }} />
              ):(

              <FontAwesomeIcon className='ms-1' icon={faChevronDown} style={{ fontSize: "14px" }} />
              )}
              {isSolutionsDropdownOpen && (
            <div className="solutions-dropdown mx-5">
                  <div className=" row">
                  <div className="solutions-column col-md-4">
                    <ul className='d-flex flex-column'>
                      <li className='py-1'><a href="/features/admission_management" className='py-2 d-flex admission-link justify-content-start align-items-center mx-5 px-5 '>
                        <div className='solution-icon-bg me-2'>
                        <FontAwesomeIcon icon={faPeopleGroup}/>
                        </div>
                        <div className='d-flex flex-column'>
                          <strong className='text-start'>Admission management</strong>
                          <small className='text-start text-dark'>Seamless lead management and </small>
                          <small className='text-start text-dark'>admission process digitization </small>
                        </div>
                      </a></li>
                      <li className='py-1'><a href="/features/makronexa" className='py-2 d-flex makronexa-link justify-content-start align-items-center mx-5 px-5 '>
                        <div className='solution-icon-bg makronexa-icon me-2'>
                        <FontAwesomeIcon icon={faLightbulb} style={{color:"rgb(247, 195, 49)",fontSize:"20px"}}/>
                        </div>
                        <div className='d-flex flex-column'>
                          <strong className='text-start'>Mankronexa</strong>
                          <small className='text-start text-dark'>Enhancing education with   </small>
                          <small className='text-start text-dark'>personalized learning, data analysis. </small>
                        </div>
                      </a></li>
                      <li className='py-1'><a href="/features/admission_management" className='py-2 d-flex report-card-link justify-content-start align-items-center mx-5 px-5 '>
                        <div className='solution-icon-bg report-card-icon me-2'>
                        <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <div className='d-flex flex-column'>
                          <strong className='text-start'>Report card</strong>
                          <small className='text-start text-dark'>Customize, create, download and</small>
                          <small className='text-start text-dark'> print your school’s digital report card</small>
                        </div>
                      </a></li>
                    
                    </ul>
                  </div>
                  <div className="solutions-column col-md-4">
                    <ul className='d-flex flex-column'>
                      
                      <li className='py-1'><a href="/features/makronexa" className='py-2 d-flex makronexa-link justify-content-start align-items-center mx-5 px-5 '>
                        <div className='solution-icon-bg makronexa-icon me-2'>
                        <FontAwesomeIcon icon={faLocationCrosshairs} style={{color:"rgb(247, 195, 49)",fontSize:"20px"}}/>
                        </div>
                        <div className='d-flex flex-column'>
                          <strong className='text-start'>Student Tracking System</strong>
                          <small className='text-start text-muted'>Coming soon   </small>
                          
                        </div>
                      </a></li>
                      <li className='py-1'><a href="#" className='py-2 d-flex report-card-link justify-content-start align-items-center mx-5 px-5 '>
                        <div className='solution-icon-bg report-card-icon me-2'>
                        <FontAwesomeIcon icon={faListCheck} style={{color:" rgb(255, 0, 0)",fontSize:"20px"}}/>
                        </div>
                        <div className='d-flex flex-column'>
                          <strong className='text-start'>Assessments</strong>
                          <small className='text-start text-muted'>Coming soon</small>
                        </div>
                      </a></li>
                      <li className='py-1'><a href="#" className='py-2 d-flex admission-link justify-content-start align-items-center mx-5 px-5 '>
                        <div className='solution-icon-bg me-2'>
                        <FontAwesomeIcon icon={faPerson}/>
                        </div>
                        <div className='d-flex flex-column'>
                          <strong className='text-start'>Student information system</strong>
                          <small className='text-start text-muted'>Coming soon </small>
                        </div>
                      </a></li>
                    
                    </ul>
                  </div>
                  <div className="solutions-column col-md-4">
                    <ul className='d-flex flex-column me-5'>
                      <li className='py-1'><a href="#" className='py-2 d-flex admission-link justify-content-start align-items-center mx-5 px-5 '>
                        <div className='solution-icon-bg report-card-icon me-2'>
                        <FontAwesomeIcon icon={faCalendarCheck} style={{color:"rgb(35, 213, 171)",fontSize:"20px"}}/>
                        </div>
                        <div className='d-flex flex-column'>
                          <strong className='text-start'>Exam planner</strong>
                          <small className='text-start text-muted'>Coming soon</small>
                        </div>
                      </a></li>
                    </ul>
                  </div>
                  
                </div>
            </div>
              )}
            </li>
            {/* <li className=" p-2  nav-list-item">
              Features
              <FontAwesomeIcon className='ms-1' icon={faChevronDown} style={{ fontSize: "14px" }} />
            </li> */}
            <li className=" d-md-none px-3  py-2 nav-list-item header fw-bolder" onClick={()=>navigate("/features/admission_management")}>
            Admission management
            </li>
            <li className="d-md-none px-3 py-2 nav-list-item header fw-bolder" onClick={()=>navigate("/features/makronexa")}>
               MakronexusAI
            </li>
            <li className=" px-3 py-2 nav-list-item header fw-bolder" onClick={()=>navigate("/plans")}>
               Plans 
            </li>
            <li className="  p-2 nav-list-item header fw-bolder" onClick={()=>navigate("/partnership")} >
              Partnerships
            </li>
            <li onClick={()=>navigate("/about")} className=" py-2 me-2 px-3 nav-list-item header fw-bolder">
              About us
            </li>
            <div className="d-flex search-container mt-1">
              {!isSearchActive && <FontAwesomeIcon
                icon={faSearch}
                className="search ms-5 color-header"
                id="search-icon"
                onClick={handleSearchIconClick}
              ></FontAwesomeIcon>}
              {isSearchActive &&
                <FontAwesomeIcon
                  icon={faMagnifyingGlassMinus}
                  className="search header"
                  id="search-icon"
                  onClick={handleSearchIconClick}
                ></FontAwesomeIcon>
              }
              <input
                className={`search-input mt-2 ms-1 main_bg ${isSearchActive ? 'search-active' : ''}`}
                type="text"
                placeholder="Search.."
              />
            </div>
          </ul>
          <div className='px-2 d-flex align-items-center'>
            <Button
              className="btn btn-primary me-1 d-flex justify-content-end">
              <Link to="" onClick={()=>setShowSignInModal(true)}> <span className='header fw-bolder'>Login</span></Link>
            </Button>
            <Button
              className="btn btn-primary d-none d-md-block d-flex justify-content-end">
              <Link to="/register"> <button className='text-white  content_bg-2 content_bg fw-bolder'>Register</button></Link>
            </Button>
          </div>
        </nav>
      </div>
      <SignInModal show={showSignInModal} onClose={()=>setShowSignInModal(false)}/>
    </div>
  );
};

export default HomeNavbar;
