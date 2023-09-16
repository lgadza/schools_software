
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faX } from '@fortawesome/free-solid-svg-icons';
// import ToggleSwitch from '../../components/ToggleSwitch';
import RangeSlider from '../../components/RangesSlider';

  
const Settings: React.FC = () => {
  const [isAlert,setIsAlert]=useState(true)
  const handleAlert=()=>{
    setIsAlert(!isAlert)
  }

  return (
      <div className="mt-4 component-margin-top my-5 col-sm-12  col-xl-8">
        <h4 className='d-flex pb-2 my-3'>Settings</h4>
        <div className='d-flex align-items-center justify-content-between content_bg px-3'>
        <span className='me-5'>Shared</span>
        {/* <ToggleSwitch/> */}
        </div>
        <div className='d-flex align-items-center content_bg my-4 px-3'>
          <span className='me-3'>
          Temperature
          </span>
          <RangeSlider/>
        </div>
        {isAlert && (
          <Alert variant='success' className='d-flex flex-column text-start'>
          <div className='d-flex justify-content-between'>
            <div>
            <FontAwesomeIcon icon={faInfoCircle}/>
            <span className='mx-2'>Info</span>
            </div>
            <FontAwesomeIcon className='cursor-pointer' onClick={handleAlert} icon={faX}/>
          </div>
          <div className='d-flex flex-column text-dark'>
            <small>You can give your chatbot a personality, or for instance, request specific language for the answer.</small>
            <small>For instance, try to add</small>
            <small> --- Answer in the German language.</small>
            <small>to request answers to be in the German language.</small>
          </div>
        </Alert>
        )}
        <div className='d-flex my-4 text-start'>
          <span className='me-5'>Name</span>
          <input type="text" placeholder='Makronexus' className='px-3 py-2 w-100'/>
          <div>
          </div>
        </div>
        <div className='d-flex flex-column text-start mt-3'>
        <div className='me-5 my-2'>Personality</div>
          <textarea name='text' rows={5} placeholder='- Act as a document having a conversation with a human.
- You have to be friendly.
- You are talking to a human.
- You NEVER answer that you are an AI language model.' className='px-3 py-2 '/>
        </div>
        <div className='d-flex mt-3 justify-content-end'>
            <button className='header content_bg'><small>Update</small></button>
        </div>
      </div>
    // </div>
  );
};

export default Settings;
