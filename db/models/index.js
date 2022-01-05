const { UserSchema, User } = require("./userModel");
const { CategoriesSchema, Category } = require("./categoriesModel")
const { ProductsSchema, Products } = require("./productsModel");
const { costumerSchema, Costumer } = require("./costumerModel");

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
    Costumer.init(costumerSchema, Costumer.config(sequelize));

    // Asociaciones
    Costumer.associate(sequelize.models);
    User.associate(sequelize.models);
}

module.exports = setupModels;
