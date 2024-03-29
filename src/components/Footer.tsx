
import React, { useState } from 'react';
import logo from "../assets/md_logo_small.png"
import logo2 from "../assets/md_logo_small42.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen,  faMapMarkerAlt, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"
import { CompanyName } from '../assets/data/company';
import { Container } from 'react-bootstrap';
import ContactUs from './ContactUs';
const Footer: React.FC = () => {
  const year=new Date().getFullYear()
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid className='px-0 new_footer_area '>
    <footer className="footer-section">
      <div className="new_footer_top ">
        <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 my-4 col-md-4 mb-30">
              <div className="single-cta">
              <a href='https://www.google.com/maps/search/15135 Pumula South, Bulawayo, Zimbabwe'>
                <FontAwesomeIcon className='contact-icons' icon={faMapMarkerAlt} />
                <div className="cta-text">
                  <div>Find us</div>
                  <span>15135 Pumula South, Bulawayo, Zimbabwe</span>
                </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 my-4 col-md-4 mb-30">
              <div className="single-cta">
                <a href='tel:+263780009810'>
                <FontAwesomeIcon className='contact-icons' icon={faPhone} />
                <div className="cta-text">
                  <div>Call us</div>
                  <span>+263 780009810</span>
                </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 my-4 col-md-4 mb-30">
              <div className="single-cta">
              <a href='mailto:louisgadza@makronexus.com'>
                <FontAwesomeIcon className='contact-icons' icon={faEnvelopeOpen} />
                <div className="cta-text">
                  <div>E-mail us</div>
                  <span>info@makronexus.com</span>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href='/'>
                    <img src={logo} className="img-fluid" style={{width:"25px"}} alt="logo" />
                    <img src={logo2} className="img-fluid ms-2" style={{width:"150px"}} alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p className='textSmallSize'>
                  The next-gen School Learning Management System with AI-powered features for personalized learning and better student outcome
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span className='d-flex'>Follow us</span>
                  <div className='d-flex'>
                  <a href="https://www.facebook.com/makronexus/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} className="facebook-bg" />
                  </a>
                  <a href="https://www.linkedin.com/company/makronexus"  target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedIn-bg" style={{fontSize:"25px"}}/>
                  </a>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className='py-3'>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a className='textMediumSize'  href="/">Home</a>
                  </li>
                  <li>
                    <a className='textMediumSize' href="/about">About us</a>
                  </li>
                  <li>
                    <a className='textMediumSize'  href="#">Our Services</a>
                  </li>
                  <li className='cursor-pointer' onClick={() => setModalShow(true)}>
                  <a className='textMediumSize'> Contact us </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3 className='py-3'>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p className='textSmallSize'>Don’t miss any updates of our new features and extensions!</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" className='textMediumSize' placeholder="Email Address" />
                    <div className='send-btn'>
                      <FontAwesomeIcon icon={faPaperPlane} className='send-icon' />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_one_two"></div>
          <div className="footer_bg_two"></div>
          <div className="footer_bg_two-two"></div>
        </div> */}
      </div>
       <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left d-flex align-items-center">
                    <img src={logo} style={{width:"20px"}} alt="logo" />
                    <img src={logo2} className='ms-2' style={{width:"100px"}} alt="logo" />
                        <div className="ps-2 copyright-text">
                            <p className='text-nowrap textSmallSize'>Copyright	&copy; {CompanyName}.. {year} All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a className='textSmallSize' href="/">Home</a></li>
                                <li><a className='textSmallSize' href="#">Terms</a></li>
                                <li><a className='textSmallSize' href="#">Privacy</a></li>
                                <li className='textSmallSize'><a href="#">Policy</a></li>
                                <li onClick={() => setModalShow(true)}><a className='textSmallSize'>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <ContactUs  show={modalShow}
        onHide={() => setModalShow(false)}/>
    </Container>
  );
};

export default Footer;
