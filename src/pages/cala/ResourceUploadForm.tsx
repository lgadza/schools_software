
import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import UploadFileModal from '../../components/UploadFileModal';
import AlertBox from '../../components/Alerts';
import axios from 'axios';

interface ResourceUploadFormProps {
  onResourceUpload: (title: string, description: string, file: File,subject:string, level:string ) => void;
}

const ResourceUploadForm: React.FC<ResourceUploadFormProps> = ({ onResourceUpload }) => {
  const [title, setTitle] = useState('');
  const [showSuccessMessage,setShowSuccessMessage] = useState(false);
  const [showErrorMessage,setShowErrorMessage] = useState(false);
  const [level, setLevel] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
console.log(onResourceUpload,"FILEs")
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };
  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  
  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
  };

  const handleResourceUpload = async () => {
    if (title && file && subject && level) {
      const fileExtension = file.name.split('.').pop();

      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);
        formData.append('subject', subject);
        formData.append('level', level);
        formData.append('fileExtension', fileExtension!);

        const response = await axios.post('http://localhost:3001/langchain/qdrant/save', formData, {
          headers: {
            "Content-Type": "multipart/form-data",}
          });

        if (response.status === 200) {
          setTitle('');
          setDescription('');
          setFile(null);
          setSubject('');
          setLevel('');

          setShowSuccessMessage(true);

          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
        } else {
          setShowErrorMessage(true);

          setTimeout(() => {
            setShowErrorMessage(false);
          }, 5000);
          console.error('Error uploading resource');
        }
      } catch (error) {
        setShowErrorMessage(true);

        setTimeout(() => {
          setShowErrorMessage(false);
        }, 5000);
        console.error('Error uploading resource:', error);
      }
    }
  };
  return (
    <div className="pb-3 component-margin-top   mt-4">
      <div className={`makronexa-alert ${showSuccessMessage ? 'visible' : 'hidden'}`}>
      <AlertBox type='success' message='Resource upload successful'/>
      </div>
      <div className={`makronexa-alert ${showErrorMessage ? 'visible' : 'hidden'}`}>
      <AlertBox type='warning' message='Error uploading resource'/>
      </div>
      <h4 className="d-flex mb-4">Resource Upload</h4>
      <Row>
        <Col sm={6} lg={4} >
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g Chem"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
        </Col>
        <Col sm={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Subject</Form.Label>
            <Form.Select value={subject} onChange={handleSubjectChange}>
              <option>Select</option>
              <option value={"Mathematics"}>Mathematics</option>
              <option value={"Physics"}>Physics</option>
              <option value={"Chemistry"}>Chemistry</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Level</Form.Label>
            <Form.Select value={level} onChange={handleLevelChange}>
              <option>Select</option>
              <option value={"Form 3"}>Form 3</option>
              <option value={"Form 4"}>Form 4</option>
              <option value={"Form 5"}>Form 5</option>
              <option value={"Form 6"}>Form 6</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={8}>
          <Form.Group className="mb-3">
            <UploadFileModal onFileUpload={handleFileUpload}/>
          </Form.Group>
        </Col>
   
      </Row>
      <div className='d-flex '>
      <button  className={`header content_bg`} style={{
    backgroundColor: file ? '#007bff' : 'gray',
    cursor: file ? 'pointer' : 'not-allowed',
  }} disabled={file?false:true} onClick={handleResourceUpload}><small>Upload</small></button>
      </div>
    </div>
  );
};

export default ResourceUploadForm;
