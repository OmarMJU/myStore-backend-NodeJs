'use strict';

const { ORDER_TABLE } = require("../models/ordersModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn(ORDER_TABLE, "total_price:");
  },

  down: async (queryInterface) => {
    await queryInterface.addColumn(ORDER_TABLE, "total_price:", {
      allowNull: false,
      type: DataTypes.DOUBLE,
      field: "total_price"
    })
  }
};
