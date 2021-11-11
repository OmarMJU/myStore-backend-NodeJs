const express = require("express");
const app = express();
const _PORT = 3000;

app.get("/", (request, response) => {
    response.send("Soy tu servidor en Express");
});

app.listen(_PORT, () => {
    console.log("Escuchando desde el puerto", _PORT);
});
