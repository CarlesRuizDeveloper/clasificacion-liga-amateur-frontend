import React from "react";
import './FilaPartido.css';

const FilaPartido = ({ partido }) => {
    return (
        <tr className="fila-partido">
            {/* Equipo Local: Escudo y Nombre en celdas separadas */}
            <td className="escudo-equipo-td">
                <img
                    src={partido.escudoLocal}
                    alt={`Escudo de ${partido.equipoLocal}`}
                    className="escudo-equipo"
                />
            </td>
            <td className="nombre-equipo-td">
                {partido.equipoLocal}
            </td>

            {/* Resultado del partido */}
            <td className="resultado-partido">
                {partido.golesLocal} - {partido.golesVisitante}
            </td>

            {/* Equipo Visitante: Nombre y Escudo en celdas separadas */}
            <td className="nombre-equipo-td">
                {partido.equipoVisitante}
            </td>
            <td className="escudo-equipo-td">
                <img
                    src={partido.escudoVisitante}
                    alt={`Escudo de ${partido.equipoVisitante}`}
                    className="escudo-equipo"
                />
            </td>
        </tr>
    );
};

export default FilaPartido;
