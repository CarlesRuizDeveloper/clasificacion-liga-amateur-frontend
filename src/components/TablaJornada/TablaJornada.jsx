import React, { useEffect, useState } from 'react';
import FilaPartido from '../FilaPartido/FilaPartido';
import './TablaJornada.css';

const TablaJornada = () => {
    const [partidos, setPartidos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [jornadaSeleccionada, setJornadaSeleccionada] = useState(1); 

    useEffect(() => {
        const obtenerPartidos = async () => {
            try {
                setCargando(true);
                const respuesta = await fetch(`http://localhost:8000/api/partidos?jornada=${jornadaSeleccionada}`);
                
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
    }, [jornadaSeleccionada]); 
    const manejarCambioJornada = (event) => {
        setJornadaSeleccionada(event.target.value);
    };

    return (
        <div className="tabla-jornada-contenedor">
            <div className="selector-jornada-contenedor">
                <select
                    id="jornada-select"
                    value={jornadaSeleccionada}
                    onChange={manejarCambioJornada}
                    className="selector-jornada"
                >
                    {[...Array(10).keys()].map((jornada) => (
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
                    <thead>
                        <tr></tr>
                    </thead>
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
