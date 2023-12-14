import React from 'react';
import "./Cards.css"
import { Col } from 'react-bootstrap';
  
interface CardProps {
    title: string;
    copy: string;
    cardNumber:string;
  }
  
  // Card component
  const CardsComponent: React.FC<CardProps> = ({ title, copy,cardNumber }) => {
    return (
    <Col md={3} >
          <div className={`card-card card my-2 card-card${cardNumber}`}>
        <div className="content">
          <h4 className="title text-start ">{title}</h4>
          <p className="textSmallSize text-start">{copy}</p>
        </div>
      </div>
    </Col>

    );
  };


export default CardsComponent;
