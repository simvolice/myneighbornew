/**
 * Created by Admin on 15.01.2017.
 */


const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');


router.get('/testapi', function (req, res, next) {




    res.json({"code"  :  uuidv4()});




});



module.exports = router;