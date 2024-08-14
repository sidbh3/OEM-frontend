

import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import { useNavbar } from '../context/NavContext';

import MyInfo from '../components/MyInfo';

const Info = () => {
  const {isopen,setIsopen}=useNavbar()
  return (
    <>
      <Navbar/>
      <div className={`${isopen? 'ml-48' : 'ml-0'}`}>
      <MyInfo />
      </div>
    </>
  );
};

export default Info;


