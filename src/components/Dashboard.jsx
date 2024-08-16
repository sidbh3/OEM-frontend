import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  // State variables to store data fetched from the backend
  const [vendorData, setVendorData] = useState([]);

  // Backend API call or data fetching logic
  useEffect(() => {
    fetch('http://127.0.0.1:8000/vendors/total-vendors-registered/')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched vendor data:', data); // Print fetched data to the console
        setVendorData(data); // Update state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const data = {
    labels: [
      "Pre-Boarding",
      "On Boarding",
      "Under Consideration",
      "Contracted",
      "Delivery in Progress",
      "Contract Closed",
    ],
    datasets: [
      {
        data: vendorData.length > 0 ? vendorData : [20, 37, 30, 116, 50, 34], // Dynamically set data from state or use fallback
        backgroundColor: [
          "#9b59b6",
          "#2ecc71",
          "#f39c12",
          "#3498db",
          "#6c5ce7",
          "#e74c3c",
        ],
        borderWidth: 2,
        borderColor: "#ffffff",
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-6">Admin | Dashboard</h1>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Side: Total OEM Registered and Vendor Status */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">Total OEM Registered</h2>
            <p className="text-7xl font-extrabold text-blue-700 mb-4">{vendorData.total_vendors_registered
            }</p>
            <h3 className="text-lg font-bold mb-3">Vendor Status</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-base">
                <span>Pre-Boarding</span>
                <span className="flex items-center">
                  <span className="w-4 h-4 bg-purple-600 mr-2 inline-block rounded"></span>
                  <span className="text-blue-700 font-bold">20</span>
                </span>
              </li>
              <li className="flex justify-between items-center text-base">
                <span>On Boarding</span>
                <span className="flex items-center">
                  <span className="w-4 h-4 bg-green-600 mr-2 inline-block rounded"></span>
                  <span className="text-blue-700 font-bold">37</span>
                </span>
              </li>
              <li className="flex justify-between items-center text-base">
                <span>Contract</span>
              </li>
              <li className="ml-4">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center text-base">
                    <span>Under Consideration</span>
                    <span className="flex items-center">
                      <span className="w-4 h-4 bg-yellow-600 mr-2 inline-block rounded"></span>
                      <span className="text-blue-700 font-bold">30</span>
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-base">
                    <span>Contracted</span>
                    <span className="flex items-center">
                      <span className="w-4 h-4 bg-blue-600 mr-2 inline-block rounded"></span>
                      <span className="text-blue-700 font-bold">116</span>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="flex justify-between items-center text-base">
                <span>Delivery in Progress</span>
                <span className="flex items-center">
                  <span className="w-4 h-4 bg-indigo-600 mr-2 inline-block rounded"></span>
                  <span className="text-blue-700 font-bold">50</span>
                </span>
              </li>
              <li className="flex justify-between items-center text-base">
                <span>Contract Closed</span>
                <span className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 mr-2 inline-block rounded"></span>
                  <span className="text-blue-700 font-bold">34</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side: Pie Chart */}
          <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0">
            <div className="bg-blue-50 rounded-lg p-4 shadow-md flex flex-col justify-center items-center w-64 h-64">
              <h4 className="text-center font-semibold mb-2">OEM</h4>
              <div className="w-full h-52">
                <Pie data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
