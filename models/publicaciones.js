const { DataTypes,Sequelize,sequelize } = require('../database')//importamos del archivo databases

const Publicacion = sequelize.define('Publicacion',{//el metodo define un arg y un objeto
    titulo:{
        type: DataTypes.STRING(255),//en la bs define el string
        allowNull: false//no permite valores nulos
    },
    detalle: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    url_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    createAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName:'publicaciones'
})
//Todos estos datos titulo detalle url_imagen y fecha de publicacion tiene q estar configurado en blog.routes
//Publicacion.sync()

module.exports = Publicacion;