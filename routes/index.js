const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');


const ServiceUsers = require('../services/Users');
const AuthService = require('../services/Auth');





function checkRegisterData(req, res) {


    const testEmail = /^(?=.{3,254}$)(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const testPass = /^.*(?=.{8,19}$)(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%&? "]).*$/;



    if (!testEmail.test(req.body.email)){


        return res.json("Вы ввели не правильный email");


    } else if (!testPass.test(req.body.pass)) {




        return res.json("Вы ввели не правильный пароль");

    } else {

        const hash = bcrypt.hashSync(req.body.pass, 10);

        const token = jsonwebtoken.sign(req.body.email, "719eef97-afd3-40ac-b235-30b16cd8c978");

        const objParams = {

            email: req.body.email,
            password: hash,
            token : token


        };



        AuthService.registration(objParams, res);









    }





}













router.post('/logout', function (req, res, next) {




});


router.post('/register', function (req, res, next) {



  checkRegisterData(req, res);


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
