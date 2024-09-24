// AuthGuard.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
    children: ReactNode; // تحديد نوع children
}

const AuthGuardLayout: React.FC<AuthGuardProps> = ({ children }) => {
    const token = localStorage.getItem('token'); // تحقق من وجود الـ token

    if (!token) {
        return <Navigate to="/login" />; // إعادة توجيه المستخدم إلى صفحة الدخول
    }

    return <>{children}</>; // إذا كان المستخدم مسجلاً الدخول، قم بعرض المحتوى
};

export default AuthGuardLayout;
