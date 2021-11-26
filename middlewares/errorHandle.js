function logError(err, req, res, next) {
    console.log("Desde el Middleware logError");
    console.error(err);
    next(err);
}

function errorHandle(err, req, res, next) {
    console.log("Desde el Middleware errorHandle");
    res.status(500).json(err);
}

module.exports = { logError, errorHandle };
