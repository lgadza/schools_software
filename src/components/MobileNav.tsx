import React from 'react';
import './MobileNav.css'; // Assuming you'll keep your styles in a separate CSS file
import logoImage from '../assets/md_logo_small2.png'; 

const MobileNav: React.FC = () => {
  return (
    <div className="mobile-container">
      <div className="phone">
        <div className="content">
          <nav role="navigation">
            <div id="menuToggle">
                <div className='d-flex align-items-center justify-content-between'>
             <div>
             <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
             </div>
              <img src={logoImage} style={{width:"50px", height:"50px"}} alt="Logo" className="mobileNav-logo" />
                </div>  
              <ul id="menu">
                <li><a href="#" className='text-dark'>Home</a></li>
                <li><a href="#" className='text-dark'>About</a></li>
                <li><a href="#" className='text-dark'>Info</a></li>
                <li><a href="#" className='text-dark'>Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
