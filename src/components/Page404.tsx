
import React from 'react';
import './Page404.css'; 

const Page404: React.FC = () => {
  return (
    <div className='container page404 d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div>
      <nav className="shelf">
        <a href='/' className="book home-page">Home page</a>
        <a className="book about-us">About us</a>
        <a className="book contact">Contact</a>
        <a className="book faq">F.A.Q.</a>
        <span className="book not-found"></span>
        <span className="door left"></span>
        <span className="door right"></span>
      </nav>
      <h1>Error 404</h1>
      <p>The page you're looking for can't be found</p>
      </div>
    </div>
  );
};

export default Page404;
