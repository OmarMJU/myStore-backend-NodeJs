const express = require("express");
const app = express();
const _PORT = 3000;

app.get("/", (request, response) => {
    response.send("Soy tu servidor en Express");
});

app.get("/contact", (req, res) => {
    res.send("Seccion de contacto");
});

app.get("/products", (req, res) => {
    res.json({
        products: [
            {name: "Microblading", price: 2500},
            {name: "Lifting de pestañas", price: 600},
            {name: "Facial", price: 300},
            {name: "Maquillaje", price: 1500}
        ]
    });
});

app.listen(_PORT, () => {
    console.log("Escuchando desde el puerto", _PORT);
});
