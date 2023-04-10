const { createPool } = require("mysql")

const pool = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "employee",
    connectionLimit: 10
});
// pool.getConnection((error)=>{
//     console.log(error);
//     if(!error) console.log("successful")
// })

module.exports = pool;