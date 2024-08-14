import React from "react";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar/Navbar";
import { useNavbar } from "../context/NavContext";

const Components = () => {
  const {isopen,setIsopen}=useNavbar()
  return (
    <>
      <Navbar/>
      <h1>Components</h1>
      <div className={`${isopen? 'ml-72' : 'ml-0'}`}>
      <ProductGrid />
      </div>
    </>
  );
};

export default Components;
