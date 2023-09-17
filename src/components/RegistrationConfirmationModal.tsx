import React from 'react';

const RegistrationConfirmationModal: React.FC = () => {
  return (
    <main className="content_bg text-dark font-sans overflow-x-hidden">
      <div className="position-relative px-4 min-vh-100 d-flex align-items-center justify-content-center">
        <div className="bg-dark opacity-25 w-100 h-100 position-absolute"></div>
        <div className="bg-white rounded-lg mx-auto p-4 position-fixed bottom-0 start-0 end-0 mb-4 mx-4">
          <div className="d-flex align-items-center">
            <div className="border border-secondary rounded-circle d-flex justify-content-center align-items-center w-16 h-16 flex-shrink-0 mx-auto">
              <i className="bx bx-error fs-3"></i>
            </div>
            <div className="mt-4 ms-md-0 ms-4 text-center text-md-start">
              <p className="fw-bold">Delete your account</p>
              <p className="text-sm text-gray-700 mt-1">
                You will lose all of your data by deleting your account. This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="text-center text-md-end mt-4 d-flex justify-content-md-end">
            <button className="btn btn-danger me-md-2 me-0 px-4 py-3 py-md-2 rounded-lg fw-semibold text-sm">Delete Account</button>
            <button className="btn btn-secondary mt-4 mt-md-0 px-4 py-3 py-md-2 rounded-lg fw-semibold text-sm">Cancel</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationConfirmationModal;
