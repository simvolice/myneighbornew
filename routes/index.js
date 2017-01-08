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


        return  res.json({"code": "emailWrong"});


    } else if (!testPass.test(req.body.pass)) {




        return  res.json({"code": "passWrong"});

    } else {

        const hash = bcrypt.hashSync(req.body.pass, 10);


        const objParams = {

            email: req.body.email,
            password: hash


        };



        AuthService.registration(objParams).then(function (result) {


            res.json(result);

        }, function (err) {

            res.json(err);

        });











    }





}













router.post('/logout', function (req, res, next) {




});


router.post('/register', function (req, res, next) {



  checkRegisterData(req, res);


});


router.post('/login', function (req, res, next) {






    let objParams = {

      email: req.body.email


    };




  AuthService.login(objParams).then(function (result) {

      if (result == null) {

          res.json({"code": "emailWrong"});

      }else if (bcrypt.compareSync(req.body.pass, result.password)){



          res.json({"code": "ok", "token": jsonwebtoken.sign(result, "719eef97-afd3-40ac-b235-30b16cd8c978")});


      }else {


          res.json({"code": "passWrong"});


      }






  }, function (err) {


      res.json(err.stack);

  });







});



router.post('/search', function (req, res, next) {

});



router.post('/myprofile', function (req, res, next) {

});



router.get('/testdb', function (req, res, next) {





  ServiceUsers.getAllUsers(res);






});





module.exports = router;
