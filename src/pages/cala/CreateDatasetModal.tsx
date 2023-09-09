import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ToggleSwitch from '../../components/ToggleSwitch';
interface MyVerticallyCenteredModalProps {
  show: boolean;
  onHide: () => void;
}

const CreateDatasetModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {
  const [datasetName, setDatasetName] = useState<string>(''); 
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDatasetName(event.target.value);
  };


  const handleCreateDataset = () => {
    if (datasetName.trim() !== '') {
      console.log('Dataset Name:', datasetName);
      props.onHide();
      setDatasetName("")
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='main_bg'>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5>Create Dataset</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='main_bg'>
        <h5 className='mb-3'> Name <span className='text-danger'>*</span></h5>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Personal knowledge base"
            value={datasetName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className='d-flex mt-3 align-items-center justify-content-between content_bg px-3'>
        <span>Shared</span>
        <ToggleSwitch/>
        </div>
        <div className='mt-3'>
          <Button
            variant="primary"
            className='content_bg-2 w-100 font-weight-bold'
            onClick={handleCreateDataset}
            disabled={datasetName.trim() === ''}
          >
            CREATE DATASET
          </Button>
        </div>
        <div className='mt-3'>
        <small className='text-danger'>You have reached the limit of datasets for your subscription</small>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateDatasetModal;
