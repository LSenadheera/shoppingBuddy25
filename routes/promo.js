/**
 * Created by Lahiru Senadheera on 4/19/2017.
 */
var express = require('express');
var router = express.Router();
var unit = require('../models/unit');
// var promotion = require('../models/promotion');
var item = require('../models/item');
var dailydeal = require('../models/dailydeals');
var offerpromo = require('../models/offer_promo');

router.get('/', function (req,res,next) {
    item.find()
        .then(function (doc) {
                    res.render('promo',{items:doc, interface:"Promotion Management", title:"Shopping Buddy | Manage Promotions"});
                    // console.log(doc);
                });
        });

router.post('/images', function (req,res) {
    item.find({code: req.body.datan})
        .then(function (hut) {
            res.send(hut);
    });
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
        var dailydealData = new dailydeal(newDailyDeal);
        dailydealData.save(function (err, docs) {
            if (err){
                res.json(err);
            }else{

                // res.send("<html><script>alert('Promotion added successfully');window.location='/promo'</script></html>");

                console.log("state");
            }
        });
    } if(req.body.offer_type="promotion"){

        // res.redirect('/home');
        var newOfferPromo = {
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
        var offerpromoData = new offerpromo(newOfferPromo);
        offerpromoData.save(function (err, docs) {
            if (err){
                res.json(err);
            }else{
                res.send("<html><script>alert('Promotion added successfully');window.location='/promo'</script></html>");

                // console.log(state);
            }
        });
    };


});

/**
 * Created by Lahiru Senadheera on 4/30/2017.
 */




module.exports = router;