const express=require('express');

//Sequelize y DB
const sequelize= require('./database/configDatabase');
const Juego=require('./models/juego');
const User=require('./models/user');
const Carrito = require('./models/carrito');
const session= require('express-session');
//JS y puertos
const app=express();
const port= 300;


//Creación de tablas
User.belongsToMany(Juego, {
    through: 'biblioteca',
    as: 'juegosBiblioteca',
    foreignKey: 'userId',
    otherKey: 'juegoId'
});
Juego.belongsToMany(User, {
    through: 'biblioteca',
    as: 'usuariosBiblioteca',
    foreignKey: 'juegoId',
    otherKey: 'userId'
});
User.belongsToMany(Juego, {
    through: Carrito,
    as: 'carrito',
    foreignKey: 'userId',
    otherKey: 'juegoId'
});
Juego.belongsToMany(User, {
    through: Carrito,
    as: 'usuariosCarrito',
    foreignKey: 'juegoId',
    otherKey: 'userId'
});
User.hasMany(Juego, { foreignKey: 'userId' });
Juego.belongsTo(User, { foreignKey: 'userId' });



//Sequelize
sequelize.authenticate().then(() => {

    console.log('Conexion con la DB establecida');
    return sequelize.sync({ alter: false }); //Se utiliza un return (lo que se denomina promesa en una funcion asincronica para asegurarse de que se haga)

}).then(() => {
    console.log('Tablas actualizadas correctamente');
    /*return Juego.bulkCreate(juegosSeed);*/

}).then(() => {

    console.log('Información Bulkeada correctamente');

}).catch((error)=>  {
    console.error('Conexion fallida', error.message);
});


//configuraciones


//Interpretes (middlewares)
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Usar express-session para capturar los datos del usuario en la DB para las páginas

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
}));

//Middleware para inyectar los datos en las vistas

app.use((req,res,next)=>{
    res.locals.user = req.session.user || null;
    next();
});


app.set('view engine','ejs');


const homeRoutes = require("./router/homeRouter");

const juegoFormularioRoutes= require("./router/juegoFormularioRouter");

const juegoRoutes = require("./router/infojuegoRouter");

const userRoutes = require("./router/userRouter");

const authenticationRoutes= require("./router/authenticationRouter");

const carritoRoutes= require("./router/carritoRouter");

const juegoEdicionRoutes= require("./router/juegoEdicionRouter");

const perfilEditarRouter = require('./router/perfileditarRouter');

const path = require("node:path");

app.use("/", juegoFormularioRoutes);

app.use("/", homeRoutes);

app.use("/", juegoRoutes);

app.use("/", authenticationRoutes);

app.use("/", userRoutes);

app.use("/", carritoRoutes);

app.use("/", juegoEdicionRoutes);

app.use('/', perfilEditarRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);})