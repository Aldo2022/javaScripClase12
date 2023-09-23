const ctrl = {}
const Publicaciones = require('../models/publicaciones');//Se importa el modelo de datos 'publicaciones'

//_____________________________________________________________________________________________________________________________
//-------POST--------------------------------------CREAR UNA PUBLICACION-------------------------------------------------------
//_____________________________________________________________________________________________________________________________
   
    ctrl.crearPublicacion =  async (req, res)=> {              
        try{
            const publicacion = await Publicaciones.create(req.body);
            res.send({
                msg: "Publicacion creada con exito",publicacion//tengo que escribir 'publicacion' para ver lo que guarde
            })
        }catch(error){
            console.log(error);
            return res.status(500).json({
                msg: "Error al crear nueva publicacion"
            })
                
        }
    }
//_____________________________________________________________________________________________________________________________
//----GET-------------------------------------------OBTENER LAS PUBLICACIONES---------------------------------------------------
//_____________________________________________________________________________________________________________________________
    ctrl.obtenerPublicaciones =  async (req, res)=> {
        const publicaciones = await Publicaciones.findAll();
        res.json(publicaciones)
        
    }
//_____________________________________________________________________________________________________________________________
//---------PUT-------------------------------------ACTUALIZAR PUBLICACION------------------------------------------------------
//_____________________________________________________________________________________________________________________________    

    ctrl.actualizarPublicacion =  async (req, res)=> {
        
        const{id} = req.params;//Aca solo accedo los parametros de la variable id
        const publicacion = await Publicaciones.findByPk(id);//Se busca una publicación en la BS cuya clave primaria coincida con el valor de id y lo guardo en una variable
        publicacion.set(req.body);//Actualizo los atributos de un objeto
        await publicacion.save();//Aca los guardo los datos 

        res.json({msg:
            "Publicacion actualizada correctamente"
        })

    }
//_____________________________________________________________________________________________________________________________
//-------DELETE------------------------------------ELIMINAR LAS PUBLICACIONES--------------------------------------------------
//_____________________________________________________________________________________________________________________________    
    ctrl.eliminarPublicaciones =  async (req, res)=> {
        
        const{id} = req.params;//Aca solo accedo los parametros de la variable id
    //  const publicacion = await Publicaciones.findByPk(id);
    //  await publicacion.destroy(id);//Aca borro todo lo q contenga el id 
        const borrado=await Publicaciones.destroy(
            {where: 
                {id}
            }
        )        
        res.json({msg:
            "Publicacion eliminada correctamente"
        })

    }


module.exports = ctrl;//lo utilizo en blog.routes.js linea