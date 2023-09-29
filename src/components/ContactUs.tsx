import React, {useRef, useState } from 'react';
import "./ContactUs.css"
import { Modal } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
interface ContactUsModalProps {
  show: boolean;
  onHide: () => void;
  
}


const ContactUs: React.FC<ContactUsModalProps> = (props) => { 
  // const dispatch:Dispatch<any> =useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    businessType: '', // Initialize as an empty string
    message: '',
  });

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const subjectInputRef = useRef<HTMLInputElement | null>(null);
  const businessTypeSelectRef = useRef<HTMLSelectElement | null>(null);
  const messageTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with formData
    console.log(formData);
  };

  
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="xl"
    
      centered
    >
      <Modal.Header closeButton className='main_bg'>
        <Modal.Title id="contained-modal-title-vcenter">
        <div className="title">Contact Us</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='main_bg'>
      <section className="contact-page-section">
      <div className="container">
          <div className="sec-title">         
                <h4 className='header'>Let's Get in Touch.</h4>
            </div>
            <div className="inner-container content_bg">
              <div className="row clearfix">
                    <div className="form-column col-lg-8 col-sm-12 col-xs-12">
                      <div className="inner-column main_bg">
                            <div className="contact-form">
                            <form onSubmit={handleSubmit} id="contact-form">
                        <div className="row clearfix">
                          <div className="form-group col-md-6 col-sm-6 co-xs-12">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              ref={nameInputRef}
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 co-xs-12">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              ref={emailInputRef}
                              placeholder="Enter your email address"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 co-xs-12">
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              ref={subjectInputRef}
                              placeholder="Enter job title & organization name"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 co-xs-12">
                            <select
                              name="businessType"
                              value={formData.businessType}
                              onChange={handleInputChange}
                              ref={businessTypeSelectRef}
                            >
                              <option>Enter Your business type</option>
                              <option value="Publisher">Publisher</option>
                              <option value="School institute">School institute</option>
                              <option value="IT company">IT company</option>
                              <option value="Others">Others</option>
                              <option value="Donor">Donor</option>
                              <option value="Educational consultant">Educational consultant</option>
                            </select>
                          </div>
                          <div className="form-group col-md-12 col-sm-12 co-xs-12">
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              ref={messageTextareaRef}
                              placeholder="Write what you are looking for?"
                            ></textarea>
                          </div>
                          <div className="form-group col-md-12 col-sm-12 co-xs-12">
                            <button type="submit" className="content_bg content_bg-2">Send Now</button>
                          </div>
                        </div>
                      </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="info-column col-md-4 col-sm-12 col-xs-12">
                      <div className="inner-column">
                          <h5 className='text-center'>Contact Info</h5>
                            <ul className="list-info pt-4">
                            <li>
                            <a href='https://www.google.com/maps/search/06 Zwierzyniecka, Bialystok, Poland' className='d-flex'>
                                <FontAwesomeIcon className='contact-icons' icon={faMapMarkerAlt} />
                                <div className="cta-text ms-3">
                                <small>06 Zwierzyniecka, Bialystok, Poland</small>
                                </div>
                                </a>
                            </li>
                                <li>
                                <a href='tel:+48794144892' className='d-flex'>
                                <FontAwesomeIcon className='contact-icons' icon={faPhone} />
                                <div className="cta-text ms-3">
                                <small>+48 794144892</small>
                                </div>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
      </Modal.Body>
    </Modal>
  )
};

export default ContactUs;
