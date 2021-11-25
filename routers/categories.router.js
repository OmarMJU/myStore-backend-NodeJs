const express = require("express");
const CategoriesServie = require("../services/categories.service");
const routerCategories = express.Router();

// Instancia del servicio.
const service = new CategoriesServie();

// Todas la categorias.
routerCategories.get("/", (req, res) => {
    const categories = service.getAll();
    res.status(200).json(categories);
});

// Categoria por id.
routerCategories.get("/:id", (req, res) => {
    const { id } = req.params;
    const category = service.getOne(id);
    res.status(200).json(category);
});

// Crea categoria.
routerCategories.post("/", (req, res) => {
    const datas = req.body;
    const categoryCreated = service.create(datas);

    res.status(201).json({
        message: "Category created",
        categoryCreated
    });
});

// Actualiza categoria.
routerCategories.patch("/:id", (req, res) => {
    const { id } = req.params;
    const datas = req.body;
    const categoryUpdate = service.update(id, datas);

    res.status(201).json({
        message: "Category updated",
        categoryUpdate
    });
});

routerCategories.delete("/:id", (req, res) => {
    const { id } = req.params;
    const categoryDelete = service.delete(id);

    res.status(201).json({
        message: "Category deleted",
        categoryDelete
    });
});

module.exports = routerCategories;
