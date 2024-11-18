import { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AutoLogout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const verificarAutenticacion = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) return;

            try {
                const response = await fetch("https://canboada.purusistemas.com/api/user", { 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                
                if (!response.ok) {
                    throw new Error('Token inválido');
                }
            } catch (error) {
                console.error('Token inválido:', error);
                logout();
                navigate('/login');
            }
        };

        verificarAutenticacion();
    }, [logout, navigate]);

    return null;
};

export default AutoLogout;
