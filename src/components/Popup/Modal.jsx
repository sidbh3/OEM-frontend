import React from "react";
import { IoClose } from "react-icons/io5";

import DownImage from "../../assets/Ellipse3.png";


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      
      <div className="bg-white px-10 rounded-lg max-w-3xl w-full overflow-y-auto relative">
      <img
        src={DownImage}
        alt="Down Patch"
        className="absolute w-72 h-64 bottom-0 right-0"
      />
        <button
          className="absolute top-12 right-10 text-2xl text-gray-500 hover:text-red-500 cursor-pointer z-10"
          onClick={onClose}
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
