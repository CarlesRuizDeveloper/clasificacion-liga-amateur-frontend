import { useState, useEffect } from 'react';

const useClasificacion = () => {
    const [estado, setEstado] = useState({
        equipos: [],
        cargando: true,
        error: null,
    });

    useEffect(() => {
        const obtenerClasificacion = async () => {
            try {
                setEstado({ ...estado, cargando: true });
                const respuesta = await fetch("https://canboada.purusistemas.com/api/clasificacion/ultima");

                if (!respuesta.ok) {
                    throw new Error('Error al obtener los datos de la clasificación de la última jornada');
                }

                const datos = await respuesta.json();
                setEstado({ equipos: datos, cargando: false, error: null });
            } catch (error) {
                setEstado({ equipos: [], cargando: false, error: error.message });
            }
        };

        obtenerClasificacion();
    }, []);

    return estado;
};

export default useClasificacion;
