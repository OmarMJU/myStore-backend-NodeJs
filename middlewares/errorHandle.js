// Middleware para error en log.
function logError(err, req, res, next) {
    console.log("Desde el Middleware logError");
    console.error("error pased", err);
    next(err);
}

// Middleware para errores ORM.
function ormErrorHandle(err, req, res, next) {
    console.log("Desde el validador ORM");

    if (err.name === "SequelizeValidationError") {
        console.log("Se valida para un ORM");

        res.status(409).json({
            statusCode: 409,
            type: err.name,
            message: err.message,
            errors: err.errors,
            stack: err.stack
        });
    }

    next(err);
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

// Middleware para mandar JSON de respuesta.
function errorHandle(err, req, res, next) {
    console.log("Desde el Middleware errorHandle");
    res.status(500).json(err);
}

module.exports = { logError, errorHandle, boomErrorHandle, ormErrorHandle };
