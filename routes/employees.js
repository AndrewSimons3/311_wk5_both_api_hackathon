//Create a router and make GET routes for `/, /:id, firstname/:first_name`


const express = require('express');
const router = express.Router();
let employeeController = require('../controllers/employees')

router.get('/', employeeController.getEmployees)

router.get('/:id', employeeController.getEmployeesById)

router.get('/firstname/:first_name', employeeController.getEmployeesByFirstName)

module.exports = router