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
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        });
    }

    res.status(200).json(products);
});

routerProducts.get("/:id", (req, res) => {
    const { id } = req.params;

    if (id === "666") {
        res.status(404).json({
            message: "The resourse not found :("
        });
    } else {
        res.status(200).json({
            id,
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        });
    }
});

routerProducts.post("/", (req, res) => {
    const datas = req.body;

    res.status(201).json({
        message: "Product created",
        id: faker.datatype.uuid(),
        datas
    });
});

routerProducts.patch("/:id",  (req, res) => {
    const { id } = req.params;
    const datas = req.body;

    res.status(201).json({
        message: "Product updated",
        id,
        datas
    });
});

routerProducts.delete("/:id", (req, res) => {
    const { id } = req.params;

    res.status(201).json({
        id,
        message: "Product deleted"
    });
});

module.exports = routerProducts;
