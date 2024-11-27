import React from 'react';
import './FilaEquipo.css';

const FilaEquipo = ({ equipo, index, tipo }) => {
    if (tipo === "fijo") {
        return (
            <tr className="fila-equipo">
                <td>{index + 1}</td>
                <td className="nombre-equipo">
                    <img src={equipo.escudo_url} alt={`Escudo de ${equipo.equipo}`} className="escudo-equipo" />
                    {equipo.equipo}
                </td>
                <td className="pts">{equipo.pts}</td>
            </tr>
        );
    }

    if (tipo === "desplazable") {
        return (
            <tr className="fila-equipo">
                <td>{equipo.pj}</td>
                <td>{equipo.pj}</td>
                <td>{equipo.pg}</td>
                <td>{equipo.pe}</td>
                <td>{equipo.pp}</td>
                <td>{equipo.gf}</td>
                <td>{equipo.gc}</td>
                <td>{equipo.dg}</td>
            </tr>
        );
    }

    return null; 
};

export default FilaEquipo;
