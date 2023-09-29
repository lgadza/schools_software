
import React, { useState } from 'react';
import './Page404.css'; 
import ContactUs from './ContactUs';

const Page404: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='container page404 d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div>
      <nav className="shelf">
        <a href='/' className="book home-page">Home page</a>
        <a href='/about' className="book about-us">About us</a>
        <a className="book contact" onClick={() => setModalShow(true)}>Contact</a>
        <a className="book faq">F.A.Q.</a>
        <span className="book not-found"></span>
        <span className="door left"></span>
        <span className="door right"></span>
      </nav>
      <h1>Error 404</h1>
      <p>The page you're looking for can't be found</p>
      </div>
      <ContactUs  show={modalShow}
        onHide={() => setModalShow(false)}/>
    </div>
  );
};

export default Page404;
