import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'><span className="loading loading-spinner loading-xl "></span></div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;