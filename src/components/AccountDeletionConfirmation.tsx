import React from 'react';
import './AccountDeletionConfirmation.css'; 
import { useNavigate } from 'react-router-dom';

const AccountDeletionConfirmation: React.FC = () => {
    const navigate=useNavigate()
  const redirectToSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="confirmation-container">
        <div className='confirmation-content content_bg'>
      <h2>Deletion Confirmation</h2>
      <p className='py-3'>Thank you for using our service. Your account has been successfully deleted.</p>
      <div>
      <small>If you have any questions or need further assistance, please contact our support team.</small>
      </div>
      <button className='content_bg-2  mt-2 content_bg' onClick={redirectToSignUp}>Register again</button>
    </div>
    </div>
  );
};

export default AccountDeletionConfirmation;
