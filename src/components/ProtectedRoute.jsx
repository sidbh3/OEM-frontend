import React from 'react'
import { useAuth } from '../context/AuthContext'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {auth} =useAuth()
    if(!auth){
        <Navigate to={'/login'}></Navigate>
    }
    return children
}

export default ProtectedRoute