'use strict';

const { COSTUMER_TABLE, costumerSchema, Costumer } = require("../models/costumerModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(COSTUMER_TABLE, "phoneNumber", costumerSchema.phoneNumber);
    await queryInterface.renameColumn(COSTUMER_TABLE, "phoneNumber", "phone_number");
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(COSTUMER_TABLE, "phoneNumber");
  }
};
