import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            verificarToken(token);
        }
    }, []);

    const verificarToken = async (token) => {
        try {
            const response = await fetch('http://localhost:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                throw new Error('Token inválido');
            }
        } catch (error) {
            console.error('Error al verificar el token:', error);
            logout();
        }
    };

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
