const store = require('./store.js')

const addLoteria = (loteria, sorteo,numeros_ganadores,fecha,agregado_por ) => {
    return new Promise((resolve, reject) => {
        if(!loteria || !sorteo || !numeros_ganadores || !fecha || !agregado_por){
            console.log('Falta algo en el JSON')
            return reject('Falta informacion en el JSON');
        }else{

            const loteriaNEW = {
                "loteria"   : loteria,
                "sorteo"    : sorteo,
                "numeros_ganadores": numeros_ganadores,
                "fecha"     : fecha,
                "agregado_por": agregado_por
            }

            console.log('Datos correctos')
            store.add(loteriaNEW)
            return resolve('Datos Añadidos Correctamente')
        }

    })
}

const getLoteria = (filterFechaLoteria, filterNameLoteria, filterSorteoLoteria) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterFechaLoteria,filterNameLoteria, filterSorteoLoteria));
    })
}


module.exports = {
    addLoteria,
    getLoteria
}