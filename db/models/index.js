const { UserSchema, User } = require("./userModel");
const { CategoriesSchema, Category } = require("./categoriesModel")

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));
}

module.exports = setupModels;
