// AuthGuard.d.ts
import { ReactNode } from 'react';

interface AuthGuardProps {
    children: ReactNode;
}

declare const AuthGuard: ({ children }: AuthGuardProps) => JSX.Element;

export default AuthGuard;
