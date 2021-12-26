'use strict';

const { CategoriesSchema, CATEGORIES_TABLE } = require("../models/categoriesModel");
const { ProductsSchema, PRODUCTS_TABLE } = require("../models/productsModel");


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(CATEGORIES_TABLE);
    await queryInterface.drop(PRODUCTS_TABLE);
  }
};
