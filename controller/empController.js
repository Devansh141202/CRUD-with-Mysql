const { create, getEmpById, updateEmp, deleteEmp, getAllEmp } = require("./emp.service");


exports.createEmp = (req, res) => {
    try {
        const data = req.body;
        create(data, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Databse connection error"
                })
            }
            res.status(200).json({
                success: true,
                message: "Emp Created Successfully!",
                results,
            })
        })
    } catch (error) {
        console.log(error)
    }
}
exports.getAllEmp = (req, res) => {
    try {
        getAllEmp((err, results) => {
            if (err) {
                console.log(err);
            }
            let page = Number(req.query.page);
            let limit = Number(req.query.limit);
            // console.log(page)
            // console.log(limit)
            res.status(200).json({
                success: true,
                results,
            })
        })
    } catch (error) {
        console.log(error);
    }
}
exports.getEmp = (req, res) => {
    try {
        const id = req.params.id;
        getEmpById(id, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Emp not found"
                })
            }

            res.status(200).json({
                success: true,
                results,
            })
        })

    } catch (error) {
        console.log(error);
    }
}

exports.updateEmp = (req, res) => {
    try {
        const id = req.params.id;
        updateEmp(id, req.body, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.status(200).json({
                success: true,
                message: "Emp Updated Successfully!",
                results,
            })
        })
    } catch (error) {
        console.log(error);
    }
}

exports.deleteEmp = (req, res) => {
    try {
        const id = req.params.id;
        deleteEmp(id, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.status(200).json({
                success: true,
                message: "Emp deleted Successfully!",
            })
        })
    } catch (error) {
        console.log(error)
    }
}