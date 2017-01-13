const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const url = require('url');


const AuthService = require('../services/Auth');

const testEmail = /^(?=.{3,254}$)(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const testPass = /^(?=[\x20-\x7E]*?[\w])(?=[\x20-\x7E]*?[\W])(?![\x20-\x7E]*?[\s])[\x20-\x7E]{6,20}$/;

const verifEmail = require('../utils/verifEmail');
const uuidV4 = require('uuid/v4');



function checkRegisterData(req, res) {









    if (!testEmail.test(req.body.email)){


        return  res.json({"code": "emailWrongRegExp"});


    } else if (!testPass.test(req.body.pass)) {




        return  res.json({"code": "passWrongRegExp"});

    } else {

        const hash = bcrypt.hashSync(req.body.pass, 10);


        const objParams = {

            email: req.body.email,
            password: hash,
            url: req.hostname,
            activateToken: uuidV4()


        };



        AuthService.registration(objParams).then(function (result) {


            res.json(result);

        }, function (err) {

            res.json(err);

        });











    }





}
















router.post('/register', function (req, res, next) {



  checkRegisterData(req, res);


});


router.post('/login', function (req, res, next) {








    if (!testEmail.test(req.body.email)){


        return  res.json({"code": "emailWrongRegExp"});


    } else if (!testPass.test(req.body.pass)) {


        return  res.json({"code": "passWrongRegExp"});

    } else {




        let objParams = {

          email: req.body.email

        };


        AuthService.login(objParams).then(function (result) {





            if (bcrypt.compareSync(req.body.pass, result.password)){




                res.json({"code": "ok", "token": jsonwebtoken.sign(result, process.env.SECRETJSONWEBTOKEN)});


            }else {


                res.json({"code": "passWrong"});


            }






        }, function (err) {


            res.json(err.stack);

        });

    }










});



router.post('/search', function (req, res, next) {

});



router.post('/myprofile', function (req, res, next) {

});

function fullUrl(req) {
    return url.format({
        protocol: req.protocol,
        hostname: req.hostname,
        port: process.env.PORT,
        pathname: "/verifemail",
        search: "token=" + uuidV4()
    });
}

router.get('/testapi', function (req, res, next) {

    const objParams = {

        email: "alkey87@mail.ru",

        url: fullUrl(req)


    };


verifEmail.sendActivateEmail(objParams, res);


res.json('ok');




});





router.get('/verifemail', function (req, res, next) {






    console.log(req.query.token);


    res.json('ok');




});



module.exports = router;
