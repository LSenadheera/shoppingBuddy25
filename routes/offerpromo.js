/**
 * Created by Lahiru Senadheera on 7/27/2017.
 */
var express = require('express');
var router = express.Router();
// var item = require('../models/item');
var offerPromo = require('../models/offer_promo');
router.get('/', function (req,res) {
    offerPromo.find()
        .then(function (doc) {
            res.render('offerpromo',{promotions:doc});
        });


});


module.exports = router;





/**
 * Created by Lahiru Senadheera on 7/24/2017.
 */
