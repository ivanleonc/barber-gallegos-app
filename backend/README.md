# Backend de Barbería Gallegos App

Este es el backend para la aplicación de la Barbería Gallegos, desarrollado con Node.js, Express y MongoDB. Se encarga de gestionar los servicios, citas y toda la lógica de negocio.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada)
- [MongoDB](https://www.mongodb.com/try/download/community) (una instancia local o un clúster en MongoDB Atlas)
- [npm](https://www.npmjs.com/) (generalmente viene con Node.js)

## Instalación

1.  Clona el repositorio (si aún no lo has hecho).
2.  Navega a la carpeta del backend:
    ```bash
    cd barbergallegosapp/backend
    ```
3.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

## Configuración

Este proyecto utiliza variables de entorno para manejar la configuración sensible.

1.  Crea un archivo `.env` en la raíz de la carpeta `backend/`. Puedes usar el archivo `.env.example` como plantilla.
2.  Añade las siguientes variables a tu archivo `.env`:

    ```dotenv
    MONGODB_URI=tu_string_de_conexion_a_mongodb
    PORT=3000
    ```

    -   **MONGODB_URI**: La cadena de conexión a tu base de datos de MongoDB.
    -   **PORT**: El puerto en el que se ejecutará el servidor.

## Ejecución

Para iniciar el servidor en modo de desarrollo (con recarga automática gracias a `nodemon`, que vi que tienes instalado):

```bash
npm run dev
```

Si no tienes un script `dev`, puedes añadirlo a tu `package.json`: `"dev": "nodemon index.js"` (o el nombre de tu archivo principal).

Para iniciar el servidor en modo de producción:

```bash
npm start
```