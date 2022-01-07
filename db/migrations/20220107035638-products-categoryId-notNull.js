'use strict';

const { PRODUCTS_TABLE, ProductsSchema } = require("../models/productsModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(PRODUCTS_TABLE, "category_id", ProductsSchema.categoryId);
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(PRODUCTS_TABLE, "category_id", {
      field: "category_id",
      allowNull: true,
      type: DataTypes.INTEGER,
    });
  }
};
