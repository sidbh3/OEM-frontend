import  { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/Car.png";
import bg from "../../assets/Background.png";
import axios from "axios";
import { debounce } from "lodash";
import TermsAndConditionsPopup from "../Popup/TermsAndConditionsPopup";

function Signup() {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [signupError, setSignupError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsWarning, setShowTermsWarning] = useState(false);

  const navigate = useNavigate();
  const passwordRequirementsRef = useRef(null);

  const debouncedPasswordCheck = useCallback(
    debounce((password, confirmPassword) => {
      if (password && confirmPassword) {
        if (password !== confirmPassword) {
          setPasswordError("Passwords do not match.");
        } else {
          setPasswordError("");
        }
      }
    }, 300),
    []
  );

  const checkPasswordRequirements = useCallback((password) => {
    setPasswordValidation({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, []);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prevForm) => {
      let updatedValue = value;
      
      if (name === "password" || name === "confirmPassword") {
        updatedValue = value.replace(/\s/g, '');
      }

      const updatedForm = { ...prevForm, [name]: updatedValue };

      if (name === "password") {
        checkPasswordRequirements(updatedValue);
        debouncedPasswordCheck(updatedValue, updatedForm.confirmPassword);
      } else if (name === "confirmPassword") {
        debouncedPasswordCheck(updatedForm.password, updatedValue);
      }

      return updatedForm;
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { fullName, phoneNumber, email, password, confirmPassword, role } = signupForm;
    if (!fullName || !phoneNumber || !email || !password || !confirmPassword || !role) {
      setSignupError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }
    if (!Object.values(passwordValidation).every(Boolean)) {
      setSignupError("Password does not meet all requirements.");
      return;
    }
    setSignupError("");
    setPasswordError("");
    try {
      const response = await axios.post("url", {
        fullName,
        phoneNumber,
        email,
        password,
        role,
      });
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

  const openTermsPopup = () => {
    setShowTermsPopup(true);
    setShowTermsWarning(false);
  };

  const closeTermsPopup = () => {
    setShowTermsPopup(false);
  };

  const handleTermsAccept = (accepted) => {
    setTermsAccepted(accepted);
  };

  const handleRoleChange = (e) => {
    if (!termsAccepted) {
      setShowTermsWarning(true);
      return;
    }
    handleSignupChange(e);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (passwordRequirementsRef.current && !passwordRequirementsRef.current.contains(event.target)) {
        setShowPasswordRequirements(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden relative px-10">
      <div className="absolute top-0 left-0 bottom-0 h-full w-full z-10 bg-darkBlue">
        <img src={bg} alt="Background" className="w-full h-full" />
      </div>
      {/* Left Section */}
      <div className="w-full h-full relative z-20 ">
        <div className="flex flex-col w-full items-center justify-center gap-10">
          <div className="w-full text-white">
            <h1 className="text-4xl tracking-widest mt-5">Company Name</h1>
            <p className="mt-4 text-xl tracking-widest ">
              Tag Line / Company Description
            </p>
          </div>
          <div className="w-full absolute bottom-10 -right-10 z-20  ">
            <img src={loginImage} alt="car" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-full z-20 flex flex-col justify-center p-16">
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
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={signupForm.phoneNumber}
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
            <div className="relative">
              <label className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                onFocus={() => setShowPasswordRequirements(true)}
                className="mt-1 block w-full px-4 py-2 border border-gray-800 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
              {showPasswordRequirements && (
                <div
                  ref={passwordRequirementsRef}
                  className="absolute z-10 left-full ml-4 top-0 p-2 bg-white border border-gray-300 rounded shadow-lg w-64"
                >
                  <p className="font-medium mb-2">Password requirements:</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li className={passwordValidation.length ? "text-green-500" : "text-red-500"}>
                      {passwordValidation.length ? "✓" : "✗"} At least 8 characters long
                    </li>
                    <li className={passwordValidation.uppercase ? "text-green-500" : "text-red-500"}>
                      {passwordValidation.uppercase ? "✓" : "✗"} Contains uppercase letter
                    </li>
                    <li className={passwordValidation.lowercase ? "text-green-500" : "text-red-500"}>
                      {passwordValidation.lowercase ? "✓" : "✗"} Contains lowercase letter
                    </li>
                    <li className={passwordValidation.number ? "text-green-500" : "text-red-500"}>
                      {passwordValidation.number ? "✓" : "✗"} Contains number
                    </li>
                    <li className={passwordValidation.special ? "text-green-500" : "text-red-500"}>
                      {passwordValidation.special ? "✓" : "✗"} Contains special character
                    </li>
                  </ul>
                </div>
              )}
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
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <div className="flex items-center mb-2">
              <p className="text-sm text-gray-500">
                Read the instructions carefully before selecting an option.
                <button
                  type="button"
                  onClick={openTermsPopup}
                  className="ml-2 text-gray-900"
                >
                  ℹ️
                </button>
              </p>
            </div>
            <div className="flex space-x-6 mb-4">
              {showTermsWarning && (
                <p className="text-red-500 text-sm mb-2">
                  Please read and accept the terms and conditions before selecting a role.
                </p>
              )}
              <div className="flex items-center">
                <label className="text-sm text-gray-900 mr-2">OEM</label>
                <input
                  type="radio"
                  name="role"
                  value="OEM"
                  checked={signupForm.role === "OEM"}
                  onChange={handleRoleChange}
                  className="mr-2"
                  disabled={!termsAccepted}
                />
              </div>
              <div className="flex items-center">
                <label className="text-sm text-gray-900 mr-2">Vendor</label>
                <input
                  type="radio"
                  name="role"
                  value="Vendor"
                  checked={signupForm.role === "Vendor"}
                  onChange={handleRoleChange}
                  className="mr-2"
                  disabled={!termsAccepted}
                />
              </div>
              <div className="flex items-center">
                <label className="text-sm text-gray-900 mr-2">Admin</label>
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  checked={signupForm.role === "Admin"}
                  onChange={handleRoleChange}
                  className="mr-2"
                  disabled={!termsAccepted}
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
      {showTermsPopup && (
        <TermsAndConditionsPopup 
          onClose={closeTermsPopup} 
          onAccept={handleTermsAccept}
        />
      )}
    </div>
  );
}

export default Signup;
