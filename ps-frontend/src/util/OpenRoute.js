import React, { useContext } from 'react'
import { Navigate, useLocation } from "react-router-dom"
import AuthContext from '../context/auth-context';


const OpenRoute = ({ children }) => {
    const context = useContext(AuthContext);
    let location = useLocation();

    if (context.isLoggedIn && location.pathname === "/login") {
        return <Navigate to="/products" state={{ from: location }} />
    }
    return children

};

export default OpenRoute;