import React, { useEffect, useState } from 'react';
import FilaPartido from '../FilaPartido/FilaPartido';
import './TablaJornada.css';

const TablaJornada = () => {
    const [partidos, setPartidos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerPartidos = async () => {
            try {
                setCargando(true);
                const respuesta = await fetch('http://localhost:8000/api/partidos?jornada=1');
                
                if (!respuesta.ok) {
                    throw new Error('Error al obtener los partidos');
                }

                const datos = await respuesta.json();
                setPartidos(datos);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        };

        obtenerPartidos();
    }, []);

    return (
        <div className="tabla-jornada-contenedor">
            <h2 className="titulo-jornada">Partidos de la Jornada 1</h2>
            {cargando ? (
                <p className="mensaje-cargando">Cargando datos de los partidos...</p>
            ) : error ? (
                <p className="mensaje-error">{error}</p>
            ) : (
                <table className="tabla-jornada-table">
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {partidos.map(partido => (
                            <FilaPartido key={partido.id} partido={partido} />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TablaJornada;
