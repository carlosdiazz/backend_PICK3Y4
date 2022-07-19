
const express = require('express');
const db = require('./db');
const router = require('./components/router');
const app = express();

const port = require('./config').port;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
db()
router(app)


app.listen(port);
console.log(`La aplicación está corriendo en el puerto ${port}`);
