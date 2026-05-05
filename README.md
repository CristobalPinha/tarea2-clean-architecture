# Tarea 2 - Hola Mundo con Clean Architecture

## Explicación del Patrón Clean Architecture
Clean Architecture es un sistema de ejecución por capas que busca separar las responsabilidades del código. Su regla principal es que las cosas del **Dominio** no se compartan hacia afuera, logrando que el núcleo de la aplicación sea independiente de la base de datos, la interfaz web o cualquier framework.

## Estructura del Proyecto

Esta aplicación encapsula el proyecto en las siguientes capas:

1. **Dominio (`src/domain/`)**: Contiene la entidad `Message`. Aquí reside la lógica pura e inmutable. No depende de nada externo.
2. **Aplicación (`src/application/`)**: Contiene `GetHelloUseCase`. Es el caso de uso que solicita la creación del mensaje. Orquesta la acción sin saber que existe la web.
3. **Interface Data (`src/interfaces/`)**: Contiene `HelloController`. Transforma los datos del caso de uso en una respuesta que el cliente web (HTTP) pueda entender.
4. **Otras capas (Infraestructura) (`src/infrastructure/`)**: Contiene la configuración de Express.js y las rutas. Es la capa más externa y volátil.

## Cómo ejecutar el proyecto

1. Instalar dependencias: `npm install`
2. Levantar el proyecto: `node app.js`
3. Probar en el navegador o Postman: `http://localhost:3000/api/hello`