const loterias = [

];

const addLoteria = (message) => {
    loterias.push(message);
}

const getLoteria = () => {
    return loterias
}

module.exports = {
    add : addLoteria,
    list: getLoteria
    //get
    //update
    //delete
}