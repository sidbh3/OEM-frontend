import React, { useState, useEffect } from 'react';
// import axios from 'axios'; 
import rawData from '../request.json';
import { useNavbar } from '../context/NavContext';
import RequestButton from './RequestButton';

const ITEMS_PER_PAGE = 20;

const RequestOemTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isopen } = useNavbar();

  useEffect(() => {
   
    /*
    axios.get('YOUR_BACKEND_ENDPOINT_HERE')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
    */
    
    
    setData(rawData);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className={`m-auto -mt-10 p-20 shadow-4xl ${isopen ? 'ml-64' : 'ml-0'} font-poppins`}>
      <h1 className="text-2xl font-bold mb-4">OEM Requests</h1>
      <RequestButton/>
     
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-lightGray text-white text-left">
              <th className="p-2 font-semibold">Request Number</th>
              <th className="p-2 font-semibold">Request Date</th>
              <th className="p-2 font-semibold">OEM Name</th>
              <th className="p-2 font-semibold">Action</th>
              <th className="p-2 font-semibold">Request Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((request, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2">{request.requestNumber}</td>
                <td className="p-2">{request.requestDate}</td>
                <td className="p-2">{request.oemName}</td>
             
                <td className="p-2">
                  <button className="bg-red-400 text-white px-2 py-1 mr-2 rounded text-xs">
                    Reject
                  </button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Accept
                  </button>
                </td>
                <td className="p-2">{request.requestStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">
          Showing data {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
          {Math.min(currentPage * ITEMS_PER_PAGE, data.length)} of {data.length}
        </span>
        <div className="flex items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestOemTable;
