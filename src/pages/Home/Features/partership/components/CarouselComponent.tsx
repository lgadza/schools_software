import React, { useState } from 'react';
import './CarouselComponent.css'; // Import your CSS styles for the carousel
import ContactUs from '../../../../../components/ContactUs';

const CarouselComponent = () => {
    const [modalShow, setModalShow] = useState(false);
  return (
    <div className="carousel mt-5 fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="item slides active">
          <div className="slide-1">
            <div className="overlay"></div>
          </div>
          <div className="partnership-hero">
            <hgroup>
              <h1>Partnership Program</h1>
              <h6 className='my-4'>Empower education's future with Makronexus—your partner in digital learning solutions!</h6>
            </hgroup>
            <button type="submit" className="content_bg textSmallSize content_bg-2" onClick={() => setModalShow(true)}>Register Now</button>
          </div>
        </div>
      </div> 
      <ContactUs  show={modalShow}
        onHide={() => setModalShow(false)}/>
    </div>
  );
};

export default CarouselComponent;
