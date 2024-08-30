import { useState } from "react";
import axios from "axios";

const DocumentUploadForm = ({ onNext, onBack }) => {
  const [files, setFiles] = useState({
    pancard: null,
    gstNumber: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: files[0],
    }));
  };

  const handleViewFile = (file) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('pancard', files.pancard);
    formData.append('gstNumber', files.gstNumber);

    try {
      const response = await axios.post('http://your-backend-api-url/document-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('API Response:', response.data);
      onNext();
    } catch (error) {
      console.error('Error uploading documents:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 min-h-[600px] flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            PAN Card
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              name="pancard"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="mt-1 block w-full text-base text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded file:border-0 file:text-base file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {files.pancard && (
              <button
                type="button"
                onClick={() => handleViewFile(files.pancard)}
                className="text-blue-500 hover:text-blue-700 text-lg"
              >
                View
              </button>
            )}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            GST
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              name="gstNumber"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="mt-1 block w-full text-base text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded file:border-0 file:text-base file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {files.gstNumber && (
              <button
                type="button"
                onClick={() => handleViewFile(files.gstNumber)}
                className="text-blue-500 hover:text-blue-700 text-lg"
              >
                View
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-darkBlue text-white rounded hover:bg-blue-700"
          >
            Save & Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentUploadForm;
