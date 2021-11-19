const express = require("express");

const routerUsers = require("./users.router");
const routerProducts = require("./products.router");
const routerCategories = require("./categories.router");

function routerApi(app) {
    const router = express.Router();

    app.use("/api/v1", router);
    router.use("/products", routerProducts);
    router.use("/categories", routerCategories);
    router.use("/users", routerUsers);
}

module.exports = routerApi;
