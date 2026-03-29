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

## QUINTA REUNION

para facilitar el ingreso de productos al sitio, se acordó implementar un formulario que permita la carga de nuevos juegos. Este formulario estará restringido a un rol con credenciales admin, garantizando así un mejor control y administración del contenido publicado, realizar retoques en la vista del Logout, Inicio de sesión, Verificación de inicio de sesión

Con esta planificación, el equipo queda preparado para iniciar de manera organizada y eficiente.




