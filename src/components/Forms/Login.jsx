
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/Car.png";
import axios from "axios";

function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginForm;

    if (!email || !password) {
      setLoginError("Email and password are required.");
      return;
    }

    setLoginError("");

    try {
      const response = await axios.post("url", { email, password });

      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        setLoginError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("An error occurred during login.");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleForgotPasswordClick = () => {
    navigate("/reset");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Section */}
      <div className="relative w-3/5 bg-darkBlue text-white flex flex-col justify-center items-center p-10">
      
        <h1 className="text-4xl font-bold mb-2">Company Name</h1>
        <p className="text-xl mb-4">Tag line / Company Description</p>
        <div className="relative z-10 mt-6">
          <img src={loginImage} alt="Car" className="w-[90%]" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/5 flex flex-col justify-center items-center bg-white p-10 relative">
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <select className="border border-gray-300 text-gray-700 text-sm rounded-md py-1 px-2">
            <option value="en">English (US)</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            LOGIN
          </h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-800 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-800 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <p 
                className="text-blue-700 text-sm cursor-pointer"
                onClick={handleForgotPasswordClick}
              >
                Forgot Password
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-darkBlue text-white font-bold py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Create an Account{" "}
              <span
                className="text-darkBlue font-medium cursor-pointer"
                onClick={handleSignUpClick}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;



