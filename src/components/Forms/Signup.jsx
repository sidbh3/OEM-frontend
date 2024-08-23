import React, { useState } from 'react';
import Captcha from 'react-captcha-code';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    email: '',
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaInput(value);
  };

  const handleCaptchaUpdate = (newCode) => {
    setCaptchaCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captchaCode) {
      alert('Captcha does not match');
    } else {
      alert('Signup successful');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <Captcha
              charNum={4}
              height={40}
              onChange={handleCaptchaUpdate}
            />
            <input
              type="text"
              name="captcha"
              value={captchaInput}
              onChange={(e) => handleCaptchaChange(e.target.value)}
              placeholder="Enter Captcha"
              className="w-full mt-2 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
