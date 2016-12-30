var express = require('express');
var router = express.Router();

var User = require('../api/Users');








/* Отдаем тестовое апи. */
router.get('/testapi', function(req, res, next) {





 res.json(req.session.id);




});

module.exports = router;
