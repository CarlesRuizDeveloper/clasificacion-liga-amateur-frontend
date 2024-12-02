import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AutoLogout = () => {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            logout();
            navigate('/login');
        }
    }, [isAuthenticated, logout, navigate]);

    return null;
};

export default AutoLogout;
