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
        </div>
    );
};

export default HomePage;
