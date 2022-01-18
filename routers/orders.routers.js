const express = require("express");
const OrderService = require("../services/orders.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { getOrderSchema, createOrderSchema, updateOrderSchema } = require("../schemas/ordersDTO");

const routerOrders = express.Router();
const service = new OrderService();

routerOrders.get("/", async (req, res, next) => {
    try {
        const orders = await service.getAll();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
});

routerOrders.get("/:id", validatorHandler(getOrderSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const order = await service.getOne(id);
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
});

routerOrders.post("/", validatorHandler(createOrderSchema, "body"), async (req, res, next) => {
    const datas = req.body;

    try {
        const order = await service.create(datas);

        res.status(201).json({
            message: "Order Created",
            order
        });
    } catch (error) {
        next(error);
    }
});

routerOrders.patch("/:id", validatorHandler(getOrderSchema, "params"), validatorHandler(updateOrderSchema, "body"), async (req, res, next) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const orderUpdated = await service.update(id, datas);

        res.status(201).json({
            message: "Order Updated",
            orderUpdated
        });
    } catch (error) {
        next(error);
    }
});

routerOrders.delete("/:id", validatorHandler(getOrderSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const orderDeleted = await service.delete(id);

        res.status(201).json({
            message: "Order deleted",
            orderDeleted
        });
    } catch (error) {
        next(error);
    }
});

module.exports = routerOrders;
