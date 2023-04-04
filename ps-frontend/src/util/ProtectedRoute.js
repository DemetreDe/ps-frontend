import React, { useContext } from 'react'
import { Navigate, useLocation } from "react-router-dom"
import AuthContext from '../context/auth-context';

const ProtectedRoute = ({ children }) => {
    const context = useContext(AuthContext);
    let location = useLocation();

    if (!context.isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children

};

export default ProtectedRoute;