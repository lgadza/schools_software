import React from 'react';
import './Loader.css'; 
import { Container } from 'react-bootstrap';

const Loader: React.FC = () => {
  const listItems: JSX.Element[] = [];

  for (let i = 0; i < 8; i++) {  
    const animationName = `page-${i}`;
    listItems.push(
      <li key={i} className={`animated-li ${animationName}`}></li>
    );
  }

  return (
    <Container className='loader_container'>
    <div className="book-loader">
      <div className="inner">
        <div className="left"></div>
        <div className="middle"></div>
        <div className="right"></div>
      </div>
      <ul>{listItems}</ul>
    </div>
    </Container>
  );
};

export default Loader;
