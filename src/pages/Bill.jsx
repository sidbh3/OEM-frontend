

import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import { useNavbar } from '../context/NavContext';
import BillSummary from '../components/BillSummary/BillSummary';

const Bill= () => {
  const {isopen,setIsopen}=useNavbar()
  return (
    <>
      <Navbar/>
      <div className={`mt-16 ${isopen?'ml-72':'ml-0'}`}>
      < BillSummary/>
      </div>
    </>
  );
};

export default Bill;


