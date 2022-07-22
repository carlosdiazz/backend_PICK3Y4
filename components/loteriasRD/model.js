const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    loteria: {
        type: String,
        required: true
    },
    sorteo: {
        type: String,
        required: true
    },
    numeros_ganadores: {
        type: Object,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    agregado_por: {
        type: String,
        required: true
    }
})

//Como se va a llamar la coleccion en Nuestra Base de Datos
const model = mongoose.model('LoteriaRD', mySchema);
module.exports = model;
