/**
 * Created by simvolice on 15.01.2017 20:39.
 */


const express = require('express');
const router = express.Router();

const MysosedService = require('../services/Mysosed');
const jsonwebtoken = require('jsonwebtoken');

router.post('/editmyprofile', function (req, res, next) {




    let objParams = {

        id: jsonwebtoken.verify(req.body.token, process.env.SECRETJSONWEBTOKEN)._id


    };


    MysosedService.editmyprofile(objParams).then(function (result) {

        res.json({"code" : result.lastErrorObject.updatedExisting});


    }, function (err) {

        res.json(err);

    });






});



module.exports = router;