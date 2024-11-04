import React from 'react';

const FilaEquipo = ({ equipo, index }) => {
    return (
        <tr className="fila-equipo">
            {typeof index !== 'undefined' ? (
                <>
                    <td>{index + 1}</td>
                    <td className="nombre-equipo">
                        <img
                            src={equipo.escudo_url}
                            alt={`Escudo de ${equipo.nombre}`}
                            className="escudo-equipo"
                        />
                        {equipo.nombre}
                    </td>
                    <td className="pts">{equipo.puntos || 0}</td>
                </>
            ) : (
                <>
                    <td>{equipo.partidos_jugados || 0}</td>
                    <td>{equipo.partidos_ganados || 0}</td>
                    <td>{equipo.partidos_empatados || 0}</td>
                    <td>{equipo.partidos_perdidos || 0}</td>
                    <td>{equipo.goles_a_favor || 0}</td>
                    <td>{equipo.goles_en_contra || 0}</td>
                    <td>{equipo.diferencia_goles || 0}</td>
                </>
            )}
        </tr>
    );
};

export default FilaEquipo;
