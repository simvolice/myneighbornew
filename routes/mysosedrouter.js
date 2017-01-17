

const express = require('express');
const router = express.Router();
const config = require('../utils/config');

const MysosedService = require('../services/Mysosed');
const jsonwebtoken = require('jsonwebtoken');

router.post('/editmyprofile', function (req, res, next) {




    let objParams = {

        id: jsonwebtoken.verify(req.body.token, config.SECRETJSONWEBTOKEN)._id


    };


    MysosedService.editmyprofile(objParams).then(function (result) {

        res.json({"code" : result.lastErrorObject.updatedExisting});


    }, function (err) {

        res.json(err);

    });






});



module.exports = router;