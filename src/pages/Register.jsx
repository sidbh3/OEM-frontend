import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {

  return (
    <>
      
      <div className="p-10 relative">
      
        <h4 className="text-center underline text-3xl underline-offset-8">
          Registration Form
        </h4>
        <div className="flex flex-col gap-11 mt-10">
          <div>
            <h2 className="font-bold underline text-2xl">On-Boarding</h2>
            <div className="flex gap-20 mt-11">
              <Link to={"/oem-form"}>
                <button className="bg-skyBlue text-white p-2 px-8 font-bold rounded-3xl hover:text-white hover:bg-black duration-500">
                  OEM
                </button>
              </Link>
              <Link to={"/vendor-form"}>
                <button className="bg-skyBlue text-white p-2 px-8 font-bold rounded-3xl hover:text-white hover:bg-black duration-500">
                  Vendor
                </button>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold underline text-2xl underline-offset-8">
              Employee
            </h2>
            <Link to={"/employee-form"}>
              <button className="mt-11 bg-skyBlue text-white p-2 px-8 font-bold rounded-3xl hover:text-white hover:bg-black duration-500">
                Employee
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    
      {/* <img src={DownImage} alt="Down Patch" className=" absolute bottom-0 right-0" />
      <div className="p-10 overflow-x-hidden">
        <h4 className="text-center underline text-3xl underline-offset-8">
          Registration Form
        </h4>
        <div className="w-full p-16 ml-96 mt-20 flex flex-col gap-11">
          <div className=" w-full">
            <h2 className="font-bold underline text-2xl">On-Boarding</h2>
            <div className="flex gap-20 mt-11 ml-24">
              <Link to={"/oem-form"}>
            
                <button className="bg-skyBlue text-white p-2 px-8 font-bold rounded-3xl hover:text-white hover:bg-black duration-500">
                  OEM
                </button>
              </Link>
              <Link to={'/vendor-form'}>
              <button className="bg-skyBlue text-white p-2 px-8 font-bold rounded-3xl hover:text-white hover:bg-black duration-500">
                Vendor
              </button></Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold underline text-2xl underline-offset-8">
              Employee
            </h2>
            <Link to={'/employee-form'}>
            <button className="mt-11 ml-24 bg-skyBlue text-white p-2 px-8 font-bold rounded-3xl hover:text-white hover:bg-black duration-500">
              Employee
            </button></Link>
          </div>
        </div>
      </div> */}
    </>
  );
};
