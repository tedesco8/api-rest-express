# api-rest-express
_RESTful API implementando Clean Architecture
_Este proyecto es una API desarrollada con Node.js y Express con el objetivo de ser utilizada de manera multipropósito, aprovechando su estructura y buenas prácticas.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Lo primero que necesitas hacer es crear un fork de este proyecto y clonarlo. Para comenzar a usar el software es necesario tener Node.js instalado en tu sistema y una instancia de base de datos Mongodb.
```

### Instalación 🔧

_Una vez clonado el fork e instalado Node.js en tu sistema, podras instalar las dependencias del proyecto siguiendo estos pasos;_

_Instala las dependencias del proyecto_

```
npm install
```

_Agrega un archivo .env a la raiz del proyecto y pon tus credenciales_

```
touch .env

PORT=<PORT>
MONGO_URI=<MONGO_URI>
APPLICATION_NAME=<APPLICATION_NAME>
JWT_SECRET=<JWT_SECRET>
CACHE_KEY=<CACHE_KEY>
SWAGGER_DOC=swaggerDEV
ZOOM_API_KEY=<ZOOM_API_KEY>
ZOOM_API_SECRET=<ZOOM_API_SECRET>
```

_Ejecuta el proyecto_

```
npm run dev
```
## Construido con 🛠️

* [Node](https://nodejs.dev/) - Entorno de ejecución
* [Express](https://expressjs.com/es/) - Framework Backend
* [Mongoose](https://mongoosejs.com/) - ORM
* [Awilix](https://github.com/jeffijoe/awilix) - Inyección de dependencias
* [Compression](https://www.npmjs.com/package/compression) - Compresor de respuestas
* [Helmet](https://helmetjs.github.io/) - Seguridad en cabeceras HTTP
* [Morgan](https://www.npmjs.com/package/morgan) - Registro de solicitudes
* [Jest](https://jestjs.io/) - Testing
* [Swagger](http://raw.githack.com/MrRio/jsPDF/master/docs/index.html) - documentación
## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

* **Pablo Tedesco** - *Trabajo Inicial* - [tedesco8](https://github.com/tedesco8)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/tedesco8/SIGESCO/graphs/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [tedesco8](https://github.com/tedesco8) 😊