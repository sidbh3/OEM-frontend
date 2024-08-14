// src/pages/Vendors.js

import React from 'react';
import VendorTable from '../components/Tables/VendorTable';
import Navbar from '../components/Navbar/Navbar';
import { useNavbar } from '../context/NavContext';

const Vendors = () => {
  const {isopen,setIsopen}=useNavbar()
  return (
    <>
      <Navbar/>
      <div className={`${isopen? 'ml-48' : 'ml-0'}`}>
      <VendorTable />
      </div>
    </>
  );
};

export default Vendors;
