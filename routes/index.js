var express = require('express');
var router = express.Router();

var ServiceUsers = require('../services/Users');




router.post('/logout', function (req, res, next) {

});


router.post('/register', function (req, res, next) {

});


router.post('/login', function (req, res, next) {

});



router.post('/search', function (req, res, next) {

});



router.post('/myprofile', function (req, res, next) {

});



router.get('/testdb', function (req, res, next) {





  ServiceUsers.getAllUsers(res);






});





module.exports = router;
