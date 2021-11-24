const express = require("express");
const routerCategories = express.Router();

// Todas la categorias.
routerCategories.get("/", (req, res) => {
    res.status(200).json([
        { name: "Salud", items: 20 },
        { name: "Belleza", items: 30 },
        { name: "Confort", items: 10 }
    ]);
});

// Categoria por id.
routerCategories.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        id,
        categoryName: "Salud"
    });
});

// Crea categoria.
routerCategories.post("/", (req, res) => {
    const datas = req.body;

    res.status(201).json({
        message: "Category created",
        datas
    });
});

// Actualiza categoria.
routerCategories.patch("/:id", (req, res) => {
    const { id } = req.params;
    const datas = req.body;

    res.status(201).json({
        message: "Category updated",
        id,
        datas
    });
});

routerCategories.delete("/:id", (req, res) => {
    const { id } = req.params;

    res.status(201).json({
        id,
        message: "Category deleted"
    });
});

module.exports = routerCategories;
