import { useState } from "react";
import axios from "axios";

const CompanyInfoForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    phoneNumber: "",
    department: "",
    officeAddress: "",
    pinCode: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.businessName.trim())
      newErrors.businessName = "Business Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    if (!formData.department.trim())
      newErrors.department = "Department is required";
    if (!formData.officeAddress.trim())
      newErrors.officeAddress = "Office Address is required";
    if (!formData.pinCode.trim()) newErrors.pinCode = "PIN Code is required";
    else if (!/^\d{6}$/.test(formData.pinCode))
      newErrors.pinCode = "PIN Code must be 6 digits";
    if (!formData.state.trim()) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://your-backend-api-url/company-info', formData);
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
        Company Information
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {[
          { name: "businessName", label: "Business Name" },
          { name: "phoneNumber", label: "Phone Number" },
          { name: "department", label: "Department" },
          { name: "officeAddress", label: "Office Address" },
          { name: "pinCode", label: "PIN Code" },
          { name: "state", label: "State" },
        ].map((field) => (
          <div key={field.name} className="relative">
            <input
              type="text"
              name={field.name}
              id={field.name}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-darkBlue"
              placeholder={field.label}
              onChange={handleChange}
              value={formData[field.name]}
            />
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
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300"
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

export default CompanyInfoForm;
