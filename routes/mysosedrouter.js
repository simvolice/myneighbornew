

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

        res.json({"code" : "ok"});


    });






});



router.post('/searchgeo', function(req, res, next){




    let objParams = {

        coord: req.body.coord,
        search: req.body.search


    };



    MysosedService.searchnearcoord(objParams).then(function (result) {

        res.json({"code": "ok", "result": result});

    });

});



module.exports = router;