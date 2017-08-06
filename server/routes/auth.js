var express = require('express');
var BlogController = require('../controllers/Auth/AuthController');

var router = express.Router();

router.get('/login', BlogController.login);

module.exports = router;