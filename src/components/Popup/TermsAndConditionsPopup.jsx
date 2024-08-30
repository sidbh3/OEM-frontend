import React, { useState } from 'react';

const TermsAndConditionsPopup = ({ onClose, onAccept }) => {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accepted) {
      onAccept(true);
      onClose();
    } else {
      alert('Please accept the terms and conditions');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Terms and Conditions</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
          <p>Welcome to our service. By using our platform, you agree to these terms.</p>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">2. User Responsibilities</h3>
          <p>Users are responsible for maintaining the confidentiality of their account.</p>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">3. Privacy Policy</h3>
          <p>We respect your privacy. Please refer to our Privacy Policy for more information.</p>
          
          {/* Add more sections as needed */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="accept"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="accept">I accept the terms and conditions</label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TermsAndConditionsPopup;
