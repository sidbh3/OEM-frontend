import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import RequestOemTable from '../components/RequestOemTable'
import { useNavbar } from '../context/NavContext';

const RequestOemTablePage = () => {
    const { isopen } = useNavbar();
    return (
      <>
        <Navbar />
        <div className={`${isopen ? "ml-0" : "ml-5"}`}>
          <RequestOemTable />
        </div>
      </>
    );
}

export default RequestOemTablePage