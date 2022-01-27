'use strict';

const { CATEGORIES_TABLE } = require("../models/categoriesModel");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn(CATEGORIES_TABLE, "items");
  },

  down: async (queryInterface) => {
    await queryInterface.addColumn(CATEGORIES_TABLE, "items", {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    })
  }
};
