const routerApi = require("./routers");
const express = require("express");
const app = express();
const _PORT = 3000;

/* Endpoints home */
app.get("/", (req, res) => {
    res.send("Soy tu servidor en Express");
});

app.listen(_PORT, () => {
    console.log("Escuchando desde el puerto", _PORT);
});

routerApi(app);
