# Rick-And-Morty-Humans-APP

Este proyecto es una aplicación web que se enfoca en mostrar información sobre los personajes humanos de la famosa serie animada "Rick and Morty". La aplicación combina tecnologías frontend y backend para proporcionar una experiencia completa. A continuación, se detallan los objetivos del proyecto:

## Objetivos Principales:
- **Frontend con Next.js y Material UI:** Se ha desarrollado un frontend utilizando Next.js y Material UI para proporcionar una interfaz de usuario intuitiva y agradable.

- **Backend con Express y GraphQL:** El proyecto incluye un backend construido con Express.js que utiliza tanto una API REST como la API de GraphQL de Rick and Morty para obtener datos sobre los personajes.

## Objetivos Adicionales Cumplidos:
- **TypeScript:** Se ha incorporado TypeScript en todo el proyecto para mejorar la calidad y seguridad del código.

- **Paginación en el Frontend:** Se ha implementado la funcionalidad de paginación en el frontend para mostrar los personajes de manera organizada y escalable (responsive).

- **Buenas Prácticas de Programación:** He intentado seguir las mejores prácticas de programación para mantener un código limpio y mantenible.

- **Elementos Adicionales:** Además de cumplir con los objetivos principales, se han explorado oportunidades creativas para mejorar la aplicación, utilizando Framer Motion para crear unas pequeñas animaciones en la pagina de inicio.

## **Backend: Estructura y Funcionalidad**

En la construcción del backend de este proyecto, se ha enfocado en crear una estructura organizada que permite el uso de una API REST para obtener datos de la serie "Rick and Morty". Aquí se describen los principales aspectos relacionados con el backend:

### **Estructura de Carpetas**
La estructura de carpetas del backend se ha diseñado de manera cuidadosa. En la sección de API REST, se ha creado una carpeta de rutas con un archivo `index.js` capaz de detectar los archivos dentro de la carpeta de rutas. Esto facilita la creación de endpoints, donde el nombre de los archivos se convierte en el nombre de los endpoints. Esta estructura proporciona escalabilidad y mantenibilidad.

### **Dependencias Utilizadas**
Para desarrollar el backend, se han instalado las siguientes dependencias clave:
- **Express:** Para crear y gestionar el servidor web.
- **Axios:** Para realizar consultas a la API de "Rick and Morty".
- **Dotenv:** Para gestionar variables de entorno.
- **CORS:** Para permitir la conexión entre el frontend y el backend.

### **API REST: Estructura y Controladores**
Dentro de la sección de API REST, se encuentra un único endpoint que se comunica a través de una consulta con la API GraphQL de "Rick and Morty". Esta parte se considera una de las más importantes del servidor, ya que es el punto de entrada y procesamiento de las solicitudes.

### **Server.js: Configuración Básica**
El archivo `server.js` contiene la configuración básica de todo servidor, incluyendo la gestión de CORS, puertos y otras configuraciones esenciales para el correcto funcionamiento de la aplicación.


