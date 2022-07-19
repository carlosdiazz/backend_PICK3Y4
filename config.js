require('dotenv').config()

BASE_DE_DATOS_URI = process.env.URI

module.exports = {
    uri: BASE_DE_DATOS_URI
}