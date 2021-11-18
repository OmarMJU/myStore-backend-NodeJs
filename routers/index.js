const routerUsers = require("./users.router");
const routerProducts = require("./products.router");
const routerCategories = require("./categories.router");

function routerApi(app) {
    app.use("/products", routerProducts);
    app.use("/categories", routerCategories);
    app.use("/users", routerUsers);
}

module.exports = routerApi;
