
const express = require('express');
const router = express.Router();

var Mysosed = require('../services/Mysosed');



router.get('/testgeo', function (req, res, next) {




    Mysosed.searchnearcoord(null).then(function (result) {

        res.json({"result": result, "count": result.length});

    }, function (err) {

        res.json(err);

    });





});



module.exports = router;