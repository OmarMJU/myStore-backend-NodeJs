'use strict';

const { CATEGORIES_TABLE, CategoriesSchema } = require("../models/categoriesModel");
const { COSTUMER_TABLE, costumerSchema } = require("../models/costumerModel");
const { CREDIT_CARD_TABLE, creditCardSchema } = require("../models/creditCardModel");
const { ORDER_PRODUCT_TABLE, OrderProductSchema } = require("../models/orderProductsModel");
const { ORDER_TABLE, OrderSchema } = require("../models/ordersModel");
const { PRODUCTS_TABLE, ProductsSchema } = require("../models/productsModel");
const { USER_TABLE, UserSchema } = require("../models/userModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(COSTUMER_TABLE, costumerSchema);
    await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(CREDIT_CARD_TABLE, creditCardSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(COSTUMER_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(CREDIT_CARD_TABLE);
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
};
