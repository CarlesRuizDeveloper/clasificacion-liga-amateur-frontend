import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './FilaPartido.css';

const FilaPartido = ({ partido, onPartidoUpdated }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const [editando, setEditando] = useState(false);
    const [golesLocal, setGolesLocal] = useState(partido.goles_local);
    const [golesVisitante, setGolesVisitante] = useState(partido.goles_visitante);
    const [ptsFedLocal, setPtsFedLocal] = useState(partido.pts_fed_local);
    const [ptsFedVisitante, setPtsFedVisitante] = useState(partido.pts_fed_visitante);

    const handleEditarClick = () => {
        setEditando(true);
    };

    const handleGuardarClick = async () => {
        try {
            const response = await fetch(`https://canboada.purusistemas.com/api/partidos/${partido.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                },
                body: JSON.stringify({
                    equipo_local_id: partido.equipo_local_id,
                    equipo_visitante_id: partido.equipo_visitante_id,
                    goles_local: golesLocal,
                    goles_visitante: golesVisitante,
                    pts_fed_local: ptsFedLocal,
                    pts_fed_visitante: ptsFedVisitante,
                }),
            });

            if (!response.ok) {
                throw new Error('Error al guardar los cambios');
            }

            alert('Cambios guardados correctamente');
            setEditando(false);

            onPartidoUpdated();

        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            alert('Hubo un error al guardar los cambios');
        }
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
                            <p>Goles</p>
                            <input
                                type="number"
                                className="input-goles"
                                value={golesLocal !== null ? golesLocal : ''}
                                onChange={(e) => setGolesLocal(e.target.value)}
                            />
                            <input
                                type="number"
                                className="input-goles"
                                value={golesVisitante !== null ? golesVisitante : ''}
                                onChange={(e) => setGolesVisitante(e.target.value)}
                            />
                            <p>Pts Fed</p>
                            <input
                                type="number"
                                className="input-goles"
                                value={ptsFedLocal !== null ? ptsFedLocal : ''}
                                onChange={(e) => setPtsFedLocal(e.target.value)}
                            />
                            <input
                                type="number"
                                className="input-goles"
                                value={ptsFedVisitante !== null ? ptsFedVisitante : ''}
                                onChange={(e) => setPtsFedVisitante(e.target.value)}
                            />
                        </div>
                        <button className="guardar-boton" onClick={handleGuardarClick}>Guardar</button>
                    </div>
                ) : (
                    <div className="resultado-y-icono">
                        {partido.goles_local !== null && partido.goles_visitante !== null ? (
                            <>
                                <p className='pts-fed'>Resultado</p>
                                <span className="resultado-texto">
                                    {`${partido.goles_local} - ${partido.goles_visitante}`}
                                </span>
                                <p className='pts-fed'>Ptos Fed</p>
                                <p className='pts-fed'>{`${partido.pts_fed_local} - ${partido.pts_fed_visitante}`}</p>
                            </>
                        ) : (
                            <span className="resultado-texto">Por jugar</span>
                        )}
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
