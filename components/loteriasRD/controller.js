const store = require('./store.js')

const addLoteria = (loteria, sorteo,numeros_ganadores,fecha,agregado_por ) => {
    return new Promise((resolve, reject) => {
        if(!loteria || !sorteo || !numeros_ganadores || !fecha || !agregado_por){
            console.log('Falta algo en el JSON NO SE PUEDE PUBLICAR')
            return reject('Falta informacion en el JSON');
        }else{

            const loteriaNEW = {
                "loteria"           : loteria,
                "sorteo"            : sorteo,
                "numeros_ganadores" : numeros_ganadores,
                "fecha"             : fecha,
                "agregado_por"      : agregado_por
            }
            store.add(loteriaNEW)
            console.log(`SE ACABA DE PUBLICAR LA LOTERIA: ${loteria} SORTEO: ${sorteo} FECHA: ${fecha} AGREGADO POR: ${agregado_por}`)
            return resolve('Datos Añadidos Correctamente')
        }

    })
}

const getLoteria = (fecha, loteria, sorteo) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(fecha,loteria, sorteo));
    })
}


module.exports = {
    addLoteria,
    getLoteria
}