const { config } = require("../config/config");

const url = config.dbUrl;
const dialect = "postgres";

module.exports = {
    development: {
        url,
        dialect
    },
    production: {
        url,
        dialect,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
};
