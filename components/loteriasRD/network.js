const express = require('express');
const response = require('../response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
    const fecha     = req.query.fecha   || null;
    const loteria   = req.query.loteria || null;
    const sorteo    = req.query.sorteo  || null;

    console.log(`SE HIZO UNA PETICION GET => PARAMETROS ENVIADOS => fecha: ${fecha} loteria: ${loteria} sorteo: ${sorteo}`);
    controller.getLoteria(fecha, loteria,sorteo)
        .then((messageList) => {
            response.success(req,res,messageList,200);
        })
        .catch(e => {
            console.log('HUBO UN ERROR EN LA PETICION GET => ', e);
            response.error(req,res,'Hubo un error',500,e)
        })
})

router.post('/', (req, res) => {

    const loteria           = req.body.loteria;
    const sorteo            = req.body.sorteo;
    const numeros_ganadores = req.body.numeros_ganadores;
    const fecha             = req.body.fecha;
    const agregado_por      = req.body.agregado_por;
    console.log(`SE HIZO UNA PETICION POST => BODY ENVIADOS => loteria: ${loteria} sorteo: ${sorteo} numeros_ganadores: ${numeros_ganadores} fecha: ${fecha} agregado_por: ${agregado_por}`);
    controller.addLoteria(loteria, sorteo, numeros_ganadores, fecha, agregado_por)
        .then((data)=>{
            response.success(req,res,data,201)
        })
        .catch(e => {
            response.error(req, res, 'ERROR: Informacion Invalida', 400, 'El Json se envio Malo')
        })
})

module.exports = router;