
const express = require('express');

const router = require('./components/router');



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app)


app.listen(3000);
console.log('La aplicación está corriendo en el puerto 3000');
