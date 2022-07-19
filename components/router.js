const loterias = require('./loterias/network'); // Importo el archivo de ruta de Loteria

const routes = (server) => {
    server.use('/api/v1/loterias', loterias);
}

module.exports = routes