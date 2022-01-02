'use strict';

const { costumerSchema, COSTUMER_TABLE } = require("../models/costumerModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(COSTUMER_TABLE, costumerSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(COSTUMER_TABLE);
  }
};
