import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import rawData from '../../../orders.json';
import { useNavbar } from '../../context/NavContext';
import Order from './Order';

const ITEMS_PER_PAGE = 20;

const OrderHistory = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const {isopen}=useNavbar()
  useEffect(() => {
    setData(rawData);
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.orderDate) - new Date(a.orderDate);
    }
    return new Date(a.orderDate) - new Date(b.orderDate);
  });

  const filteredData = sortedData.filter((order) => {
    return (
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderStatus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.paymentStatus.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <>
    <Order/>
    <div className={`m-auto -mt-10 p-20 shadow-4xl ${isopen? 'ml-64' : 'ml-0'} font-poppins`}>
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Orders</h2>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border rounded p-2 pl-8"
          />
          <FaSearch className="absolute left-2 top-3 text-gray-500" />
        </div>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="border rounded p-2"
        >
          <option value="newest">Sort by: Newest</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-lightGray text-white">
              <th className="p-2 text-center font-semibold">Order Number</th>
              <th className="p-2 text-center font-semibold">Order Date</th>
              <th className="p-2 text-center font-semibold">Vendor</th>
              <th className="p-2 text-center font-semibold">Qtd. Items</th>
              <th className="p-2 text-center font-semibold">Rates</th>
              <th className="p-2 text-center font-semibold">Order Status</th>
              <th className="p-2 text-center font-semibold">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((order, index) => (
              <tr key={index} className="hover:bg-gray-100 text-center">
                <td className="p-2">{order.orderNumber}</td>
                <td className="p-2">{new Date(order.orderDate).toLocaleDateString()}</td>
                <td className="p-2">{order.vendor}</td>
                <td className="p-2">{order.qtyItems}</td>
                <td className="p-2">{order.rates}</td>
                <td className="p-2">{order.orderStatus}</td>
                <td className="p-2">{order.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">Showing data {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length}</span>
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
    </>
  );
};

export default OrderHistory;
