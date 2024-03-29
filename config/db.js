const { createPool } = require("mysql")

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    connectionLimit: 10
});
pool.getConnection((error) => {
    if (!error){
        return console.log("DB Connected!")
    }
    console.log(error)
})

module.exports = pool;