<img src="./images/Analisis-iPhone-15-Pro-Max.jpg" alt="Vista de la Aplicación en iPhone" width="400">


# Clasificación de Fútbol Can Boada

**Clasificación de Fútbol** nace del encargo de un amigo para llevar la clasificación de su liga de fútbol. Esta aplicación web permite mostrar la clasificación de los equipos y los resultados de las jornadas de su liga.&#x20;

Los usuarios pueden visualizar la clasificación y los resultados, mientras que los administradores pueden gestionar y actualizar los resultados de los partidos de forma intuitiva.

La aplicación está desarrollada con **React** y **Vite**, conectada con una API REST creada por mí y es **totalmente responsive**.

## ⭐ Características

- 🛠️ **Autenticación de Usuario**: Inicio y cierre de sesión para los administradores que pueden modificar los resultados.

- ⚽ **Clasificación en Tiempo Real**: Muestra la clasificación de los equipos y los resultados de las jornadas con actualizaciones dinámicas.

- 📊 **Información Detallada de los Partidos**: Muestra estadísticas de los partidos, como puntos, partidos ganados/perdidos, goles a favor, en contra, etc.

- 📝 **Interfaz Sencilla y Clara**: Una página única con toda la información disponible fácilmente para los usuarios.

- **API Backend**: Este proyecto se conecta a una API, disponible en [git@github.com](git@github.com\:CarlesRuizDeveloper/clasificacion-liga-amateur.git)[:CarlesRuizDeveloper](git@github.com\:CarlesRuizDeveloper/clasificacion-liga-amateur.git)[/clasificacion-liga-amateur.git](git@github.com\:CarlesRuizDeveloper/clasificacion-liga-amateur.git)

## 🛠 Requisitos

- **Node.js** v14 o superior
- **npm** o **yarn**

## 🔧 Instalación

Para instalar y correr el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone git@github.com:CarlesRuizDeveloper/clasificacion-liga-amateur-frontend.git
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd clasificacion-liga-amateur-frontend
   ```

3. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

La aplicación estará disponible en `http://localhost:5173`.

## 🚀 Uso de la Aplicación

Para ejecutar el proyecto en el entorno de desarrollo, utiliza el comando `npm run dev` o `yarn dev`. La aplicación estará disponible en `http://localhost:5173`.

- **Usuarios Visitantes**: Pueden ver la clasificación de los equipos y los resultados de los partidos.
- **Administradores**: Pueden iniciar sesión y editar los resultados de los partidos.

### 📱 Vista de la Aplicación

La aplicación se adapta perfectamente a diferentes dispositivos. Aquí te mostramos cómo se ve en diferentes tamaños de pantalla:

- **Teléfono**:

- **Tableta**:

- **Ordenador**:

## 🌐 Despliegue

Para generar una versión de la aplicación optimizada para producción, utiliza el siguiente comando:

```bash
npm run build
```

Esto creará una carpeta `build` con los archivos estáticos listos para ser desplegados en un servidor web.

## 🏰 Arquitectura del Proyecto

La estructura del proyecto es la siguiente:

```
├── src/
│   ├── components/      # Componentes reutilizables de la aplicación
│   ├── hooks/           # Hooks personalizados para autenticación y obtención de datos
│   ├── pages/           # Páginas principales (HomePage, LoginPage, etc.)
│   └── context/         # Contextos para manejar el estado de autenticación
├── public/              # Archivos públicos y estáticos
└── README.md            # Documentación del proyecto
```

## 🛡️ Seguridad

- La autenticación está basada en **tokens JWT** que se almacenan en el `localStorage` del navegador.
- Las rutas protegidas requieren que el usuario esté autenticado para realizar acciones sensibles, como editar partidos.

## 👍 Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork del proyecto.
2. Crea una branch para tus cambios:
   ```bash
   git checkout -b mejora/nueva-funcionalidad
   ```
3. Haz commit de tus cambios:
   ```bash
   git commit -m 'Añadir nueva funcionalidad'
   ```
4. Haz push a la branch:
   ```bash
   git push origin mejora/nueva-funcionalidad
   ```
5. Crea una **Pull Request** en GitHub.

## 📑 Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🛠️ Herramientas Utilizadas

- &#x20;**React**: Framework de JavaScript para construir la interfaz de usuario.
- &#x20;**Vite**: Herramienta de desarrollo rápida para construir proyectos modernos de frontend.
- &#x20;**React Router**: Manejo de la navegación y rutas dentro de la aplicación.
- **Fetch API**: Para realizar solicitudes HTTP a la API.

  💌 Contacto
- Para cualquier consulta o sugerencia, puedes contactarme a través de [LinkedIn](https://www.linkedin.com/in/carles-ruiz-montejo-developer/) o por email en [carlesruizm@gmail.com](mailto\:carlesruizm@gmail.com).

¡Gracias por visitar este proyecto y espero que te sea útil! 🍾🎉

