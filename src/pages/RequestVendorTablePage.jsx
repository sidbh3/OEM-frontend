import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RequestVendorTable from "../components/RequestVendorTable";
import { useNavbar } from "../context/NavContext";

const RequestVendorTablePage = () => {
  const { isopen } = useNavbar();
  return (
    <>
      <Navbar />
      <div className={`${isopen ? "ml-0" : "ml-5"}`}>
        <RequestVendorTable />
      </div>
    </>
  );
};

export default RequestVendorTablePage;
