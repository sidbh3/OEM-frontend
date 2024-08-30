import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetInstructions = (e) => {
    e.preventDefault();
    // Here you would typically send a reset password email
    // For this example, we'll simulate it by navigating to a confirmation page
    navigate('/reset-confirmation', { state: { email } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-darkBlue">Reset Password</h2>
        <p className="text-center mb-6">
          Enter the email address associated with your account, and we'll email you a link to reset your password.
        </p>
        <form onSubmit={handleResetInstructions}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="inline-block p-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l-3 3m3-3l-3-3m3 3h8m-8 0l3 3m-3-3l3-3"></path>
                </svg>
              </span>
              <input
                type="email"
                id="email"
                className="w-full p-2 outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-darkBlue text-white p-2 rounded hover:bg-blue-700">
            Send Reset Instructions
          </button>
        </form>
        <p className="text-center mt-4">
          Remember your password? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Reset;
