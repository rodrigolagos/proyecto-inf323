# proyecto-inf323
Proyecto número 1 realizado para el ramo INF323 - Seminario de Desarrollo de Software. Desarrollado con las siguientes tecnologías:

* Docker
* Node.js
* VueJS
* ExpressJS
* MongoDB

## Requerimientos
Asegurate de tener instalados todos los siguientes prerrequisitos en tu computador:
* Docker - [Descargar e instalar Docker Desktop](https://docs.docker.com/install/)
* Git - [Descargar e instalar git](https://git-scm.com/downloads)
* Node.js - [Descargar e instalar Nodejs](https://nodejs.org/en/download/) y el administrador de paquetes npm.
* MongoDB - [Descargar e instalar MongoDB](https://www.mongodb.com/download-center)

## Instalación Con Docker
Clonar el repositorio

```
    git clone https://github.com/rodrigolagos/proyecto-inf323.git proyecto-inf323
```
Abrir una terminal de línea de comandos, en caso de utilizar Windows, use Windows PowerShell.

Posicionarse en la carpeta del proyecto
```
    cd proyecto-inf323
```
Instalar dependencias y ejecutar el proyecto con docker

```
    docker-compose build
    docker-compose up
```

## Instalación Sin Docker
Ejecutar los siguientes comandos en la terminal

Iniciar MongoDB (en una terminal aparte)

* Unix:     `sudo mongod`

* Windows:  `mongod`

Clonar el repositorio

```
    git clone https://github.com/rodrigolagos/proyecto-inf323.git proyecto-inf323
```

Posicionarse en la carpeta del proyecto
```
    cd proyecto-inf323
```

Instalar dependencias y ejecutar el proyecto

```
    npm install
    npm start
```

## Visualización
Visualizar el proyecto en el navegador con la dirección http://localhost:3000

## Pruebas unitarias
Ejecutar las pruebas unitarias
```
    npm test
```

## Detener Docker
Para detener los contenedores:
```
    ctrl + c
```
Si desea puede eliminar los contenedores para evitar coincidencia de nombres con otros contenedores:
...
    docker-compose down
...
