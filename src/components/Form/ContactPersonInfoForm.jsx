import { useState } from "react";
import axios from "axios";

const ContactPersonInfoForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    employeeId: "",
    doj: "",
    workEmail: "",
    gender: "",
    address: "",
    workLocation: "",
    designation: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.employeeId.trim())
      newErrors.employeeId = "Employee ID is required";
    if (!formData.doj.trim()) newErrors.doj = "Date of Joining is required";
    if (!formData.workEmail.trim())
      newErrors.workEmail = "Work Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.workEmail))
      newErrors.workEmail = "Invalid email format";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";
    if (!formData.workLocation.trim())
      newErrors.workLocation = "Work Location is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";
    if (!formData.department.trim())
      newErrors.department = "Department is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://your-backend-api-url/contact-person-info', formData);
        console.log('API Response:', response.data);
        onNext(formData);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show error message to user)
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 ml-14 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-darkBlue">
        Personal Information
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {[
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "employeeId", label: "Employee ID" },
          { name: "doj", label: "Date of Joining", type: "date" },
          { name: "workEmail", label: "Work Email", type: "email" },
          { name: "gender", label: "Gender", type: "select" },
          { name: "address", label: "Address" },
          { name: "workLocation", label: "Work Location" },
          { name: "designation", label: "Designation" },
          { name: "department", label: "Department" },
        ].map((field) => (
          <div key={field.name} className="relative">
            {field.type === "select" ? (
              <select
                name={field.name}
                id={field.name}
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-darkBlue"
                onChange={handleChange}
                value={formData[field.name]}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <input
                type={field.type || "text"}
                name={field.name}
                id={field.name}
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-darkBlue"
                placeholder={field.label}
                onChange={handleChange}
                value={formData[field.name]}
              />
            )}
            <label
              htmlFor={field.name}
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              {field.label}
            </label>
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-darkBlue text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save & Proceed
        </button>
      </div>
    </form>
  );
};

export default ContactPersonInfoForm;
