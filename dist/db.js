const pg = require('pg');

const pool = new  pg.Pool({
     user: "postgres",
     password: "7399",
     host: "localhost",
     port: "5432",
     database: "perntodo"
})

module.exports = pool;

/*
     psql -U postgres = select postgres user in psql
     \l = list all databased
     \c [database name] = select database
     \dt = display all tables in db
*/