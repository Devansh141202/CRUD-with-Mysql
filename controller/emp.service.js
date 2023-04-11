const pool = require("../config/db")

module.exports = {
    create: (data, callback) => {
        pool.query(

            `insert into employee_info(fname, jobTitle, phoneNum, email, address, city, state, Pec, PECphone,pecRelation, Sec, SECphone, secRelation) values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,

            [
                data.fname,
                data.jobTitle,
                data.phoneNum,
                data.email,
                data.address,
                data.city,
                data.state,
                data.Pec,
                data.PECphone,
                data.pecRelation,
                data.Sec,
                data.SECphone,
                data.secRelation,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    },
    getAllEmp:(callback)=>{
        pool.query(
            `select * from employee_info`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    },
    getEmpById: (id, callback) => {
        pool.query(
            `select fname, jobTitle, phoneNum, email, address, city, state, Pec, PECphone,pecRelation, Sec, SECphone, secRelation from employee_info where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0])
            }
        )
    },
    updateEmp: (id, data, callback) => {
        pool.query(
            `update employee_info set fname=?, jobTitle=?, phoneNum=?, email=?, address=?, city=?, state=?, Pec=?, PECphone=?,pecRelation=?, Sec=?, SECphone=?, secRelation=? where id=?`,
            [
                data.fname,
                data.jobTitle,
                data.phoneNum,
                data.email,
                data.address,
                data.city,
                data.state,
                data.Pec,
                data.PECphone,
                data.pecRelation,
                data.Sec,
                data.SECphone,
                data.secRelation,
                id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0])
            }
        )
    },
    deleteEmp: (id, callback) => {
        pool.query(
            `delete from employee_info where id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            }
        )
    }
}