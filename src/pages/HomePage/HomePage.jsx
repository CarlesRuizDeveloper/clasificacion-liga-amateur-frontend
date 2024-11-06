import React from 'react';
import TablaLiga from '../../components/TablaLiga/TablaLiga';
import TablaJornada from '../../components/TablaJornada/TablaJornada';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="jornada-container">
                <TablaJornada />
            </div>
            <div className="clasificacion-container">
                <TablaLiga />
            </div>
            <footer className="footer">
                <p>Desarrollado por <span>Carles Ruiz</span></p>
                <a href="https://www.linkedin.com/in/carles-ruiz-montejo-developer/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin linkedin-icon"></i>
                </a>
            </footer>
        </div>
    );
};

export default HomePage;
