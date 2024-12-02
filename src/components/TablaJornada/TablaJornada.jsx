import React, { useState, useEffect } from 'react';
import FilaPartido from '../FilaPartido/FilaPartido';
import useJornada from '../../hooks/useJornada'; 
import './TablaJornada.css';

const TablaJornada = () => {
    const [jornadaSeleccionada, setJornadaSeleccionada] = useState(null);
    const [ultimaJornada, setUltimaJornada] = useState(1);

    useEffect(() => {
        const obtenerUltimaJornada = async () => {
            try {
                const respuesta = await fetch('https://canboada.purusistemas.com/api/ultima-jornada');
                if (!respuesta.ok) {
                    throw new Error('Error al obtener la última jornada jugada');
                }
                const { ultima_jornada } = await respuesta.json();
                setJornadaSeleccionada(ultima_jornada || 1);
                setUltimaJornada(ultima_jornada || 1);
            } catch (error) {
                console.error('Error al obtener la última jornada jugada:', error);
                setJornadaSeleccionada(1);
            }
        };
        obtenerUltimaJornada();
    }, []);

    const { partidos, cargando, error } = useJornada(jornadaSeleccionada); 

    const manejarCambioJornada = (event) => {
        setJornadaSeleccionada(event.target.value);
    };

    return (
        <div className="tabla-jornada-contenedor">
            <div className="selector-jornada-contenedor">
                <select
                    id="jornada-select"
                    value={jornadaSeleccionada || ultimaJornada}
                    onChange={manejarCambioJornada}
                    className="selector-jornada"
                >
                    {[...Array(14).keys()].map((jornada) => (
                        <option key={jornada + 1} value={jornada + 1}>
                            Jornada {jornada + 1}
                        </option>
                    ))}
                </select>
            </div>
            {cargando ? (
                <p className="mensaje-cargando">Cargando datos de los partidos...</p>
            ) : error ? (
                <p className="mensaje-error">{error}</p>
            ) : (
                <table className="tabla-jornada-table">
                    <tbody>
                        {partidos.map((partido) => (
                            <FilaPartido key={partido.id} partido={partido} />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TablaJornada;
