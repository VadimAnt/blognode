var express = require('express');
var router = express.Router();
var ContactController = require('../controllers/Contact/ContactController');

router.post('/', ContactController.index);

module.exports = router;
