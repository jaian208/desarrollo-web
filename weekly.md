## PRIMERA REUNIÓN:



### DEFINICIÓN DE TECNOLOGÍAS Y POR QUE SE VAN A USAR (Aparte de Node Js y Git)


MySQL (XAMPP): Elegida por ser un motor de base de datos relacional robusto que permite manejar la integridad de los datos de juegos y usuarios mediante tablas vinculadas.
Sequelize: Framework ORM para interactuar con la DB usando objetos de JavaScript en lugar de SQL puro. Facilita la creación de relaciones complejas (como la biblioteca).
EJS: Motor de plantillas que permite la reutilización de componentes genéricos para las demás vistas (NavBar, Footer...).
FIGMA: Aplicación que permite diseño interactivo de interfaces.


Durante la semana 1 del proyecto, se realizaron los Wireframes en Figma. Se realizaron los diseños en base a nuestras referencias (Steam/EpicGames) para ofrecer un equilibrio visual y que no sea demasiado expositivo para el usuario, lo que busca una experiencia satisfactoria.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## SEGUNDA REUNIÓN (Semana 2, una vez que los diseños en FIGMA estuvieron disponibles y con algunos retoques adicionales):

### DISEÑO DEL PROYECTO (las bases principales)

implementacion dee note.js, expres, organizacion de los archivos en diferentes carpetas y subcarpetas tales como:
controller
router
model
public:
- css
- images
- js
views:
- home
- infoJuego
- login
- register
- partials

### IMPLEMENTACIÓN DE EJS.

Se discutieron los métodos para implementar EJS para el manejo de las vistas y los componentes y se lograron los siguientes avances:

-Implementación de EJS
-Organización de cada vista en sus respectivos directorios si en dado caso se necesita agregar más vistas no genéricas.
-Almacenamiento de componentes genéricos y repetitivos para las vistas (NavBar, Footer, Head).

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## TERCERA REUNIÓN (Semana 3):

Para no depender de arrays estáticos y permitir el ingreso de nuevos juegos y registros de usuarios. Se decide realizar la implementación del Framework ORM Sequelize mediante la
instalación de paquetes y correcto uso de las funciones.

Con esto, se lograron los siguientes objetivos:

-Creación de una base de datos.
-Definición de relación M-M entre ambos objetos (User y Juego).


## CUARTA REUNIÓN (Semana 4):

Para experimentar con los futuros usuarios. Se emplean las herramientas Bcrypt y express-session para poder registrar y validar usuarios en GameZone.

Gracias a la implementación de estas herramientas, se pudo lograr:

-Registro y Login de Usuarios.
-Encriptación de contraseña por motivos de seguridad.

## QUINTA REUNION (Semana 5)

Para facilitar el ingreso de productos al sitio, se acordó implementar un formulario que permita la carga de nuevos juegos. Este formulario estará restringido a un rol con credenciales admin, garantizando así un mejor control y administración del contenido publicado, realizar retoques en la vista del Logout, Inicio de sesión, Verificación de inicio de sesión y la aplicación de un formulario de edición y añadido de juegos que funcionará únicamente bajo la condición de que el rol sea de 'admin'.

Con esta planificación, el equipo queda preparado para iniciar de manera organizada y eficiente.


## SEXTA REUNION (Semana 6)

el equipo se enfocó en la integración completa de todas las funcionalidades desarrolladas, así como en la corrección de errores detectados durante las pruebas Se priorizó la estabilidad del sistema, la optimización del flujo del usuario y los últimos ajustes visuales del sitio web.

Durante esta reunión, se discutieron y ejecutaron las siguientes acciones:
Corrección de errores relacionados con sesiones de usuario y el carrito de compras.
Validación completo del sistema.
Ajustes en la interfaz para mejorar la experiencia del usuario.
Pruebas generales del sistema para detectar fallos y mejorar el rendimiento.


## SEPTIMA REUNION (Semana 7)

En esta reunión el equipo se enfocó en la integración y mejora de las funcionalidades relacionadas con el perfil de usuario  para implementar la opción de subir imágenes como avatar y crear una nueva vista que permita editar el nombre, correo y avatar del usuario, también se añadir validaciones en los formularios de registro, edición de perfil y creación de juegos para asegurar la correcta introducción de datos  y realizar ajustes en la estructura del proyecto, reorganizar la ubicación de las imágenes de portada para mejorar la organización de los recursos estáticos.

