const express = require('express');
const router = express.Router();
const employeesController = require('../Controllers/Employees');
const { middlewareValidateRequestFields, middlewareValidateRequestValues } = require('../Middleware/GlobalMiddleware');
const fieldsValidateToken = ['token']

router.get("", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), employeesController.getAllEmployees);
router.get("/oldest", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), employeesController.getEmployeesOldest);
router.get("/NAME", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), employeesController.getEmployeesName);
router.post("", middlewareValidateRequestFields("query", fieldsValidateToken, "No se envio Token"), middlewareValidateRequestValues("query", fieldsValidateToken, "Token invalido"), employeesController.postCreateEmployee);

module.exports = router;