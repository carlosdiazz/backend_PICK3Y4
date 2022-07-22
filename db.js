const db = require('mongoose');
db.Promise = global.Promise;

const uri = require('./config').uri;


const connect = async() => {
    try {
        await db.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conexion Exitosa Con la Base de Datos')
    } catch (error) {
        console.log('Error al conectar con la base de datos')
        console.log(error)
    }
}

module.exports = connect
