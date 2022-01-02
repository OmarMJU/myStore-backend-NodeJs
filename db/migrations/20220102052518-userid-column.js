'use strict';

const { COSTUMER_TABLE, costumerSchema } = require("../models/costumerModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(COSTUMER_TABLE, "user_id", costumerSchema.userId);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(COSTUMER_TABLE, "user_id");
  }
};
