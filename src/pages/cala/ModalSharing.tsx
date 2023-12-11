import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

interface ModalSharingProps {
  onClose: () => void;
  show: boolean;
  link:string;
}

const ModalSharing: React.FC<ModalSharingProps> = ({ onClose, show,link }) => {
  // const link = "65539d55-72f5-4907-80e3-4e9ba69d10d6/datasets/CALAwqwwqwqw"; 

  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2500); // Reset success message after 2.5 seconds
      })
      .catch((error) => {
        console.error('Error copying to clipboard: ', error);
      });
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className='textMediumSize'>Sharing Link</Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-between align-items-center'>
        <Form.Control type="text" value={link} readOnly />
        <FontAwesomeIcon
          icon={copySuccess ? faCheck : faCopy}
          className={`ms-3 textSmallSize ${copySuccess ? 'text-success' : ''}`}
          onClick={!copySuccess ? copyToClipboard : undefined}
          style={{ cursor: !copySuccess ? 'pointer' : 'default' }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className='textSmallSize' onClick={()=>{onClose(), setCopySuccess(false)}}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSharing;
