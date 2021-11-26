const routerApi = require("./routers");
const express = require("express");
const { logError, errorHandle } = require("./middlewares/errorHandle");

const app = express();
const _PORT = 3000;

// Middleware para respuestas en formato JSON
app.use(express.json());

/* Endpoints home */
app.get("/", (req, res) => {
    res.send("Soy tu servidor en Express");
});

app.listen(_PORT, () => {
    console.log("Escuchando desde el puerto", _PORT);
});

routerApi(app);

app.use(logError);
app.use(errorHandle);
