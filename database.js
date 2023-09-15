const { Sequelize, DataTypes } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('pruebadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const conectarDB = async ()=> {

    try{
      await sequelize.authenticate();
      console.log('Conexion BD exitosa');
    }catch(error){
      console.error('Error:', error);  
    }  
  }

module.exports =   {
    Sequelize,//voy a exportar my BD
    sequelize,//exporto solo
    DataTypes,
    conectarDB
}