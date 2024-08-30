import React from 'react';
import { useLocation } from 'react-router-dom';

const ResetConfirmation = () => {
  const location = useLocation();
  const email = location.state?.email || '';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-darkBlue">Check Your Email</h2>
        <p className="text-center mb-6">
          We've sent a password reset link to: <strong>{email}</strong>
        </p>
        <p className="text-center">
          Click the link in the email to reset your password. If you don't see the email, check your spam folder.
        </p>
      </div>
    </div>
  );
};

export default ResetConfirmation;
