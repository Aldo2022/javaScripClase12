//importar librerias
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express()

const port = 3000; // 

//Middelwares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());//Para que el servidor pueda comprender datos json


app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.post('/user', (req, res)=> {
    
    const {id,name,lastname} = req.body
   res.send(`Bienvenido ${id} ${name} ${lastname}`)
    //res.send({id,name,lastname})
})

app.listen(3000, ()=> console.log(`Servidor en http://localhost:${port}`))
