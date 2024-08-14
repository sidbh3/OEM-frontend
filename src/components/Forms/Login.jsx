import React, { useState } from "react";
import loginImage from "../../assets/Car.png";
import Sideimage from "../../assets/Ellipse.png";
import DownImage from "../../assets/DownEllipse.png";
import axios from 'axios'

function Login() {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    const { username, password } = loginForm;
   

    if (!username || !password) {
      setLoginError("Username and password are required.");
      return;
    }

    setLoginError("");
    console.log("Login form submitted:", loginForm);
   
    const data=await axios.post('url',{username, password})
    
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100 relative overflow-y-hidden">
        <div className="w-3/5">
          <div className="relative">
            <img
              src={Sideimage}
              alt="Bg image"
              className="absolute top-0 left-0"
            />
          </div>
          <img
            src={loginImage}
            alt="Login"
            className="object-cover w-full h-auto relative z-10 left-28"
          />
        </div>
        <div className="w-5/12 flex items-center justify-center relative z-20">
          <div className="w-[350px] bg-lightPurple p-8 rounded-lg">
            <div className="flex justify-around mb-6">
             
            </div>
            <form onSubmit={handleLoginSubmit} className="space-y-2 h-80">
              <div>
                <label className="font-semibold text-base">Username</label>
                <input
                  type="text"
                  name="username"
                  value={loginForm.username}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="font-semibold text-base">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}
              <div className="flex items-center pt-4 gap-8">
                <label className="text-sm text-gray-600">Remember Me</label>
                <input type="checkbox" className="mr-2" />
              </div>
              <div>
                <p className="text-blue-700 text-sm cursor-pointer">
                  Forgot Password
                </p>
              </div>
              <div className="pt-5 ml-3">
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-bold p-2 px-5 rounded-xl hover:bg-blue-800 transition-colors duration-300">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img
            src={DownImage}
            alt="Bg image"
            className="w-[350px] absolute bottom-0 right-0"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
