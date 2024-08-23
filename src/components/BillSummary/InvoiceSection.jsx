import React from "react";
import ProductTable from "./ProductTable";

const InvoiceSection = ({ data }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white">
      <div className="flex justify-between mb-4">
        {/* Vendor and Addresses */}

        <div className="w-1/2 pr-4">
          <p className="font-bold mb-2">Sold By: {data.vendorName}</p>
          <div className="mb-2">
            <p className="text-sm font-semibold">Shipping Address:</p>
            <input
              type="text"
              value={data.shippingAddress}
              className="border w-full p-1 mt-1 text-sm rounded"
              readOnly
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Billing Address:</p>
            <input
              type="text"
              value={data.billingAddress}
              className="border w-full p-1 mt-1 text-sm rounded"
              readOnly
            />
          </div>
        </div>
        {/* Order and Invoice Details */}
        <div className="w-1/2 text-right pl-4 flex flex-col items-end">
          <div className="flex justify-end items-center mb-4">
            <img
              src="https://via.placeholder.com/80"
              alt="QR Code"
              className="mr-4"
            />
            <div className="text-right">
              <p className="font-bold text-sm">Invoice Number</p>
              <p className="text-lg">{data.invoiceNumber}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold">Order Number</p>
            <p className="text-lg">{data.orderNumber}</p>
          </div>
          <div>
            <p className="text-sm">Order Date: {data.orderDate}</p>
            <p className="text-sm">Invoice Date: {data.invoiceDate}</p>
          </div>
        </div>
      </div>
      <ProductTable products={data.products} />
      
    </div>
  );
};

export default InvoiceSection;
