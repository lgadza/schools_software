import React from 'react';
import "./Alerts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes, faExclamationCircle, faInfoCircle, faExclamationTriangle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
interface AlertBoxProps {
  type: 'success' | 'danger' | 'warning' | 'info' | 'alert';
  message:string
  loading?:boolean
}

const AlertBox: React.FC<AlertBoxProps> = ({ type ,message,loading}) => {
  const iconMap: { [key: string]: IconDefinition} = {
    success:  faCheckCircle,
    danger: faTimes,
    warning: faExclamationTriangle,
    info: faInfoCircle,
    alert: faExclamationCircle,
  };
  return (
    <div className={`container alerts text-center ${type}`}>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-sm-offset-3">
          <div className="new-message-box d-flex align-items-center ">
            <div className={`new-message-box-${type}`}>
            <div className={`info-tab d-flex align-items-center justify-content-center tip-icon-${type}`} title={type}>
            <i>
                {!loading?(   
                     <FontAwesomeIcon icon={iconMap[type]} /> 
                ):(
                    <Spinner animation="border" size="sm" />
                )}
            </i>
            </div>
            <div className={`tip-box-${type}`}>
                <p className='my-1 p-0'>
                    <small className='text-nowrap'>
                     {message}
                    </small>
                </p>
            </div>
            </div>
            </div>
        </div>
       </div>
      </div>
  );
};

export default AlertBox;
