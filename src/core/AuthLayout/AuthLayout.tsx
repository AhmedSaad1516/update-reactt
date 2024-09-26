import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
    children?: ReactNode; 
}

const AuthGuardLogin: React.FC<AuthGuardProps> = ({ children }) => {
    const token = localStorage.getItem('token');  

    if (token) {

        return <>{children &&<Navigate to="/dashboard" />}</>
      
    }else{

        return <>{children || <Navigate to="/login" />}</>;
    }


    
};

export default AuthGuardLogin;
