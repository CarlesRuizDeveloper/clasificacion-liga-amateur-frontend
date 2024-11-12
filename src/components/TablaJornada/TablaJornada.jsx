import React, { useEffect, useState, useContext } from 'react';
import FilaPartido from '../FilaPartido/FilaPartido';
import { AuthContext } from '../../context/AuthContext';
import './TablaJornada.css';

const TablaJornada = () => {
    const [partidos, setPartidos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [jornadaSeleccionada, setJornadaSeleccionada] = useState(1);
    const { isAuthenticated } = useContext(AuthContext);

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

    const actualizarPartido = async (partidoId, golesLocal, golesVisitante) => {
        try {
            const respuesta = await fetch(`http://localhost:8000/api/partidos/${partidoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    goles_local: golesLocal,
                    goles_visitante: golesVisitante,
                }),
            });

            if (!respuesta.ok) {
                throw new Error('Error al actualizar el partido');
            }
            
            setPartidos((prevPartidos) =>
                prevPartidos.map((p) =>
                    p.id === partidoId ? { ...p, goles_local: golesLocal, goles_visitante: golesVisitante } : p
                )
            );
        } catch (error) {
            console.error('Error al actualizar el partido:', error);
            alert('Hubo un error al actualizar el partido');
        }
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
                    <tbody>
                        {partidos.map((partido) => (
                            <FilaPartido key={partido.id} partido={partido} actualizarPartido={actualizarPartido} />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TablaJornada;
