'use strict';

const { PRODUCTS_TABLE, ProductsSchema } = require("../models/productsModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(PRODUCTS_TABLE, "description", ProductsSchema.description);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(PRODUCTS_TABLE, "description");
  }
};
