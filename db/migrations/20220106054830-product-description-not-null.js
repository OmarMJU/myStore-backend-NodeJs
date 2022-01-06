'use strict';

const { PRODUCTS_TABLE, ProductsSchema } = require("../models/productsModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(PRODUCTS_TABLE, "description", ProductsSchema.description);
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(PRODUCTS_TABLE, "description", {
      allowNull: true,
      type: DataTypes.STRING
    })
  }
};
