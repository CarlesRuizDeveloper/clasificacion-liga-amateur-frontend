import { useState, useEffect } from 'react';

const useJornada = (jornadaSeleccionada) => {
    const [estado, setEstado] = useState({
        partidos: [],
        cargando: true,
        error: null,
    });

    useEffect(() => {
        const obtenerPartidos = async () => {
            try {
                setEstado({ ...estado, cargando: true });
                const respuesta = await fetch(`https://canboada.purusistemas.com/api/partidos?jornada=${jornadaSeleccionada}`);

                if (!respuesta.ok) {
                    throw new Error('Error al obtener los partidos');
                }

                const datos = await respuesta.json();
                setEstado({ partidos: datos, cargando: false, error: null });
            } catch (error) {
                setEstado({ partidos: [], cargando: false, error: error.message });
            }
        };

        obtenerPartidos();
    }, [jornadaSeleccionada]);

    return estado;
};

export default useJornada;
