const db = require('mongoose');
const Model = require('./model');

//! TENGO QUE AGREGAR LA URI DE LA BASE DE DATOS
const uri = require('../../config').uri;


db.Promise = global.Promise;
db.connect(uri,{
    useNewUrlParser: true,
    })
    .then(() => console.log('Conexion Exitosa Con la Base de Datos'))
    .catch(err => console.log(err));



const addLoteria = (message) => {
    const newLoteria = new Model(message);
    newLoteria.save();
    //loterias.push(message);
}

const getLoterias = async(filterFechaLoteria) => {
    if(filterFechaLoteria){
        return await Model.find({fecha: filterFechaLoteria});
    }else{
        const loterias = await Model.find();
        return loterias
}}

module.exports = {
    add : addLoteria,
    list: getLoterias
    //get
    //update
    //delete
}