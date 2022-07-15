exports.success = function(req,res, message, status) {
    res.status(status||200).send({
        error: false,
        message: message
    });
}

exports.error = function(req,res, message, status,details) {
    console.log("ERROR => "+details || "NO HAY DETALLES");
    res.status(status||500).send({
        error: true,
        message: message
    });
}