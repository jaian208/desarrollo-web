Retrospectiva Readme:

Calificación: 4.0 / 5.0

El README presenta una base sólida y bien estructurada para ser una versión inicial. Incluye de forma clara el título del proyecto, una descripción adecuada, el público objetivo, los integrantes, referencias con enlaces e imágenes, además de un apartado técnico con tecnologías utilizadas e instrucciones generales de instalación.

Se valora positivamente el esfuerzo por documentar desde etapas tempranas aspectos como las herramientas de desarrollo y las plataformas de inspiración, lo cual demuestra intención de organización y planeación del proyecto.

Como parte natural de una fase inicial, aún faltan elementos por consolidar, especialmente el tablero de trabajo por sprints con evidencia de planificación y una explicación más directa de cómo ejecutar el proyecto una vez instalado el entorno. Las notas finales tampoco se han desarrollado, aunque estas pueden incorporarse en etapas posteriores.

En conjunto, el documento cumple adecuadamente con los requerimientos básicos para una primera entrega, mostrando claridad conceptual y un buen punto de partida para continuar fortaleciendo la documentación técnica durante el desarrollo del proyecto.



## Retrospectiva Sprint 1:


Durante el Sprint 1, el equipo trabajó en la fase de introducción y wireframing del proyecto, estableciendo la estructura inicial del repositorio, documentación y diseño preliminar del sitio web.

- Aspectos positivos

Se creó correctamente el repositorio del proyecto y se agregaron los colaboradores.

Se elaboró el archivo README.md con la temática del sitio y el público objetivo.

Se desarrollaron los wireframes de las páginas (Home, Detalle de producto, Carrito de compras, Registro y Login) en figma
Los wireframes pueden visualizarse en el siguiente enlace: https://www.figma.com/design/HjavAYJwaUEKobtNTbgrBD/Dise%C3%B1os-%22GameZone%22?node-id=3-226&t=zKj0u1KHV0amjo0i-0

- Aspectos a mejorar

Algunas dudas en la distribución de tareas dentro del equipo, lo que generó pequeñas confusiones en la asignación inicial.

Mejorar la organización y estructura de los archivos dentro del repositorio.

Utilizar de forma más frecuente el control de versiones para registrar los avances.


- Plan de mejora para el siguiente sprint

Implementar una mejor planificación de tareas dentro del equipo.

Mantener commits más claros y organizados en Git.

Avanzar en la implementación del diseño utilizando las tecnologias y herramientas seleccionadas.



## Retrospectiva Sprint 2:

Durante el Sprint 2, el equipo trabajó en la implementación del motor de plantillas EJS, framework ORM Sequelize y varias herramientas de seguridad como Bcrypt y la implementación de Express-Session para capturar los datos de usuario al momento de iniciar sesión.

Durante el desarrollo, tuvimos innumerables problemas y contratiempos (algunos previsibles y otros completamente inesperados).



Problemas a destacar:


El caos del orden de Middlewares: Perdimos un tiempo precioso con el error user is not defined. La lección fue dura pero clara: en Express, el orden de los factores sí altera el producto. Intentar leer una sesión antes de que el middleware de sesión esté configurado fue nuestro mayor tropiezo.

LAl principio, nos frustramos al ver que el login "desaparecía" constantemente. Nos costó un par de horas entender que cada vez que guardábamos un archivo, el servidor se reiniciaba y borraba la sesión de la memoria RAM. Fue un choque de realidad sobre cómo funciona el almacenamiento volátil.

Hubo momentos donde quisimos implementar soluciones complejas (como actualizaciones de DOM vía Fetch) antes de tener lo básico funcionando. Esto casi compromete la entrega del carrito de compras.

Sequelize tiene una particuarlidad si se le pasa un argumento en específico, lo que puede generar QUE TODA LA BASE DE DATOS simplemente se purgue y deje la página sin absolutamente nada (afortunadamente, guardamos copias de seguridad y pudimos reponernos en muy poco tiempo después de que toda la información fuese eliminada).

- Plan de mejora para el siguiente sprint


Implementar funcionalidades dinámicas para la recomendacion de productos en la pagina home, y detalles del producto.

implementar encriptado de contraseña para los usuarios que se registren.

Continuar con la mejora del diseño visual del sitio web.

## Retrospectiva Sprint 3:

se implementó un sistema para el ingreso de nuevos juegos mediante un formulario, el cual está restringido a un rol específico de usuario, mejorando así el control y la administración del contenido.

Aspectos positivos

Se logró una mejor organización general del proyecto.

Se implementó correctamente el formulario para la carga de productos.

Se aplicó control de acceso por roles para restringir funcionalidades.

Aspectos a mejorar

Algunos problemas en la integración de funcionalidades entre diferentes partes del sistema.

Plan de mejora para el siguiente sprint

Mejorar la integración entre módulos del sistema.

Optimizar la organización del código para facilitar su mantenimiento.
