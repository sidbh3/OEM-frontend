import { useState } from "react";
import axios from "axios";

const ConcernForm = ({ onNext, onBack }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked) {
      setError("");
      try {
        const response = await axios.post('http://your-backend-api-url/concern', { agreed: isChecked });
        console.log('API Response:', response.data);
        onNext();
      } catch (error) {
        console.error('Error submitting form:', error);
        setError("An error occurred while submitting. Please try again.");
      }
    } else {
      setError("Please read and agree to the terms before proceeding.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg ml-36 max-w-5xl w-full">
      <h2 className="text-2xl font-bold text-center mb-4 text-darkBlue">
        Concern
      </h2>
      <div className="mb-4 text-gray-700 h-64 overflow-y-auto">
        <p>
          We value your feedback and concerns. Please read the terms and
          conditions carefully before submitting your concern. By agreeing to
          the terms, you acknowledge that your concern will be addressed in
          accordance with our policies.
          {[...Array(8)].map((_, index) => (
            <p key={index} className="mt-4">
              We value your feedback and concerns. Please read the terms and
              conditions carefully before submitting your concern. By agreeing
              to the terms, you acknowledge that your concern will be addressed
              in accordance with our policies.
            </p>
          ))}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="checkbox"
            id="concernCheckbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mr-2"
          />
          <label
            htmlFor="concernCheckbox"
            className="text-sm font-medium text-gray-700"
          >
            I have read and agree to the terms.
          </label>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-darkBlue text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConcernForm;
