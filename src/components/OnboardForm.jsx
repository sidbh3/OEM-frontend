import React from "react";
import BackButton from "../assets/BackButton.png";
import { Link, useNavigate } from "react-router-dom";
import Ellipse from "../assets/Ellipse.png";

const OnboardForm = ({ topheading }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      personalInfo: {
        firstName: e.target.first_name.value,
        lastName: e.target.last_name.value,
        department: e.target.department.value,
        phoneNumber: e.target.phone_number.value,
        drivingLicenseNumber: e.target.driving_license_number.value,
        licenseExpiryDate: e.target.license_expiry_date.value,
        addressLine1: e.target.address_line1.value,
        addressLine2: e.target.address_line2.value,
        addressLine3: e.target.address_line3.value,
        pinCode: e.target.pin_code.value,
        state: e.target.state.value,
      },
      businessInfo: {
        businessName: e.target.business_name.value,
        businessPhoneNumber: e.target. phone_number.value,
        businessDepartment: e.target.department .value,
        officeAddress: e.target.office_address.value,
        businessDrivingLicenseNumber: e.target.driving_license_number.value,
        businessAddressLine1: e.target.address_line1.value,
        businessAddressLine2: e.target.address_line2.value,
        businessAddressLine3: e.target.address_line3.value,
        businessPinCode: e.target.pin_code.value,
        businessState: e.target.state .value,
      },
      gstInfo: {
        gst: e.target.gst.value,
        cgst: e.target.cgst.value,
        sgst: e.target.sgst.value,
        billingAddress: e.target.billing_address .value,
      },
      policyAgreement: e.target.policyAgreement.checked,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/create-oem/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      navigate('/'); // Redirect to home after successful form submission
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please check the console for details.');
    }

    // Clear the form fields after submission
    e.target.reset();
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

        <form onSubmit={handleSubmit}>
          <div className="w-full mt-10">
            <h2 className="font-semibold">Personal Information</h2>
            <div className="flex justify-between my-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                required
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
          </div>

          <div className="w-full mt-5">
            <h2 className="font-semibold">Business Information</h2>
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
          </div>

          <div className="w-full mt-5">
            <h2 className="font-semibold">GST Information</h2>
            <div className="flex justify-between my-4">
              <input
                type="text"
                name="gst"
                placeholder="GST Number"
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
          </div>

          <div className="mt-8">
            <input
              type="checkbox"
              name="policyAgreement"
              className="h-5 w-5"
              required
            />
            <label className="ml-3 text-lg font-semibold">
              I agree to the policy agreement
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default OnboardForm;
