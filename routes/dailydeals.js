var express = require('express');
var router = express.Router();
// var item = require('../models/item');
var dailydeal = require('../models/dailydeals');
router.get('/', function (req,res) {
dailydeal.find()
    .then(function (doc) {
        res.render('dailydeals',{dailydeals:doc});
    });


});


module.exports = router;





/**
 * Created by Lahiru Senadheera on 7/24/2017.
 */
