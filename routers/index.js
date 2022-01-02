const express = require("express");

const routerUsers = require("./users.router");
const routerProducts = require("./products.router");
const routerCategories = require("./categories.router");
const routerCostumer = require("./costumer.routers");

function routerApi(app) {
    const router = express.Router();

    app.use("/api/v1", router);
    router.use("/products", routerProducts);
    router.use("/categories", routerCategories);
    router.use("/users", routerUsers);
    router.use("/costumer", routerCostumer);
}

module.exports = routerApi;
