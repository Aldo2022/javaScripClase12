//las rutas de app.js
const {Router} = require('express');//Extraemos la clase que hace el enrutamiento
const Publicacion = require('../models/publicaciones');
const router = Router();
// const router = require('express').Router();  //Es igual  al anterior

router.get('/', (req, res)=> {      //En esta ruta, se va aaconstruir la pag desde el servidor y devuelve al cliente
    res.render('home')      //aca pasamos el nombre del archivo para renderizar 'home'
})
 
router.post('/nueva-publicacion', async (req, res)=> {
    //Recibir datos del body
    
        const {titulo, detalle}=req.body;
    
    // Se guardan los datos en una BD    
        
        console.log(titulo, detalle);
        return res.send({msg: "Publicacion creada con exito"})
        })    

   

module.exports=router//Exportando rutas disponibles