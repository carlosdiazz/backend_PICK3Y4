const express = require('express');
const response = require('../response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('Hello World!');
    //response.error(req,res,"Hello World!",201,'siMULANDO ERROR');
    //response.success(req,res,"Hello World!",201,'siMULANDO ERROR');
    controller.getLoteria()
        .then((messageList) => {
            response.success(req,res,messageList,200);
        })
        .catch(e => {
            response.error(req,res,'Hubo un error',500,e)
        })
})

router.post('/', (req, res) => {
    controller.addLoteria(req.body.loteria, req.body.sorteo)
        .then((data)=>{
            response.success(req,res,data,201)
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida', 400, 'El Json se envio Malo')
        })
    //res.send('Hello World!');
    //console.log(req.body);
    //console.log(req.query);
})

module.exports = router;