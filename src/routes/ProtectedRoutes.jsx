import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const { user } = useAuth()
    if (user?.role !== 'admin') {
        return <Navigate to="/login" />;
    }
    return children;
}

export default ProtectedRoutes