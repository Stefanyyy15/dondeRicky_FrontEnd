# Donde Ricky

Donde Ricky es un sistema de gestión de pedidos mediante una aplicación web que permite a los clientes realizar pedidos en línea y a los administradores gestionar el menú y los pedidos en tiempo real. Es una aplicación funcional y segura que incluye un frontend amigable construido con HTML, CSS y JavaScript. Interactúa con una API RESTful y un backend robusto desarrollado en Spring Boot para proporcionar una experiencia de usuario fluida y atractiva con autenticación y persistencia de datos. Donde Ricky anima a los usuarios a explorar un amplio menu lleno de sabores que sorprenderan su paladar.

## Link Backend
https://github.com/Stefanyyy15/Bohemia_BackEnd.git

![Imagen logo](background/imagenCarga.png)

## Tabla de contenido

## Índice

| Índice Título
| ------ | --------------- |
| 1. Descripción del proyecto 2. Requisitos del sistema
| 2. | Requisitos del sistema | 3.
| | 3. | Instalación
| 4. | 5. Requisitos funcionales
| Diagrama ER | Diagrama ER | Diagrama ER
| 6. | 7. Preguntas frecuentes
| 7. | 8. Licencia
| 8. | Contacto

# Requisitos del sistema

Este proyecto se desarrolla utilizando las siguientes tecnologías:

- **HTML 5**  
  El estándar para estructurar páginas web, proporcionando la semántica y el contenido básico de la aplicación.

- **CSS** 
    Utilizado para el estilo visual de la interfaz, asegurando que la aplicación sea atractiva y fácil de usar.

- **JavaScript** 
  Lenguaje de programación que permite la interactividad de la interfaz, realizando peticiones a la API para obtener datos y actualizando dinámicamente el DOM.

## Requisitos para ejecutar el proyecto

Para ejecutar este proyecto, asegúrate de que tienes los siguientes requisitos instalados en tu sistema:

- **VisualStudio**: [Descargar VisualStudio](https://code.visualstudio.com/download)

(Puedes utilizar cualquier editor de código de tu elección).

- **NetBeans**: [Descargar NetBeans](https://netbeans.apache.org/front/main/download/nb24/)
Necesario para el desarrollo e integración del backend.

- **Spring Boot**: [Descargar SpringBoot](https://spring.io/projects/spring-boot)
Utilizado para ejecutar la API backend del proyecto.

## Instalación

Clonar el proyecto

```bash
git clone https://github.com/Stefanyyy15/dondeRicky_FrontEnd.git
```

Ir al directorio del proyecto

```bash
cd dondeRicky_FrontEnd
```

Dirígete al archivo

```bash
code .
```

## Requerimientos funcionales 
Los siguientes requisitos describen lo que la aplicación debe permitir hacer a los usuarios.  

### 1. Autenticación y Seguridad
- Implementa un sistema de autenticación con JWT.
- Tiene una interfaz para usuarios y administradores para la edición de productos y gestión de pedidos.
- Protege las rutas sensibles según el rol.


### 2. Gestor de Productos
- Lista los productos disponibles en el menú.
- Permitir a los administradores crear, editar y eliminar productos.
- Valida los datos antes de almacenarlos en la base de datos.


###  3. Gestor de Pedidos
- Permite que los clientes realicen pedidos.
- Los administradores pueden visualizar y actualizar el estado de los pedidos (pendiente, en preparación, entregado).
- Guarda detalles del pedido, como productos solicitados y total de la compra.


## Diagrama ER

![alt text](background/DiagramER.png)

## Paginas


## Preguntas frecuentes
Lista de preguntas más frecuentes:
1. ¿Cómo puedo contribuir al proyecto?
Puedes contribuir creando un fork del repositorio y enviando un pull request.

2. ¿Este proyecto está abierto a contribuciones?
| Tipo de contribución | Aceptada | Retroalimentación |
|:---------------------|:--------:|------------:|
| Notificación de errores Sí Utiliza la sección de incidencias de GitHub.
| Nuevas funcionalidades | Sí | Envíe un pull request con sus propuestas |

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

[![Licencia MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Contacto

Si tiene alguna pregunta o desea más información, no dude en ponerse en contacto con nosotros:

- **Nombre**: Stefany Sanchez
- **GitHub**: [https://github.com/Stefanyy15](https://github.com/Stefanyy15)

- **Nombre**: Luis Salamanca
- **GitHub**: [https://github.com/L-Salamanca](https://github.com/L-Salamanca)

- **Nombre**: Julian Coronado
- **GitHub**: [https://github.com/JulianCoronado17](https://github.com/JulianCoronado17)
---