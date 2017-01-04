var express = require('express');
var router = express.Router();

var ServiceUsers = require('../services/Users');





router.get('/testdb', function (req, res, next) {





  ServiceUsers.getAllUsers(res);






});





module.exports = router;
