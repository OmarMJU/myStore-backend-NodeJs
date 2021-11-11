const express = require("express");
const app = express();
const _PORT = 3000;

app.get("/", (req, res) => {
    res.send("Soy tu servidor en Express");
});

app.get("/contact", (req, res) => {
    res.send("Seccion de contacto");
});

app.get("/products", (req, res) => {
    res.json([
        { name: "Microblading", price: 2500 },
        { name: "Lifting de pestañas", price: 600 },
        { name: "Facial", price: 300 },
        { name: "Maquillaje", price: 1500 }
    ]);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    res.json({ id, name: "Microblading", price: 2500 },);
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId
    });
});

app.listen(_PORT, () => {
    console.log("Escuchando desde el puerto", _PORT);
});
