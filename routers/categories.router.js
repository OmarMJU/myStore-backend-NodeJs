const express = require("express");
const CategoriesServie = require("../services/categories.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { getCategorySchema, createCategorySchema, updateCategorysSchema } = require("../schemas/categoriesDTO");

// Ruteador para las categorìas.
const routerCategories = express.Router();

// Instancia del servicio.
const service = new CategoriesServie();

// Todas la categorias.
routerCategories.get("/", async (req, res) => {
    const categories = await service.getAll();
    res.status(200).json(categories);
});

// Categoria por id.
routerCategories.get("/:id", validatorHandler(getCategorySchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const category = await service.getOne(id);
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
});

// Crea categoria.
routerCategories.post("/", validatorHandler(createCategorySchema, "body"), async (req, res) => {
    const datas = req.body;
    const categoryCreated = await service.create(datas);

    res.status(201).json({
        message: "Category created",
        categoryCreated
    });
});

// Actualiza categoria.
routerCategories.patch("/:id", validatorHandler(getCategorySchema, "params"), validatorHandler(updateCategorysSchema, "body"), async (req, res, next) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const categoryUpdate = await service.update(id, datas);

        res.status(201).json({
            message: "Category updated",
            categoryUpdate
        });
    } catch (error) {
        next(error);
    }
});

routerCategories.delete("/:id", validatorHandler(getCategorySchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const categoryDelete = await service.delete(id);

        res.status(201).json({
            message: "Category deleted",
            categoryDelete
        });
    } catch (error) {
        next(error);
    }
});

module.exports = routerCategories;
