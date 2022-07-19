
const Model = require('./model');

const addLoteria = (message) => {
    const newLoteria = new Model(message);
    newLoteria.save();
}

const getLoterias = async(filterFechaLoteria, filterNameLoteria, filterSorteoLoteria) => {

    let filter = {};
    if (filterFechaLoteria) {
        filter.fecha = filterFechaLoteria;
    }
    if (filterNameLoteria) {
        filter.loteria = filterNameLoteria;
    }
    if (filterSorteoLoteria) {
        filter.sorteo = filterSorteoLoteria;
    }
    console.log(filter);
    const loterias = await Model.find(filter);
    return loterias
}

module.exports = {
    add : addLoteria,
    list: getLoterias

}