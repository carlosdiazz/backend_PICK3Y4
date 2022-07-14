
const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(router);


router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.post('/', (req, res) => {
    res.send('Hello World!');
    console.log(req.body);
    console.log(req.query);
})

app.listen(3000);
console.log('La aplicación está corriendo en el puerto 3000');