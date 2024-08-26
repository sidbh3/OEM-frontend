import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/Car.png"; // Adjust path if necessary
import axios from "axios";

function Signup() {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", // Use a string instead of array for single selection
  });
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const handleSignupChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "role") {
      setSignupForm((prevForm) => ({
        ...prevForm,
        role: checked ? value : "", // Only one role can be selected
      }));
    } else {
      setSignupForm({ ...signupForm, [name]: value });
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, role } = signupForm;

    if (!fullName || !email || !password || !confirmPassword) {
      setSignupError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }

    setSignupError("");

    try {
      const response = await axios.post("url", { fullName, email, password, role });

      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        setSignupError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setSignupError("An error occurred during signup.");
    }
  };

  const openPdf = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/instructions.pdf`, "_blank");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-3/5 bg-blue-900 text-white flex flex-col justify-center p-12">
        <h1 className="text-5xl font-bold mb-2">Company Name</h1>
        <p className="text-xl mb-10">Tag line / Company Description</p>
        <img src={loginImage} alt="Car" className="object-cover" />
      </div>
      <div className="w-2/5 bg-white flex flex-col justify-center p-16">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Create Account
          </h2>

          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={signupForm.fullName}
                onChange={handleSignupChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-800 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupChange}
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
                value={signupForm.password}
                onChange={handleSignupChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-800 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-800 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div className="flex items-center mb-2">
              <p className="text-sm text-gray-500">
                Read the instructions carefully before selecting an option.
                <button
                  type="button"
                  onClick={openPdf}
                  className="ml-2 text-gray-900"
                >
                  ℹ️
                </button>
              </p>
            </div>

            <div className="flex space-x-6 mb-4">
              <div className="flex items-center">
                <label className="text-sm text-gray-900 mr-2">OEM</label>
                <input
                  type="checkbox"
                  name="role"
                  value="OEM"
                  checked={signupForm.role === "OEM"}
                  onChange={handleSignupChange}
                  className="mr-2"
                />
              </div>
              <div className="flex items-center">
                <label className="text-sm text-gray-900 mr-2">Vendor</label>
                <input
                  type="checkbox"
                  name="role"
                  value="Vendor"
                  checked={signupForm.role === "Vendor"}
                  onChange={handleSignupChange}
                  className="mr-2"
                />
              </div>
              <div className="flex items-center">
                <label className="text-sm text-gray-900 mr-2">Admin</label>
                <input
                  type="checkbox"
                  name="role"
                  value="Admin"
                  checked={signupForm.role === "Admin"}
                  onChange={handleSignupChange}
                  className="mr-2"
                />
              </div>
            </div>

            {signupError && (
              <p className="text-red-500 text-sm mt-2">{signupError}</p>
            )}

            <button
              type="submit"
              className="mt-1 w-full py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Sign Up
            </button>

            <div className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-900 font-medium">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
