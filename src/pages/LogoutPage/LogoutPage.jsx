import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './LogoutPage.css';

const LogoutPage = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch("https://canboada.purusistemas.com/api/logout", { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            

            if (!response.ok) {
                throw new Error('Error al cerrar sesión.');
            }

            logout();
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="logout-page">
            <div className="logout-confirmation">
                <h2>¿Estás seguro de que deseas cerrar sesión?</h2>
                <div className="logout-buttons">
                    <button onClick={handleLogout} className="logout-button confirm">Sí, cerrar sesión</button>
                    <button onClick={handleCancel} className="logout-button cancel">Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
