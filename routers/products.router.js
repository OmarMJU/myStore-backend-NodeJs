const express = require("express");
const faker = require("faker");
const routerProducts = express.Router();

/* Endpoints products */
routerProducts.get("/", (req, res) => {
    const products = [];
    const { limit } = req.query;
    const size = limit || 20;

    for (let i = 0; i < size; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        });
    }

    res.json(products);
});

routerProducts.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({ id, name: "Microblading", price: 2500 },);
});

routerProducts.post("/", (req, res) => {
    const body = req.body;

    res.json({
        message: "Created",
        data: body
    });
});

module.exports = routerProducts;
