const express = require('express')
const db = require('../database')
const employee = require('../controllers/employee')
const events = require('../controllers/events')
const address = require('../controllers/address')
const cities = require('../controllers/cities')
const inventory = require('../controllers/inventory')
const leases = require('../controllers/leases')
// Create a route handler
const router = express.Router();

router.post('/employee/credentials', employee.employee_credentials)
router.post('/employee/equipment', employee.employee_equipment)
router.post('/employee/name', employee.employee_name)
router.post('/employee/update', employee.employee_update)
router.get('/events/:id', events.upcomming_events)
router.get('/employee/all', employee.employee_all)
router.get('/inventory/all', inventory.inventory_all)
router.get('/inventory/company', inventory.inventory_company)
router.get('/address/all', address.address_all)
router.get('/cities/all', cities.city_all)
router.get('/leases/all', leases.leases_all)


module.exports = router