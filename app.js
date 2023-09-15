//importaciones de modulos--->logica de config del servidor
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { sequelize,conectarDB } = require('./database');
const dotenv = require('dotenv');
dotenv.config();
//require('dotenv').config();     //Si reemplazamos 
require('ejs');

const app = express();
const port = process.env.PORT || 4000; //Este dato se encuentra dentro del archivo .env Si no esta asignado le agrega la otra condicion seria 3000

//Conexion a BD-----------------------------------------------
sequelize.authenticate()
    .then(()=>console.log('Conexion exitosa'))
    .catch((error)=>console.log('error a'))

   // conectarDB();
    
//Middelwares--------------------------------------------------

app.use(cors({
    origin: "http//localhost:3000"//origin cualquiera puede realizar peticiones
}));
app.use(morgan('dev'));
app.use(express.json());//Para que el servidor pueda comprender datos json
app.set('view engine','ejs')//Aca seteamos una variable view engine q va a ser ejs

//archivos staticos-----------------------------------------------
app.use(express.static(path.join(__dirname, 'public')) )//configuto con express archivos staticos---dirname es un variable q contiene una url de Sis.Oper
                                                        //join va a juntar los 2 argumentos

//LAS RUTAS GET , POST SE ENCUENTRAN EN MI ARCHIVO BLOG.ROUTES.JS
app.use(require('./routes/blog.routes'));
app.use(require('./routes/user.routes'));

//-----------------------------------------------------------------------------
app.listen(3000, ()=> console.log(`Servidor en http://localhost:${port}`))
