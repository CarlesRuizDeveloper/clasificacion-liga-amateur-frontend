import React from 'react';
import TablaLiga from '../../components/TablaLiga/TablaLiga';
import TablaJornada from '../../components/TablaJornada/TablaJornada';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './HomePage.css';
import '../../components/Footer/Footer.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="jornada-container">
                <TablaJornada />
            </div>
            <div className="clasificacion-container">
                <TablaLiga />
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;
