const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "omju",
    password: "omauri.Postgres0691",
    database: "myStore"
});

module.exports = pool;
