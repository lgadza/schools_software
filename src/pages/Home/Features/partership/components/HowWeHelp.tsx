import React, { useCallback, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './HowWeHelp.css'; 
import image from "../../../../../assets/how-we-help.png"
import ContactUs from '../../../../../components/ContactUs';
interface FeatureListItemProps {
    number: string; 
    title: string;
    description: string;
  }
  

  const FeatureListItem: React.FC<FeatureListItemProps> = ({ number, title, description }) => (
    <ListGroup.Item as="li" className="d-flex align-items-start dark-box-shadow p-3" style={{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}>
      <div className="me-2">
        <div className="feature-number">{number}</div>
      </div>
      <div className="ms-2">
        <div className="feature-title text-start textMediumSize">{title}</div>
        <div className="feature-description text-start textSmallSize">{description}</div>
      </div>
    </ListGroup.Item>
  );

const HowWeHelp = () => {
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = useCallback(() => setModalShow(false), []);
    const handleModalShow = useCallback(() => setModalShow(true), []);
  return (
    <Container fluid className="HowWeHelp-bg">
          <h5 className='color-header'>How Makronexus will enable you?</h5>
      <Row className="align-items-center py-4">
        <Col md={6}className="text-center">
         <div className='image-column'>
            <img src={image} alt='image'/>
         </div>
        </Col>
        <Col md={6}>
          <ListGroup as="ul" className='mt-3' >
            <FeatureListItem
              number="1"
              title="Partner Training"
              description="Offering extensive training programs to equip partners with in-depth knowledge of Makronexus products and services, ensuring they can deliver value and effectively meet stakeholders needs."
            />
            <FeatureListItem
              number="2"
              title="Product Demos"
              description="Facilitating product demonstrations that partners can use to showcase the features and benefits of Makronexus solutions to potential clients, enhancing sales efforts"
            />
            <FeatureListItem
              number="3"
              title="Product Implementation"
              description="Collaborating closely with partners during product implementation to ensure a smooth onboarding process and to tailor the system to specific needs."
            />
            <FeatureListItem
              number="4"
              title="Continuous Innovation"
              description="Sharing updates and improvements regularly, keeping partners at the forefront of educational technology advancements."
            />
            <FeatureListItem
              number="5"
              title="Community Building"
              description="Creating a community of partners, fostering networking opportunities, and encouraging collaboration and shared learning."
            />
            <FeatureListItem
              number="6"
              title="Feedback Loop"
              description="Encouraging and acting on partner feedback to improve products and services, ensuring that the offerings meet the evolving needs of educational institutions."
            />
          </ListGroup>
        </Col>
      </Row>
          <button type="button" className="content_bg textSmallSize content_bg-2" onClick={handleModalShow}>
        Register Now
      </button>
      <ContactUs show={modalShow} onHide={handleModalClose} />
    </Container>
  );
};

export default HowWeHelp;
