import React, { useEffect, useState } from 'react';
import FilaEquipo from '../FilaEquipo/FilaEquipo';
import './TablaLiga.css';

const TablaLiga = () => {
    const [equipos, setEquipos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerEquipos = async () => {
            try {
                setCargando(true);
                const respuesta = await fetch('http://localhost:8000/api/equipos');
                if (!respuesta.ok) {
                    throw new Error('Error al obtener los datos de los equipos');
                }
                const datos = await respuesta.json();
                setEquipos(datos);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        };

        obtenerEquipos();
    }, []);

    return (
        <div className="tabla-liga-contenedor">
            <h1 className="titulo-liga">Clasificación de la Liga</h1>
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
                                    <th>#</th>
                                    <th>Equipo</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipos.map((equipo, index) => (
                                    <FilaEquipo key={equipo.id} equipo={equipo} index={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="tabla-liga-desplazable">
                        <table className="tabla-liga-table">
                            <thead>
                                <tr>
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
                                {equipos.map((equipo) => (
                                    <FilaEquipo key={equipo.id} equipo={equipo} />
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
