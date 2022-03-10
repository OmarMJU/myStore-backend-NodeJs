const { UserSchema, User } = require("./userModel");
const { CategoriesSchema, Category } = require("./categoriesModel")
const { ProductsSchema, Products } = require("./productsModel");
const { costumerSchema, Costumer } = require("./costumerModel");
const { OrderSchema, Order } = require("./ordersModel");
const { OrderProductSchema, OrderProduct } = require("./orderProductsModel");
const { creditCardSchema, CreditCard } = require("./creditCardModel");
const { userCardSchema, UserCard } = require("./userCardModel");

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
    Costumer.init(costumerSchema, Costumer.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
    CreditCard.init(creditCardSchema, CreditCard.config(sequelize));
    UserCard.init(userCardSchema, UserCard.config(sequelize));

    // Asociaciones
    Costumer.associate(sequelize.models);
    User.associate(sequelize.models);
    Category.associate(sequelize.models);
    Products.associate(sequelize.models);
    Order.associate(sequelize.models);
    CreditCard.associate(sequelize.models);
}

module.exports = setupModels;
