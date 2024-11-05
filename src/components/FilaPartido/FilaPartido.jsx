import React from 'react';
import './FilaPartido.css';

const FilaPartido = ({ partido }) => {
    return (
        <tr className="fila-partido">
            <td className="escudo-equipo-td">
                <img
                    src={partido.equipo_local.escudo_url}
                    alt={`Escudo de ${partido.equipo_local.nombre}`}
                    className="escudo-equipo-local"
                />
            </td>
            <td className="nombre-equipo-td">{partido.equipo_local.nombre}</td>
            <td className="resultado-partido">
                {partido.goles_local !== null && partido.goles_visitante !== null
                    ? `${partido.goles_local} - ${partido.goles_visitante}`
                    : 'Por jugar'}
            </td>
            <td className="nombre-equipo-td">{partido.equipo_visitante.nombre}</td>
            <td className="escudo-equipo-td">
                <img
                    src={partido.equipo_visitante.escudo_url}
                    alt={`Escudo de ${partido.equipo_visitante.nombre}`}
                    className="escudo-equipo-visitante"
                />
            </td>
        </tr>
    );
};

export default FilaPartido;
