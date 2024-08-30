import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import CloseNav from "../../assets/closenav.png";
import { useNavbar } from "../../context/NavContext";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaFileContract,
  FaCarSide,
  FaInfo,
  FaFileAlt, // Added new icon for Document
} from "react-icons/fa";
import { RiDashboard2Fill } from "react-icons/ri";
import Modal from "../Popup/Modal";
import { Register } from "../../pages/Register";

const Sidenav = () => {
  const { isopen, setIsopen } = useNavbar();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const menuItems = [
    { icon: <RiDashboard2Fill />, label: "Dashboard", link: "/dashboard" },
    { icon: <FaUser />, label: "Request", link: "/request" },
    { icon: <FaCarSide />, label: "Registration", link: "", action: openModal },
    { icon: <FaFileContract />, label: "Contract", link: '/BillSummary' },
    { icon: <FaInfo />, label: "My Info", link: "/MyInfo" },
    { icon: <FaFileAlt />, label: "Document", link: "/document" }, // New Document item added
  ];

  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`transition-width w-[${
        isopen ? "310px" : "80px"
      }] h-[100vh] flex justify-center items-center font-light shadow-3xl bg-white font-poppins rounded-tr-[50px] border-r fixed top-0 z-20 `}
    >
      <div className="absolute right-[-17px] top-[145px] cursor-pointer">
        <img
          src={CloseNav}
          className={`w-[30px] h-[30px] ${
            isopen ? "rotate-0" : "rotate-180"
          } duration-500`}
          alt="toggle icon"
          onClick={() => setIsopen(!isopen)}
        />
      </div>

      <div className="w-full px-4">
        <div className="w-full flex flex-col gap-4 bg-transparent">
          <div className="w-full flex gap-5 border-b py-2 pl-4">
            <VscSearch
              className={`text-blue-800 ${
                isopen ? "text-sm" : "text-xl cursor-pointer"
              }`}
            />
            {isopen && (
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none flex-grow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            )}
          </div>

          {filteredItems.map((item, index) => (
            <Link to={item.link} key={index} onClick={item.action || null}>
              <h2 tabIndex="0" className="sidenav-button">
                <span className={`text-blue-800 ${isopen ? "text-sm" : "text-xl"}`}>
                  {item.icon}
                </span>
                {isopen && <span>{item.label}</span>}
              </h2>
            </Link>
          ))}
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Register />
        </Modal>
      </div>
    </div>
  );
};

export default Sidenav;
