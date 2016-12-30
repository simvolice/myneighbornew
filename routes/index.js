var express = require('express');
var router = express.Router();

var User = require('../api/Users');

var newUser = new User({





});







/* Отдаем домашнию страницу. */
router.get('/testapi', function(req, res, next) {

 res.json('start home');






});

module.exports = router;
