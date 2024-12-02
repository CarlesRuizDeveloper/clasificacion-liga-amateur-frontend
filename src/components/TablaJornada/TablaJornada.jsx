import React, { useState } from 'react';
import FilaPartido from '../FilaPartido/FilaPartido';
import useJornada from '../../hooks/useJornada'; 
import './TablaJornada.css';

const TablaJornada = () => {
    const [jornadaSeleccionada, setJornadaSeleccionada] = useState(1);
    const { partidos, cargando, error } = useJornada(jornadaSeleccionada); 

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
