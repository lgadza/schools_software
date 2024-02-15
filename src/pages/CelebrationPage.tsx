
import './CelebrationPage.css'; 
import SVGComponent from '../components/SVGComponent';
import TypingEffect from '../components/TypingText';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeNavbar from './Home/HomeNavbar';
import PageProgress from '../components/PageProgress';
import Footer from '../components/Footer';


const CelebrationPage: React.FC = () => {
  const sections = [
    {label:"Makronexus"},
    { label: "Makronexus" },
    { label: "Makronexus" },
    { label: "Makronexus" },
  ];

  return (
    <div className="page-container">
      <div className="progress-container">
        <PageProgress steps={sections} />
      </div>
      <div className="content-container cala-main-feature">
        <Container fluid className="px-0">
          <HomeNavbar />
          <Container className="px-5 calaAI">
          <div className="celebration-page">
        <Row>
            <Col md={5}>
      <header>
        <h6 className='color-header'>
        <TypingEffect words={["Celebrating 200 Users!"]} typingSpeed={60} eraseSpeed={60} />
        </h6>
        <SVGComponent /> 
      </header>
      </Col>
      <Col md={7}>
      <main>
        <section id="introduction">
          <p className='text-dark text-start textSmallSize'>We're thrilled to announce that 200 students and teachers have joined our platform for their CALA research and studies.</p>
        </section>

    
        <section id="call-to-action">
          <p className='text-dark text-start textSmallSize'>Join the community and enhance your learning and teaching experience.</p>
          <button className='content_bg text-start d-flex content_bg-2'>Join Now</button>
        </section>
      </main>
      </Col>
      </Row>
    </div>
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default CelebrationPage;
