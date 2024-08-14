import React from "react";
import { Link } from "react-router-dom";

const RequestButton = () => {

  return (
    <div className={`flex gap-3 my-5 `}>
      <Link to={"/oem-request"} className="focus:bg-gray-200 focus:text-black">
        <button className="bg-gray-500 focus:bg-gray-200 focus:text-black text-white shadow-inner duration-300 hover:text-black hover:bg-gray-200 p-1 px-4 rounded font-semibold">
          OEM
        </button>
      </Link>
      <Link to={"/vendor-request"}>
        <button className="bg-gray-500 text-white shadow-inner duration-300 hover:text-black hover:bg-gray-200 p-1 px-5 rounded font-semibold">
          Vendor
        </button>
      </Link>
    </div>
  );
};

export default RequestButton;
