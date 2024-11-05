import React from 'react';
import FilaPartido from '../FilaPartido/FilaPartido';
import './TablaJornada.css';

const partidosFalsos = [
    { 
        id: 1, 
        equipoLocal: "CE ÀGORA \"A\"", 
        golesLocal: 2, 
        escudoLocal: "/path/to/escudo_equipo_1.png",
        equipoVisitante: "EF CAN BOADA 'A'", 
        golesVisitante: 1,
        escudoVisitante: "/path/to/escudo_equipo_2.png" 
    },
    { 
        id: 2, 
        equipoLocal: "CFCS JUAN XXIII _ PREBENJAMIN C", 
        golesLocal: 0, 
        escudoLocal: "/path/to/escudo_equipo_3.png",
        equipoVisitante: "CP SAN CRISTOBAL C", 
        golesVisitante: 0,
        escudoVisitante: "/path/to/escudo_equipo_4.png" 
    },
    { 
        id: 3, 
        equipoLocal: "CE LA FARGA XXI \"A\" (2017)", 
        golesLocal: 3, 
        escudoLocal: "/path/to/escudo_equipo_5.png",
        equipoVisitante: "CE LA FARGA XXI \"B\" (2017)", 
        golesVisitante: 2,
        escudoVisitante: "/path/to/escudo_equipo_6.png" 
    },
];

const TablaJornada = () => {
    return (
        <div className="tabla-jornada-contenedor">
            <h2 className="titulo-jornada">Partidos de la Jornada</h2>
            <table className="tabla-jornada-table">
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Local</th>
                        <th>Resultado</th>
                        <th>Visitante</th>
                        <th>Visitante</th>
                    </tr>
                </thead>
                <tbody>
                    {partidosFalsos.map(partido => (
                        <FilaPartido key={partido.id} partido={partido} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaJornada;
