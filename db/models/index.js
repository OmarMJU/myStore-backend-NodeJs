const { UserSchema, User } = require("./userModel");
const { CategoriesSchema, Category } = require("./categoriesModel")
const { ProductsSchema, Products } = require("./productsModel");

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
}

module.exports = setupModels;
