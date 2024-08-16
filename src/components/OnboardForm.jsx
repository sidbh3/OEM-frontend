import React from "react";
import BackButton from "../assets/BackButton.png";
import { Link } from "react-router-dom";
import Ellipse from "../assets/Ellipse.png";

const OnboardForm = ({ topheading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend integration template (commented out)
    // const formData = {
    //   personalInfo: {
    //     firstName: e.target.firstName.value,
    //     lastName: e.target.lastName.value,
    //     department: e.target.department.value,
    //     phoneNumber: e.target.phoneNumber.value,
    //     drivingLicenseNumber: e.target.drivingLicenseNumber.value,
    //     licenseExpiryDate: e.target.licenseExpiryDate.value,
    //     addressLine1: e.target.addressLine1.value,
    //     addressLine2: e.target.addressLine2.value,
    //     addressLine3: e.target.addressLine3.value,
    //     pinCode: e.target.pinCode.value,
    //     state: e.target.state.value,
    //   },
    //   businessInfo: {
    //     businessName: e.target.businessName.value,
    //     businessPhoneNumber: e.target.businessPhoneNumber.value,
    //     businessDepartment: e.target.businessDepartment.value,
    //     officeAddress: e.target.officeAddress.value,
    //     businessDrivingLicenseNumber: e.target.businessDrivingLicenseNumber.value,
    //     businessAddressLine1: e.target.businessAddressLine1.value,
    //     businessAddressLine2: e.target.businessAddressLine2.value,
    //     businessAddressLine3: e.target.businessAddressLine3.value,
    //     businessPinCode: e.target.businessPinCode.value,
    //     businessState: e.target.businessState.value,
    //   },
    //   gstInfo: {
    //     gst: e.target.gst.value,
    //     cgst: e.target.cgst.value,
    //     sgst: e.target.sgst.value,
    //     billingAddress: e.target.billingAddress.value,
    //   },
    //   policyAgreement: e.target.policyAgreement.checked,
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
    <>
      <div className="px-32 mt-3 w-full relative">
        <img src={Ellipse} alt="Ellipse" className="fixed top-0 left-0 -z-10 opacity-40" />
        <h4 className="text-center underline text-xl underline-offset-8">
          {topheading}
        </h4>

        <Link to={"/"}>
          <img
            src={BackButton}
            alt="BackButton"
            className="w-[24px] h-[24px] cursor-pointer absolute top-3 right-10"
          />
        </Link>

        <div className="w-full mt-10">
          <h2 className="font-semibold">Personal Information</h2>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="drivingLicenseNumber"
                  placeholder="Driving License Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="licenseExpiryDate"
                  placeholder="License Expiry Date"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="addressLine1"
                  placeholder="Address Line 1"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="addressLine2"
                  placeholder="Address Line 2"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="addressLine3"
                  placeholder="Address Line 3"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="pinCode"
                  placeholder="PIN Code"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
              />
            </form>
          </div>
        </div>

        <div className="w-full mt-5">
          <h2 className="font-semibold">Business Information</h2>
          <div className="">
            <form>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="businessPhoneNumber"
                  placeholder="Phone Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="businessDepartment"
                  placeholder="Department"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="officeAddress"
                  placeholder="Office Address"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="businessDrivingLicenseNumber"
                  placeholder="Driving License Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="businessAddressLine1"
                  placeholder="Address Line 1"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="businessAddressLine2"
                  placeholder="Address Line 2"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="businessAddressLine3"
                  placeholder="Address Line 3"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="businessPinCode"
                  placeholder="PIN Code"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="businessState"
                  placeholder="State"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="w-full mt-5">
          <h2 className="font-semibold">GST Information</h2>
          <div className="">
            <form>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="gst"
                  placeholder="GST"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="cgst"
                  placeholder="CGST"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  name="sgst"
                  placeholder="SGST"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  name="billingAddress"
                  placeholder="Billing Address"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="w-full mt-5">
          <h3 className="font-bold">Policy</h3>
          <div className="flex gap-2">
            <input type="checkbox" name="policyAgreement" />
            <label>
              Policy I have read and understand the Company policy and
              procedures.
            </label>
          </div>

          <div className="flex justify-end gap-12 mb-10 mt-5">
            <button
              type="reset"
              className="bg-gray-300 text-gray-600 px-4 p-2 font-bold rounded-lg hover:bg-black hover:text-white duration-500"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-darkBlue text-white px-4 p-2 rounded-lg font-bold hover:bg-black hover:text-white duration-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardForm;
