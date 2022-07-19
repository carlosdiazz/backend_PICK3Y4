const store = require('./store.js')

const addLoteria = (loteria,sorteo) => {
    return new Promise((resolve, reject) => {
        if(!loteria || !sorteo){
            console.log('Falta algo en el JSON')
            return reject('Falta informacion en el JSON');
        }else{

            const loteriaNEW = {
                "loteria"   : loteria,
                "sorteo"    : sorteo
            }

            console.log('Datos correctos')
            store.add(loteriaNEW)
            return resolve('Datos Añadidos Correctamente')
        }

    })
}

const getLoteria = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}


module.exports = {
    addLoteria,
    getLoteria
}