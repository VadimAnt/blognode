var express = require('express');
var HomeController = require('../controllers/Home/HomeController');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);

module.exports = router;
