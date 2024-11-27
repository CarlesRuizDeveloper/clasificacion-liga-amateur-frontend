import React, { useEffect, useState } from 'react';
import FilaEquipo from '../FilaEquipo/FilaEquipo';
import './TablaLiga.css';

const TablaLiga = () => {
    const [equipos, setEquipos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerClasificacion = async () => {
            try {
                setCargando(true);
                const respuesta = await fetch("https://canboada.purusistemas.com/api/clasificacion/ultima");

                if (!respuesta.ok) {
                    throw new Error('Error al obtener los datos de la clasificación de la última jornada');
                }
                const datos = await respuesta.json();
                setEquipos(datos);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        };

        obtenerClasificacion();
    }, []);

    return (
        <div className="tabla-liga-contenedor">
            {cargando ? (
                <p className="mensaje-cargando">Cargando datos de la liga...</p>
            ) : error ? (
                <p className="mensaje-error">{error}</p>
            ) : (
                <div className="tabla-liga">
                    <div className="tabla-liga-fijo">
                        <table className="tabla-liga-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="titulo-equipo">Equipo</th>
                                    <th>Pts</th>
                                    <th>Pts Fed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipos.map((equipo, index) => (
                                    <FilaEquipo key={`fijo-${equipo.equipo}`} equipo={equipo} index={index} tipo="fijo" />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="tabla-liga-desplazable">
                        <table className="tabla-liga-table">
                            <thead>
                                <tr>
                                    <th>Pts Com</th>
                                    <th>PJ</th>
                                    <th>PG</th>
                                    <th>PE</th>
                                    <th>PP</th>
                                    <th>GF</th>
                                    <th>GC</th>
                                    <th>DG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipos.map((equipo, index) => (
                                    <FilaEquipo key={`desplazable-${equipo.equipo}`} equipo={equipo} index={index} tipo="desplazable" />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TablaLiga;
