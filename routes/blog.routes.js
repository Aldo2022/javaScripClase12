//Importaciones necesarias
const {Router} = require('express');//Se importa la clase Router de Express
const { crearPublicacion,obtenerPublicaciones,actualizarPublicacion,eliminarPublicaciones } = require('../controllers/blog.controllers');//Aca se importa

//Creamos una instancia de Router
const router = Router();
// const router = require('express').Router();  //Es igual  al anterior

    
    //Creamos una Ruta para la pagina de inicio
        router.get('/', (req, res)=> {      
            res.render('home')      //Cuando se accede a la raiz '/' se renderiza la vista 'home'
        })

    //Aca creamos una nueva publicacion mediante un formulario POST
        router.post('/publicacion',crearPublicacion)//la logica  de 'crearPublicacion' se encuentra en la carpeta blog.controllers.js    


    //Aca obtenemos todas las publicaciones
        router.get('/publicaciones',obtenerPublicaciones)
    
    //Actualizar una piblicacion
        router.put('/publicacion/:id',actualizarPublicacion)

    //Eliminar publicacion
        router.delete('/publicacion/:id',eliminarPublicaciones)
   
//Exportando rutas disponibles
module.exports=router//Lo utilizo en app.js   linea 33