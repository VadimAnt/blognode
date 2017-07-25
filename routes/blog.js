var express = require('express');
var BlogController = require('../controllers/Blog/BlogController');
var router = express.Router();

router.get('/', BlogController.index);
router.get('/:id', BlogController.view);

module.exports = router;