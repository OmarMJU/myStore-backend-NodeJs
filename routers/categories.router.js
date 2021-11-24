const express = require("express");
const routerCategories = express.Router();

/* Endpoints categories */
routerCategories.get("/", (req, res) => {
    res.status(200).json([
        { name: "Salud", items: 20 },
        { name: "Belleza", items: 30 },
        { name: "Confort", items: 10 }
    ]);
});

routerCategories.get("/:categoryId/products/:productId", (req, res) => {
    const { categoryId, productId } = req.params;
    res.status(200).json({
        categoryId,
        productId
    });
});

module.exports = routerCategories;
