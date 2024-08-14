import React, { useState, useEffect } from "react";
import VendorRow from "./VendorRow";
import { fetchVendors } from "../../services/api";
import { CiSearch } from "react-icons/ci";
import axios from 'axios'
// import "./VendorTable.css";

const VendorTable = () => {
  const [vendors, setVendors] = useState([]);
  const [search, setSearch] = useState();
  const [sortOrder, setSortOrder] = useState("high");
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getVendors = async () => {
      const vendorsData = await fetchVendors();
      setVendors(vendorsData);
      setItem(vendorsData);
    };

    getVendors();
  }, []);


  // useEffect(() => {
  //   const getVendors = async () => {
  //     const vendorsData = await axios.get('url')
  //     setVendors(vendorsData);
  //     setItem(vendorsData);
  //   };

  //   getVendors();
  // }, []);

  const handlesearch = (e) => {
    const serachitem = e.target.value.toLowerCase();
    setSearch(serachitem);
    const filterdata = vendors.filter((ele) => {
      return (
        ele.vendorName.toLowerCase().includes(serachitem) ||
        ele.oemName.toLowerCase().includes(serachitem) ||
        ele.phoneNumber.toLowerCase().includes(serachitem) ||
        ele.email.toLowerCase().includes(serachitem) ||
        ele.state.toLowerCase().includes(serachitem) ||
        ele.rating.toString().includes(serachitem)
      );
    });

    setItem(filterdata);
  };

  const sortVendors = (order) => {
    const sortedVendors = [...vendors].sort((a, b) => {
      return order === "high" ? b.rating - a.rating : a.rating - b.rating;
    });
    setVendors(sortedVendors);
    setItem(sortedVendors);
    setSortOrder(order);
  };

  return (
    <div className="w-[80%] bg-white p-20 rounded-lg m-auto font-poppins shadow-4xl">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[22px]">All Vendors</h1>

        <div className="flex gap-2 items-center">
          <CiSearch className="w-[24px] h-[24px]" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handlesearch}
            className="outline-none"
          />
        </div>

        <div className="rounded p-1">
          <span className="text-gray-400 font-normal text-xs">Sort by:</span>
          <select
            onChange={(e) => sortVendors(e.target.value)}
            value={sortOrder}
            className="font-medium text-xs">
            <option value="high"> Rating (High to Low)</option>
            <option value="low"> Rating (Low to High)</option>
          </select>
        </div>
      </div>

      <div className="p-5 mt-5 table w-full">
        <table className="w-full">
          <div className="table-header-group text-sm text-gray-300">
            <div className="table-row">
              <div className="table-cell text-left font-medium">
                Vendor Name
              </div>
              <div className="table-cell text-left font-medium">OEM Name</div>
              <div className="table-cell text-left font-medium">
                Phone Number
              </div>
              <div className="table-cell text-left font-medium">Email</div>
              <div className="table-cell text-left font-medium"> State</div>
              <div className="table-cell text-left font-medium">Rating</div>
            </div>
          </div>
          <div className="table-row-group mt-5">
            {item.map((vendor, index) => (
              <VendorRow key={index} vendor={vendor} />
            ))}
          </div>
        </table>
      </div>
    </div>
  );
};

export default VendorTable;
