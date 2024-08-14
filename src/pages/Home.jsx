import React from 'react'
import { useNavbar } from '../context/NavContext'
import Vendors from './Vendor'
import Login from '../components/Login'
import {BrowserRouter, Router,Route} from 'react-router-dom'

const Home = () => {
    const {isopen,setIsopen}=useNavbar()
  return (
    <div>
      
    </div>
  )
}

export default Home