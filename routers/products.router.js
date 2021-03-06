const express = require("express");
const ProductService = require("../services/products.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { createProductSchema, updateProductSchema, getProductSchema, getPaginationSchema } = require("../schemas/productsDTO");

// Router para redireccionar a productos.
const routerProducts = express.Router();

// Creando instancia del servicio.
const service =  new ProductService();

// Obtiene todos los productos.
routerProducts.get("/", validatorHandler(getPaginationSchema, "query"), async (req, res, next) => {
    try {
        const products = await service.getAll(req.query);
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

// Obtiene el producto por id.
routerProducts.get("/:id", validatorHandler(getProductSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const product = await service.getOne(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

// Crea producto.
routerProducts.post("/", validatorHandler(createProductSchema, "body"), async (req, res, next) => {
    const datas = req.body;

    try {
        const newProduct = await service.create(datas);

        res.status(201).json({
            message: "Product Created",
            newProduct
        });
    } catch (error) {
        next(error)
    }
});

// Actualiza producto.
routerProducts.patch("/:id", validatorHandler(getProductSchema, "params"), validatorHandler(updateProductSchema, "body"), async (req, res, next) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const productUpdate = await service.update(id, datas);

        res.status(201).json({
            message: "Product updated",
            productUpdate
        });
    } catch (error) {
        next(error);
    }
});

// Elimina producto.
routerProducts.delete("/:id", validatorHandler(getProductSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const productDelete = await service.delete(id);

        res.status(201).json({
            message: "Product deleted",
            productDelete
        });
    } catch (error) {
        next(error);
    }
});

module.exports = routerProducts;
