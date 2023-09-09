import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const UploadedDocs: React.FC = () => {
  return (
    <div className="mx-2">
        
            <div className='text-start mt-4'>
                <div className='mb-4'>
              <h5>Uploaded documents</h5>
                </div>
                    <ul>    
                        <li  className='d-flex content_bg  mb-3 p-3 justify-content-between'>
                        <div>
                            <div>
                            <FontAwesomeIcon className='me-2' icon={faFile}/> file.name
                            </div>
                            <div>
                            <span>file.type</span>
                            <strong className='ms-3'>11-09-2023</strong>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon className='text-danger cursor-pointer'  icon={faTrashCan}/>
                        </div>
                        </li>
                    </ul>
            </div>
    </div>
  );
};

export default UploadedDocs;
