import React, { useState, useEffect } from "react";
import InvoiceSection from "./InvoiceSection";

const dummyData = {
  orderNumber: "#0123456789",
  invoiceNumber: "#FHJD12343252346",
  orderDate: "DD-MMM-YYYY",
  invoiceDate: "DD-MMM-YYYY",
  vendorName: "Vendor @Registered Name",
  shippingAddress: "",
  billingAddress: "",
  products: [
    {
      name: "Speaker",
      qty: 1,
      grossAmount: 2000.0,
      discount: 20.0,
      totalPayable: 1980.0,
    },
  ],
};

const BillSummary = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Using dummy data for now
    setData(dummyData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-10 ml-20">
      <h1 className="text-3xl font-bold mb-6">Bill Summary</h1>
      <div className="space-y-8">
        <InvoiceSection data={data} />
        <InvoiceSection data={data} />
      </div>
    </div>
  );
};
      
export default BillSummary;
