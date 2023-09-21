const { Sequelize, DataTypes } = require('sequelize');//importando las clases y funciones necesarias de la biblioteca Sequelize

const sequelize = new Sequelize('pruebadb', 'root', '', {// Se crea una instancia de Sequelize con parametros
    host: 'localhost',
    dialect: 'mysql'
  });

  const conectarDB = async ()=> {//Se define una función asincrónica llamada conectarDB que intenta autenticarse

    try{
      await sequelize.authenticate();
      console.log('Conexion BD exitosa');
    }catch(error){
      console.error('Error:', error);  
    }  
  }
//Exportación de objetos: Se exportan varios objetos importantes para que puedan ser utilizados en
//otros archivos. Esto incluye la instancia sequelize, las clases Sequelize y DataTypes, y la función conectarDB.
module.exports =   {
    Sequelize,
    DataTypes,//,publicaciones.js linea 1
    sequelize,//lo utilizo en app.js linea 8,,,publicaciones.js linea 1
    conectarDB//lo utilizo en app.js linea 8,,
}
    /*
Aca configuramos  una conexión a una base de datos MySQL utilizando Sequelize
y proporciona una función para establecer y verificar la conexión con la base de datos. Puedes
importar estos objetos en otros archivos para definir modelos de datos y realizar operaciones
*/