var express = require('express');
var router = express.Router();

var User = require('../api/Users');

var newUser = new User({





});







/* Отдаем домашнию страницу. */
router.get('/', function(req, res, next) {

 res.render('index');






});

module.exports = router;
