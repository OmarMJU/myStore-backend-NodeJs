'use strict';

const { COSTUMER_TABLE } = require("../models/costumerModel");
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(COSTUMER_TABLE, "user_id", {
      field: "user_id",
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(COSTUMER_TABLE, "user_id", {
      field: "user_id",
      allowNull: false,
      type: DataTypes.INTEGER
    });
  }
};
