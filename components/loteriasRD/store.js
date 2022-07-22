
const Model = require('./model');

const addLoteria = (message) => {
    const newLoteria = new Model(message);
    newLoteria.save();
}

const getLoterias = async(fecha, loteria, sorteo) => {

    let filter = {};
    if (fecha) {
        filter.fecha = fecha;
    }
    if (loteria) {
        filter.loteria = loteria;
    }
    if (sorteo) {
        filter.sorteo = sorteo;
    }
    //console.log(filter);
    const loterias = await Model.find(filter);
    return loterias
}

module.exports = {
    add : addLoteria,
    list: getLoterias

}