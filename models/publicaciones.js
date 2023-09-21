const { DataTypes,Sequelize,sequelize } = require('../database')//importamos del archivo databases

const Publicacion = sequelize.define('Publicacion',{//el metodo define un arg y un objeto
    id:{
        type: DataTypes.INTEGER,//en la bs define el string
        primaryKey: true,
        autoIncrement: true//no permite valores nulos
    },
    titulo:{
        type: DataTypes.STRING(255),//en la bs define el string
        allowNull: false//no permite valores nulos
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    url_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
},{
    tableName:'publicaciones',
    timestamps: false
});
//Todos estos datos titulo detalle url_imagen y fecha de publicacion tiene q estar configurado en blog.routes
//Publicacion.sync()

module.exports = Publicacion;//lo utilizo blog.controllers.js  linea 2

/*Este código es una parte de un programa en JavaScript que utiliza Sequelize, una biblioteca de Node.js
para interactuar con bases de datos relacionales.

Aquí se define un modelo llamado "Publicacion" que representa una tabla en la base de datos. Aquí hay un resumen del código:

Se importan las dependencias necesarias desde un archivo llamado '../database', que parece contener
la configuración de Sequelize y las definiciones de DataTypes y sequelize.

Se define un modelo llamado "Publicacion" utilizando la función sequelize.define. Este modelo
representa una tabla en la base de datos con las siguientes columnas:

titulo: Una columna de tipo STRING con una longitud máxima de 255 caracteres y que no permite valores nulos.
detalle: Una columna de tipo STRING con una longitud máxima de 255 caracteres y que no permite valores nulos.
url_imagen: Una columna de tipo STRING con una longitud máxima de 255 caracteres que puede contener valores nulos.
fecha_publicacion: Una columna de tipo DATE que puede contener valores nulos y tiene un valor predeterminado
    que se establece en la fecha y hora actual cuando se inserta un nuevo registro en la tabla.

Se proporcionan opciones adicionales para el modelo, como configurar automáticamente las columnas
createdAt, updatedAt, y deletedAt y especificar el nombre de la tabla como 'publicaciones'.

Se exporta el modelo "Publicacion" para que pueda ser utilizado en otros lugares del programa.

Se comenta la línea Publicacion.sync() que probablemente se use para sincronizar el modelo con la base de datos,
pero está desactivada en este momento.

En resumen, este código define un modelo de Sequelize llamado "Publicacion" que representa una tabla en una
base de datos con varias columnas y opciones de configuración. Este modelo se exporta para su uso en otras
partes del programa.*/ 