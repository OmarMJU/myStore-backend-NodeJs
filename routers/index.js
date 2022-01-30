const express = require("express");

const routerUsers = require("./users.router");
const routerProducts = require("./products.router");
const routerCategories = require("./categories.router");
const routerCostumer = require("./costumer.routers");
const routerOrders = require("./orders.routers");
const cardsRouter = require("./creditCard.routers");

function routerApi(app) {
    const router = express.Router();

    app.use("/api/v1", router);
    router.use("/products", routerProducts);
    router.use("/categories", routerCategories);
    router.use("/users", routerUsers);
    router.use("/costumer", routerCostumer);
    router.use("/orders", routerOrders);
    router.use("/cards", cardsRouter)
}

module.exports = routerApi;
