
import React from 'react';
import logo from "../assets/md_logo_small.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen,  faMapMarkerAlt, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"
import { CompanyName } from '../assets/data/company';
import { Container } from 'react-bootstrap';
const Footer: React.FC = () => {
  const year=new Date().getFullYear()
  return (
    <Container fluid className='px-0 new_footer_area '>
    <footer className="footer-section main_bg content_bg">
      <div className="new_footer_top ">
        <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 my-4 col-md-4 mb-30">
              <div className="single-cta">
              <a href='https://www.google.com/maps/search/06 Zwierzyniecka, Bialystok, Poland'>
                <FontAwesomeIcon className='contact-icons' icon={faMapMarkerAlt} />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>06 Zwierzyniecka, Bialystok, Poland</span>
                </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 my-4 col-md-4 mb-30">
              <div className="single-cta">
                <a href='tel:+48794144892'>
                <FontAwesomeIcon className='contact-icons' icon={faPhone} />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+48 794144892</span>
                </div>
                </a>
              </div>
            </div>
            <div className="col-xl-4 my-4 col-md-4 mb-30">
              <div className="single-cta">
              <a href='mailto:siuolgadza@gmail.com'>
                <FontAwesomeIcon className='contact-icons' icon={faEnvelopeOpen} />
                <div className="cta-text">
                  <h4>Mail us</h4>
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
                  <a>
                    <img src={logo} className="img-fluid" style={{width:"50px"}} alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                  The next-gen School Learning Management System with AI-powered features for personalized learning and better student outcome
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span className='d-flex'>Follow us</span>
                  <div className='d-flex'>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} className="facebook-bg" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} className="twitter-bg" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} className="linkedIn-bg" />
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
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
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
                  <p>Don’t miss any updates of our new features and extensions!</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
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
                        <div className="ps-2 copyright-text">
                            <p className='text-nowrap'>Copyright	&copy; {CompanyName}.. {year} All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </Container>
  );
};

export default Footer;
