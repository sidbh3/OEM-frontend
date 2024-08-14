import React from "react";

const VendorRow = ({ vendor }) => {
  return (
    <>
    <div className="table-row">
      <div className="table-cell pt-10">{vendor.vendorName}</div >
      <div className="table-cell">{vendor.oemName}</div >
      <div className="table-cell">{vendor.phoneNumber}</div >
      <div className="table-cell">{vendor.email}</div >
      <div className="table-cell">{vendor.state}</div >
      <div className="table-cell">
        <div className="font-medium text-sm p-1 bg-lightGreen text-darkGreen rounded border border-darkGreen text-center">
          <span>{vendor.rating}</span>/5
        </div>
      </div >
    </div>
    </>
  );
};

export default VendorRow;