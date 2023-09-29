import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeNavbar from './HomeNavbar';
import Footer from '../../components/Footer';
import PageProgress from '../../components/PageProgress';
import Pricing from '../../components/Pricing';

const Plans: React.FC = () => {
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
            <Row className="my-5">
          <Col>
          <Pricing/>
          </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default Plans;
