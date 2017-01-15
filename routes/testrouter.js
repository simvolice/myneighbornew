/**
 * Created by Admin on 15.01.2017.
 */


const express = require('express');
const router = express.Router();



router.get('/testapi', function (req, res, next) {



    res.json('ok');




});



module.exports = router;