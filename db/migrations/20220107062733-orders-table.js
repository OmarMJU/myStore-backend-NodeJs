'use strict';

const { ORDER_TABLE, OrderSchema } = require("../models/ordersModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
