const express = require('express')
const db = require('../database')
const employee = require('../controllers/employee')

// Create a route handler
const router = express.Router();

router.post('/employee/credentials', employee.employee_credentials)
router.post('/employee/equipment', employee.employee_equipment)
router.post('/employee/name', employee.employee_name)


  module.exports = router