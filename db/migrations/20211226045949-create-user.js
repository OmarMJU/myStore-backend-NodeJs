'use strict';

const { UserSchema, USER_TABLE } = require("../models/userModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.drop(USER_TABLE);
  }
};
