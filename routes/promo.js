/**
 * Created by Lahiru Senadheera on 4/19/2017.
 */
var express = require('express');
var router = express.Router();
var unit = require('../models/unit');
// var promotion = require('../models/promotion');
var item = require('../models/item');
var dailydeal = require('../models/dailydeals');
router.get('/', function (req,res,next) {
    // var array1 = new Array();
    item.find()
        .then(function (doc) {
            // array1.push(doc);
            // unit.find()
            //     .then(function (doc) {
            //         array1.push(doc);
            //         //console.log(array1);
                    res.render('promo',{items:doc, interface:"Promotion Management", title:"Shopping Buddy | Manage Promotions"});
                    console.log(doc);
                });
        });

router.post('/images', function (req,res) {
    item.find({code: req.body.datan})
        .then(function (hut) {
            // var array4=hut;
            res.send(hut);
            // console.log(hut);
    });
    // console.log(req.body.datan);
    //res.send(req.body.data);
// res.redirect('/home');
});

router.post('/addDailyDeal', function (req,res) {
    if (req.body.offer_type="dailydeal"){
        var newDailyDeal = {
            item: req.body.itemname,
            startDate: req.body.promo_start_date,
            endDate: req.body.promo_end_date,
            promotion: req.body.promotion_desc,
            image: req.body.pImage,
            // type: req.body.offer_type,
            price: req.body.price,
            newPrice: req.body.newprice,
            brand: req.body.brand,
            desc: req.body.desc,

        };
            console.log(req.body);
        var dailydealData = new dailydeal(newDailyDeal);
        dailydealData.save(function (err, docs) {
            if (err){
                res.json(err);
            }else{
                res.redirect('/promo');
                // console.log(state);
            }
        });
    };

});

/**
 * Created by Lahiru Senadheera on 4/30/2017.
 */




module.exports = router;