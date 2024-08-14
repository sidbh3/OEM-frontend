import React from "react";
import BackButton from "../assets/BackButton.png";
import { Link } from "react-router-dom";
import Ellipse from "../assets/Ellipse.png"

const OnboardForm = ({ topheading }) => {
  return (
    <>
      <div className="px-32 mt-3 w-full relative">
        <img src={Ellipse} alt="Ellipse" className=" fixed top-0 left-0 -z-10 opacity-40" />
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
            <form>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="Department"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="Driving License Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="License Expiry Date"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="Address Line 3"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <input
                type="text"
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
                  placeholder="Business Name"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded  border outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="Department"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="Office Address"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="Driving License Number"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
                  placeholder="Address Line 3"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
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
                  placeholder="GST"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded  border outline-none"
                />
                <input
                  type="text"
                  placeholder="CGST"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
              </div>
              <div className="flex justify-between my-4">
                <input
                  type="text"
                  placeholder="SGST"
                  className="w-[35rem] border-blue-600 p-3 px-8 pr-10 rounded border outline-none"
                />
                <input
                  type="text"
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
            <input type="checkbox" />
            <label>
              Policy I have read and understand the Company policy and
              procedures.
            </label>
          </div>

          <div className="flex justify-end gap-12 mb-10 mt-5">
            <button className="bg-gray-300 text-gray-600 px-4 p-2 font-bold rounded-lg hover:bg-black hover:text-white duration-500">
              Reset
            </button>
            <button className="bg-darkBlue text-white px-4 p-2 rounded-lg font-bold hover:bg-black hover:text-white duration-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardForm;
