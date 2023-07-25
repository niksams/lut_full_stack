const express = require('express');

const router = express.Router();

router.use('/employee', require('../controllers/employee.controllers'));

module.exports = router;