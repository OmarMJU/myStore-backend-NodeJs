const routerApi = require("./routers");
const express = require("express");
const cors = require("cors");
const { logError, errorHandle, boomErrorHandle } = require("./middlewares/errorHandle");

const app = express();
const _PORT = 3000;

// Middleware para respuestas en formato JSON
app.use(express.json());
app.use(cors());

/* Endpoints home */
app.get("/", (req, res) => {
    res.send("Soy tu servidor en Express");
});

app.listen(_PORT, () => {
    console.log("Escuchando desde el puerto", _PORT);
});

routerApi(app);

// Middlewares para gestion de errores.
app.use(logError);
app.use(boomErrorHandle);
app.use(errorHandle);
