import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; 
import './FilaPartido.css';

const FilaPartido = ({ partido }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const [editando, setEditando] = useState(false);
    const [golesLocal, setGolesLocal] = useState(partido.goles_local);
    const [golesVisitante, setGolesVisitante] = useState(partido.goles_visitante);

    const handleEditarClick = () => {
        setEditando(true);
    };

    const handleGuardarClick = () => {
       
        setEditando(false);
    };

    return (
        <tr className="fila-partido">
            <td className="escudo-equipo-td">
                {!editando && (
                    <img
                        src={partido.equipo_local.escudo_url}
                        alt={`Escudo de ${partido.equipo_local.nombre}`}
                        className="escudo-equipo-local"
                    />
                )}
            </td>
            <td className="nombre-equipo-td">{partido.equipo_local.nombre}</td>
            <td className="resultado-partido">
                {editando ? (
                    <div className="editar-resultado">
                        <div className="editar-resultado-inputs">
                            <input
                                type="number"
                                className="input-goles"
                                value={golesLocal !== null ? golesLocal : ''}
                                onChange={(e) => setGolesLocal(e.target.value)}
                            />
                            <span>-</span>
                            <input
                                type="number"
                                className="input-goles"
                                value={golesVisitante !== null ? golesVisitante : ''}
                                onChange={(e) => setGolesVisitante(e.target.value)}
                            />
                        </div>
                        <button className="guardar-boton" onClick={handleGuardarClick}>Guardar</button>
                    </div>
                ) : (
                    <div className="resultado-y-icono">
                        <span className="resultado-texto">
                            {partido.goles_local !== null && partido.goles_visitante !== null
                                ? `${partido.goles_local} - ${partido.goles_visitante}`
                                : 'Por jugar'}
                        </span>
                        {isAuthenticated && ( 
                            <div className="editar-icono-contenedor" onClick={handleEditarClick}>
                                <i className="fas fa-edit editar-icono"></i>
                            </div>
                        )}
                    </div>
                )}
            </td>
            <td className="nombre-equipo-td">{partido.equipo_visitante.nombre}</td>
            <td className="escudo-equipo-td">
                {!editando && (
                    <img
                        src={partido.equipo_visitante.escudo_url}
                        alt={`Escudo de ${partido.equipo_visitante.nombre}`}
                        className="escudo-equipo-visitante"
                    />
                )}
            </td>
        </tr>
    );
};

export default FilaPartido;
