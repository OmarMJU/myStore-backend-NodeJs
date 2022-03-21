const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../db/models");

const optionsProd = {
    logging: true
};

const options = {
    dialect: "postgres",
};

if(config.isProd) {
    optionsProd.logging = false;
    optionsProd.ssl = {
        rejectUnauthorized: false
    }
}

const sequelize = new Sequelize(config.dbUrl, {
    ...options,
    ...optionsProd
});

setupModels(sequelize);

module.exports = sequelize;
