const express = require("express");
const ProductService = require("../services/products.service");
const routerProducts = express.Router();

// Creando instancia del servicio.
const service =  new ProductService();

// Obtiene todos los productos.
routerProducts.get("/", (req, res) => {
    const products = service.getAll();
    res.status(200).json(products);
});

// Obtiene el producto por id.
routerProducts.get("/:id", (req, res) => {
    const { id } = req.params;
    const product = service.getOne(id);
    res.status(200).json(product);
});

// Crea producto.
routerProducts.post("/", (req, res) => {
    const datas = req.body;
    const newProduct = service.create(datas);
    res.status(201).json(newProduct);
});

// Actualiza producto.
routerProducts.patch("/:id",  (req, res) => {
    const { id } = req.params;
    const datas = req.body;
    const productUpdate = service.update(id, datas);
    res.status(201).json(productUpdate);
});

// Elimina producto.
routerProducts.delete("/:id", (req, res) => {
    const { id } = req.params;
    const productDelete = service.delete(id);
    res.status(201).json(productDelete);
});

module.exports = routerProducts;
