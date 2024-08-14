import React from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '../../context/NavContext'

const Order = () => {
  const {isopen}=useNavbar()
  return (
    <div className={`flex justify-around mt-5 ${isopen?'ml-40':'ml-0'}`}>

        <button className='bg-blue-400 p-1 px-4 rounded-lg font-semibold'>Order Status</button>
        <Link to={"/orderhistory"} className='bg-blue-400 p-2 px-5 rounded-lg font-semibold'>Order History</Link>
        <button className='bg-blue-400 px-5 rounded-lg font-semibold'>Cart</button>
    </div>
  )
}

export default Order