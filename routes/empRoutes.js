const { createEmp, getEmp, updateEmp, deleteEmp, getAllEmp } = require("../controller/empController");

const router = require("express").Router();

router.post("/create", createEmp)
router.get("/getAllEmp", getAllEmp)
router.get("/:id", getEmp)
router.put("/update/:id", updateEmp)
router.delete("/delete/:id", deleteEmp)

module.exports = router