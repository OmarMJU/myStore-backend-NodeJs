const { json } = require("express");
const express = require("express");
const ProductService = require("../services/products.service");
const routerProducts = express.Router();

// Creando instancia del servicio.
const service =  new ProductService();

// Obtiene todos los productos.
routerProducts.get("/", async (req, res) => {
    const products = await service.getAll();
    res.status(200).json(products);
});

// Obtiene el producto por id.
routerProducts.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const product = await service.getOne(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({
            error: "Error to get product",
            message: error
        });
    }
});

// Crea producto.
routerProducts.post("/", async (req, res) => {
    const datas = req.body;
    const newProduct = await service.create(datas);

    res.status(201).json({
        message: "Product Created",
        newProduct
    });
});

// Actualiza producto.
routerProducts.patch("/:id",  async (req, res) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const productUpdate = await service.update(id, datas);

        res.status(201).json({
            message: "Product updated",
            productUpdate
        });
    } catch (error) {
        res.status(404).json({
            error: "Error to udate product",
            message: error
        });
    }
});

// Elimina producto.
routerProducts.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const productDelete = await service.delete(id);

        res.status(201).json({
            message: "Product deleted",
            productDelete
        });
    } catch (error) {
        res.status(404).json({
            error: "Error to delete product",
            message: error
        });
    }
});

module.exports = routerProducts;
