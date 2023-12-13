import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUserTie, faBook, faDesktop } from '@fortawesome/free-solid-svg-icons';
import './WhoCanPartner.css';
const ContactUs = React.lazy(() => import('../../../../../components/ContactUs')); // Lazy load the ContactUs component

interface PartnerCardProps {
  title: string;
  icon: React.ComponentProps<typeof FontAwesomeIcon>['icon']; 
}

const PartnerCard: React.FC<PartnerCardProps> = ({ title, icon }) => (
  <div className=" col-xs-12 col-md-3 col-sm-12">
  <div className="partner-card mx-2 my-2 py-4">
    <div className='icon_background d-flex align-items-center justify-content-center'>
      <FontAwesomeIcon icon={icon} size="3x" className='header' />
    </div>
    <div className="partner-title textSmallSize">{title}</div>
  </div>
  </div>
);

const WhoCanPartner = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = useCallback(() => setModalShow(false), []);
  const handleModalShow = useCallback(() => setModalShow(true), []);

  return (
    <section className="partners-section my-5">
      <h5 className='color-header'>Who can Partner with Makronexus?</h5>
      <div className="partners-container row my-5">
        <PartnerCard title="School Vendors" icon={faSchool} />
        <PartnerCard title="Consultants" icon={faUserTie} />
        <PartnerCard title="Publishers" icon={faBook} />
        <PartnerCard title="IT Companies" icon={faDesktop} />
      </div>
      <button type="button" className="content_bg textSmallSize content_bg-2" onClick={handleModalShow}>
        Register Now
      </button>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ContactUs show={modalShow} onHide={handleModalClose} />
      </React.Suspense>
    </section>
  );
};

export default WhoCanPartner;
