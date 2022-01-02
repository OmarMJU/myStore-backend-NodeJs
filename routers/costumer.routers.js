const express = require("express");
const CostumerService = require("../services/costumer.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { getCustomerSchema, createCustomerSchema, updateCustomerSchema } = require("../schemas/costumerDTO");

// Router para los clientes.
const routerCostumer = express.Router();

// Instancia del servicio.
const service = new CostumerService();

// Todos los clientes.
routerCostumer.get("/", async (req, res, next) => {
    try {
        const costumers = await service.getAll();
        res.status(200).json(costumers);
    } catch (error) {
        next(error);
    }
});

// Cliente por id.
routerCostumer.get("/:id", validatorHandler(getCustomerSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const costumer = await service.getOne(id);
        res.status(200).json(costumer);
    } catch (error) {
        next(error);
    }
});

// Crea un cliente.
routerCostumer.post("/", validatorHandler(createCustomerSchema, "body"), async (req, res, next) => {
    const datas = req.body;

    try {
        const costumerCreated = await service.create(datas);
        res.status(201).json({
            message: "Costumer created",
            costumerCreated
        });
    } catch (error) {
        next(error);
    }
});

// Actualiza un cliente
routerCostumer.patch("/:id", validatorHandler(getCustomerSchema, "params"), validatorHandler(updateCustomerSchema, "body"), async (req, res, next) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const costumerUpdated = await service.update(id, datas);

        res.status(201).json({
            message: "Costumer updated",
            costumerUpdated
        });
    } catch (error) {
        next(error);
    }
});

// Elimina un cliente.
routerCostumer.delete("/:id", validatorHandler(getCustomerSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const costumerDeleted = await service.delete(id);

        res.status(201).json({
            message: "Costumer deleted",
            costumerDeleted
        });
    } catch (error) {
        next(error);
    }
});

module.exports = routerCostumer;
