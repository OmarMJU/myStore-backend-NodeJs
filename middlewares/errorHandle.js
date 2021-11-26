// Middleware para error en log.
function logError(err, req, res, next) {
    console.log("Desde el Middleware logError");
    console.error(err);
    next(err);
}

// Middleware para mandar JSON de respuesta.
function errorHandle(err, req, res, next) {
    console.log("Desde el Middleware errorHandle");
    res.status(500).json(err);
}

// Middleware para error gestionado por Boom.
function boomErrorHandle(err, req, res, next) {
    console.log("Desde el Middleware Boom");

    if (err.isBoom) {
        console.log("Soy Boom, lo gestiona (ver Postman)");
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    } else {
        console.log("No soy Boom, no gestiona");
        next(err);
    }
}

module.exports = { logError, errorHandle, boomErrorHandle };
