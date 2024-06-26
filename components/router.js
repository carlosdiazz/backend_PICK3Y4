const loterias = require('./loterias/network'); // Importo el archivo de ruta de Loteria
const loteriasRD = require('./loteriasRD/network');

const routes = (server) => {
    server.use('/api/v1/loterias', loterias);
    server.use('/api/v1/loteriasRD', loteriasRD);
}

module.exports = routes