import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useJornada from '../../hooks/useJornada'; 
import './EditarPartido.css';

const EditarPartido = () => {
    const { jornadaId } = useParams();
    const { partidos, cargando, error } = useJornada(jornadaId); 
    const [partidosEditados, setPartidosEditados] = useState([]);

    const manejarCambioGoles = (partidoId, equipo, value) => {
        setPartidosEditados((prevPartidos) =>
            prevPartidos.map((p) =>
                p.id === partidoId ? { ...p, [equipo]: parseInt(value) || 0 } : p
            )
        );
    };

    const guardarCambios = async (partidoId) => {
        const partido = partidosEditados.find((p) => p.id === partidoId);
        if (!partido) return;

        try {
            const respuesta = await fetch(`https://canboada.purusistemas.com/api/partidos/${partidoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    goles_local: partido.goles_local,
                    goles_visitante: partido.goles_visitante,
                }),
            });
            alert('Cambios guardados correctamente');
            
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            alert('Hubo un error al guardar los cambios');
        }
    };

    if (cargando) {
        return <p>Cargando datos de los partidos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="editar-partido-container">
            <h2>Editar Resultados de la Jornada {jornadaId}</h2>
            {partidos && partidos.length > 0 ? (
                partidos.map((partido) => (
                    <div key={partido.id} className="partido-editar">
                        <h3>Partido {partido.id}</h3>
                        <div className="equipo-container">
                            <span>Equipo Local:</span>
                            <span>{partido?.equipo_local?.nombre || 'Equipo no disponible'}</span>
                            <input
                                type="number"
                                placeholder="Goles equipo local"
                                value={partido.goles_local ?? ''}
                                onChange={(e) => manejarCambioGoles(partido.id, 'goles_local', e.target.value)}
                            />
                        </div>
                        <div className="equipo-container">
                            <span>Equipo Visitante:</span>
                            <span>{partido?.equipo_visitante?.nombre || 'Equipo no disponible'}</span>
                            <input
                                type="number"
                                placeholder="Goles equipo visitante"
                                value={partido.goles_visitante ?? ''}
                                onChange={(e) => manejarCambioGoles(partido.id, 'goles_visitante', e.target.value)}
                            />
                        </div>
                        <button onClick={() => guardarCambios(partido.id)}>Guardar Cambios</button>
                    </div>
                ))
            ) : (
                <p>No hay partidos para esta jornada.</p>
            )}
        </div>
    );
};

export default EditarPartido;
