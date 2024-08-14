import React from "react";

const MyInfo = () => {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-10 ">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 flex gap-3 my-5">
        My Information
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="OEM - Handler name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              placeholder="OEM - Company name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="OEM - Contact Number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="OEM - Registered Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="OEM - Company Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contracts</label>
            <input
              type="text"
              placeholder="Number of contracts OEM made"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <input
              type="text"
              placeholder="OEM - Rating by Vendors"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 lg:mt-0">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex justify-center items-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="mt-4 text-center">
            <div className="text-yellow-500 text-lg md:text-xl">★★★★☆</div>
          </div>
        </div>
      </div>
      <button className="mt-8 w-full md:w-28 bg-blue-900 text-white py-2 rounded-lg">
        Logout
      </button>
    </div>
  );
};

export default MyInfo;
