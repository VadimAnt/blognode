var express = require('express');
var BlogController = require('../controllers/Blog/BlogController');
var router = express.Router();

/* GET home page. */
router.get('/blog', BlogController.index);

module.exports = router;