'use strict';

const { PRODUCTS_TABLE, ProductsSchema } = require("../models/productsModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(PRODUCTS_TABLE, "category_id", ProductsSchema.categoryId);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(PRODUCTS_TABLE, "category_id");
  }
};
