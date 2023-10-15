const express = require('express');
const router = express.Router();
const employeesController = require('../Controllers/Employees');
const { middlewareValidateToken } = require('../Middleware/GlobalMiddleware');

router.get("", middlewareValidateToken(), employeesController.getAllEmployees);
router.get("/oldest", middlewareValidateToken(), employeesController.getEmployeesOldest);
router.get("/NAME", middlewareValidateToken(), employeesController.getEmployeesName);
router.post("", middlewareValidateToken(), employeesController.postCreateEmployee);

module.exports = router;