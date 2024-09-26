// AuthGuard.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
    children: ReactNode; 
}

const AuthGuardLayout: React.FC<AuthGuardProps> = () => {
    const token = localStorage.getItem('token'); 

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <>{<Navigate to="/dashboard" />}</>; 
};

export default AuthGuardLayout;
