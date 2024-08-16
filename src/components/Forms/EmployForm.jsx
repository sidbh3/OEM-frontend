import React from "react";
import BackButton from "../../assets/BackButton.png";
import { Link } from "react-router-dom";

const EmployForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend integration template (commented out)
    // const formData = {
    //   firstName: e.target.firstName.value,
    //   middleName: e.target.middleName.value,
    //   lastName: e.target.lastName.value,
    //   gender: e.target.gender.value,
    //   employeeId: e.target.employeeId.value,
    //   doj: e.target.doj.value,
    //   workEmail: e.target.workEmail.value,
    //   workLocation: e.target.workLocation.value,
    //   designation: e.target.designation.value,
    //   department: e.target.department.value,
    //   declaration: e.target.declaration.checked,
    // };

    // fetch('https://your-backend-api.com/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

    console.log("Form submitted"); // Placeholder for actual form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
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
            name="firstName"
            placeholder="First Name"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="doj"
            placeholder="DOJ"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="workEmail"
            placeholder="Work Email"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="workLocation"
            placeholder="Work Location"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            className="p-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            className="p-3 border border-blue-600 rounded-md focus:outline-none"
          />
        </div>
        <h2 className="text-lg font-bold mt-6">Declaration</h2>
        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="declaration"
              id="declaration"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="declaration"
              className="ml-2 text-sm font-semibold"
            >
              Policy I have read and understand the Company policy and
              procedures.
            </label>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="reset"
            className="px-6 py-2 rounded-3xl border border-gray-400 font-bold text-gray-500 bg-[#A9A9A9] hover:bg-black hover:text-white duration-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-3xl bg-darkBlue font-bold text-white shadow-lg hover:bg-black hover:text-white duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployForm;
