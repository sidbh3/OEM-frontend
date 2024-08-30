const ThankYouPage = ({ onOkClick }) => {
  return (
    <div className="max-w-3xl mx-auto p-8 min-h-[600px] flex flex-col justify-center items-center bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-darkBlue mb-6">Thank You!</h2>
      <p className="text-xl text-gray-700 mb-8 text-center">
        Your documents have been submitted successfully. Please wait for
        approval.
      </p>
      <button
        onClick={onOkClick}
        className="px-8 py-3 bg-darkBlue text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        OK
      </button>
    </div>
  );
};

export default ThankYouPage;
