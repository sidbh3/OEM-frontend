import { useState } from "react";
import axios from "axios";

const BusinessInfoForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    gstNumber: "",
    cgst: "",
    sgst: "",
    billingAddress: "",
    policy: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.gstNumber.trim()) {
      newErrors.gstNumber = "GST Number is required";
    } else if (!/^[a-zA-Z0-9]{15}$/.test(formData.gstNumber)) {
      newErrors.gstNumber = "GST Number must be 15 alphanumeric characters";
    }

    if (!formData.cgst.trim()) {
      newErrors.cgst = "CGST is required";
    } else if (isNaN(formData.cgst)) {
      newErrors.cgst = "CGST must be a number";
    }

    if (!formData.sgst.trim()) {
      newErrors.sgst = "SGST is required";
    } else if (isNaN(formData.sgst)) {
      newErrors.sgst = "SGST must be a number";
    }

    if (!formData.billingAddress.trim()) {
      newErrors.billingAddress = "Billing Address is required";
    }

    if (!formData.policy) {
      newErrors.policy = "You must agree to the company policy and procedures";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://your-backend-api-url/business-info', formData);
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
        Business Information
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            name="gstNumber"
            id="gstNumber"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-darkBlue"
            placeholder="GST Number"
            onChange={handleChange}
            value={formData.gstNumber}
          />
          <label
            htmlFor="gstNumber"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            GST Number
          </label>
          {errors.gstNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.gstNumber}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            name="cgst"
            id="cgst"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-darkBlue"
            placeholder="CGST"
            onChange={handleChange}
            value={formData.cgst}
          />
          <label
            htmlFor="cgst"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            CGST
          </label>
          {errors.cgst && (
            <p className="text-red-500 text-xs mt-1">{errors.cgst}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            name="sgst"
            id="sgst"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-darkBlue"
            placeholder="SGST"
            onChange={handleChange}
            value={formData.sgst}
          />
          <label
            htmlFor="sgst"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            SGST
          </label>
          {errors.sgst && (
            <p className="text-red-500 text-xs mt-1">{errors.sgst}</p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            name="billingAddress"
            id="billingAddress"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-darkBlue"
            placeholder="Billing Address"
            onChange={handleChange}
            value={formData.billingAddress}
          />
          <label
            htmlFor="billingAddress"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Billing Address
          </label>
          {errors.billingAddress && (
            <p className="text-red-500 text-xs mt-1">{errors.billingAddress}</p>
          )}
        </div>

        <div className="col-span-2 flex items-center mt-4">
          <input
            type="checkbox"
            name="policy"
            id="policy"
            className="mr-2 h-4 w-4 text-darkBlue focus:ring-darkBlue border-gray-300 rounded"
            onChange={handleChange}
            checked={formData.policy}
          />
          <label htmlFor="policy" className="text-sm text-gray-700">
            I have read and understand the company policy and procedures
          </label>
          {errors.policy && (
            <p className="text-red-500 text-xs ml-2">{errors.policy}</p>
          )}
        </div>
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

export default BusinessInfoForm;
