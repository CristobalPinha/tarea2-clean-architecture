# Tarea 2 - Hola Mundo con Clean Architecture

Este repositorio demuestra la implementación del patrón de diseño **Clean Architecture** (Arquitectura Limpia) utilizando Node.js y Express.

## Estructura del Proyecto

El código está organizado siguiendo la regla de dependencia de Clean Architecture, donde las capas internas no tienen conocimiento de las capas externas:

tarea2-clean-architecture/
├── src/
│   ├── domain/             # Capa 1: Entidades del Negocio
│   │   └── Message.js
│   ├── application/        # Capa 2: Casos de Uso
│   │   └── GetHelloUseCase.js
│   ├── interfaces/         # Capa 3: Controladores y Adaptadores
│   │   └── HelloController.js
│   └── infrastructure/     # Capa 4: Frameworks, Servidor y Rutas
│       ├── routes.js
│       └── server.js
├── app.js                  # Punto de entrada de la aplicación
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación

## ¿Qué es Clean Architecture?

Clean Architecture es una filosofía de diseño de software creada para separar las responsabilidades de un sistema en distintas capas. Su regla de oro es la **Regla de Dependencia**: las dependencias siempre deben apuntar hacia adentro. El núcleo del sistema no debe saber nada sobre el mundo exterior.

El objetivo es lograr un sistema donde si mañana cambia la base de datos o el framework web (por ejemplo, cambiar Express por otra tecnología), el corazón de la aplicación siga funcionando intacto.

## Explicación de las Capas (De adentro hacia afuera)

Para entender este proyecto, imagina que el software funciona como el **flujo de atención en una tienda**:

### 1. Dominio (`src/domain/`) - _El Producto_

Es el núcleo del sistema. Aquí viven las **Entidades** y la lógica pura e inmutable del negocio.

- **En nuestro código:** La clase `Message`.
- **Concepto:** Representa la esencia de lo que manejamos. A esta capa no le importa si el mensaje se muestra en una web, en una consola o se guarda en una base de datos. Solo sabe que es un mensaje.

### 2. Aplicación (`src/application/`) - _Los Procesos Internos_

Aquí viven los **Casos de Uso**. Contiene las reglas específicas de lo que el sistema _puede hacer_.

- **En nuestro código:** La clase `GetHelloUseCase`.
- **Concepto:** Es el proceso de armar o buscar el mensaje. Orquesta la acción interna sin saber que existe internet o un usuario esperando. Se concentra en ejecutar la tarea asignada.

### 3. Interface Data (`src/interfaces/`) - _El Vendedor / Traductor_

Aquí viven los **Controladores** y presentadores. Actúan como puente de comunicación.

- **En nuestro código:** La clase `HelloController`.
- **Concepto:** Es el intermediario. Escucha la petición que llega desde la web, solicita la información a los procesos internos (Aplicación), y "traduce" el resultado (el mensaje) a un formato que el cliente externo pueda entender, como un JSON.

### 4. Infraestructura (`src/infrastructure/`) - _El Local Comercial_

Es la capa más externa, volátil y propensa a cambios. Aquí están los frameworks, bases de datos y la interfaz de usuario.

- **En nuestro código:** La configuración de `Express.js`, el servidor (`server.js`) y las rutas (`routes.js`).
- **Concepto:** Es el canal de comunicación (la página web o el puerto HTTP). Está aislado en el exterior para que la tecnología no contamine las reglas del negocio.

---

## Cómo ejecutar el proyecto

1. Instalar dependencias:
   \`npm install\`
2. Levantar el proyecto:
   \`node app.js\`
3. Probar en el navegador o enviar una petición GET mediante Postman a:
   \`http://localhost:3000/api/hello\`

---

## Desarrolladores

- Victor Salazar
- Cristobal Piña
