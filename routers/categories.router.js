const express = require("express");
const CategoriesServie = require("../services/categories.service");
const routerCategories = express.Router();

// Instancia del servicio.
const service = new CategoriesServie();

// Todas la categorias.
routerCategories.get("/", async (req, res) => {
    const categories = await service.getAll();
    res.status(200).json(categories);
});

// Categoria por id.
routerCategories.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const category = await service.getOne(id);
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
});

// Crea categoria.
routerCategories.post("/", async (req, res) => {
    const datas = req.body;
    const categoryCreated = await service.create(datas);

    res.status(201).json({
        message: "Category created",
        categoryCreated
    });
});

// Actualiza categoria.
routerCategories.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const categoryUpdate = await service.update(id, datas);

        res.status(201).json({
            message: "Category updated",
            categoryUpdate
        });
    } catch (error) {
        res.status(404).json({
            error: "Error to update category",
            message: error
        });
    }
});

routerCategories.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const categoryDelete = await service.delete(id);

        res.status(201).json({
            message: "Category deleted",
            categoryDelete
        });
    } catch (error) {
        res.status(404).json({
            error: "Error to delete category",
            message: error
        });
    }
});

module.exports = routerCategories;
