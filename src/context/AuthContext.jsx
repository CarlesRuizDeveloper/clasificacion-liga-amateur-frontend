import { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
