import React from "react";
import BackButton from "../../assets/BackButton.png";
import { Link } from "react-router-dom";

const EmployForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-6 underline underline-offset-8">
            Employee Registration Form
          </h2>
          <Link to={"/"}>
            <img
              className="w-[16px] h-[16px] cursor-pointer"
              src={BackButton}
              alt="Back Button"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Middle Name"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Gender"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Employee ID"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="DOJ"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          
          <input
            type="text"
            placeholder="Work Location"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Designation"
            className="p-3 border border-blue-600 rounded-md focus:outline-none Afocus:ring-2 "
          />
          <input
            type="text"
            placeholder="Department"
            className="p-3 border border-blue-600 rounded-md focus:outline-none "
          />
        </div>
        <h2 className="text-lg font-bold mt-6">Declaration</h2>
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="declaration"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="declaration" className="ml-2 text-sm font-semibold">
              Policy I have read and understand the Company policy and
              procedures.
            </label>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="reset"
            className="px-6 py-2 rounded-3xl border border-gray-400 font-bold text-gray-500 bg-[#A9A9A9] hover:bg-black hover:text-white duration-500">
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-3xl bg-darkBlue font-bold text-white shadow-lg hover:bg-black hover:text-white duration-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployForm;
