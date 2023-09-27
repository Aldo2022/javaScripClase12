
//Importaciones necesarias
const {Router} = require('express');//Se importa la clase Router de Express
const { crearPublicacion,
        obtenerPublicaciones,
        obtenerPublicacion,
        actualizarPublicacion,
        eliminarPublicacion }
         = require('../controllers/blog.controllers');//Aca se importa

//Creamos una instancia de Router
const router = Router();
// const router = require('express').Router();  //Es igual  al anterior

//       ******************************************************************************************************** 
//       *                                           RUTAS RENDER                                               *
//       ********************************************************************************************************

//Esta ruta renderiza la Pagina de inicio
        router.get('/', (req, res)=> {      
            res.render('home')      //Cuando se accede a la raiz '/' se renderiza la vista 'home'
        })
//Ruta para ver la vista del admin
        router.get('/publicaciones',(req,res)=>{
            res.render('home') 
        })
//---------------
        router.get('/admin/publicaciones',(req,res)=> {
            return res.render('tabla-publicaciones')
        })
       
        router.get('/admin/nueva-publicacion',(req,res)=> {
            return res.render('nueva-publicacion')
        })

        router.get('/admin/editar-publicacion/:id',(req,res)=> {
            res.render('editar-publicacion',{id: req.params.id})
        })

        router.get('/admin/eliminar-publicacion/:id',(req,res)=> {
            res.render('eliminar-publicacion',{id: req.params.id})
        })

//       ******************************************************************************************************** 
//       *                                RUTAS CRUD PARA PUBLICACIONES                                         *
//       ********************************************************************************************************
    
    //Aca creamos una nueva publicacion mediante un formulario POST
        router.post('/api/publicacion',crearPublicacion);//la logica  de 'crearPublicacion' se encuentra en la carpeta blog.controllers.js    


    //Aca obtenemos todas las publicaciones
        router.get('/api/publicaciones',obtenerPublicaciones);

    //Aca obtenemos Una publicacion
        router.get('/api/publicacion/:id',obtenerPublicacion) ;   
    
    //Actualizar una publicacion
        router.put('/api/publicacion/:id',actualizarPublicacion);

    //Eliminar publicacion
        router.delete('/api/publicacion/:id',eliminarPublicacion);
   
//Exportando rutas disponibles
module.exports=router;//Lo utilizo en app.js   linea 33