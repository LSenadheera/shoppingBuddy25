var express = require('express');
var router = express.Router();

var unit = require('../models/unit');
var category = require('../models/category');
var brand = require('../models/brand');
/* GET home page. */
var array5 = new Array();

router.get('/', function(req, res, next) {
    category.find()
        .then(function (doc2) {
            array5.push(doc2);
            unit.find()
                .then(function (doc) {
                    array5.push(doc);
                    brand.find()
                        .then(function (doc3) {
                            array5.push(doc3);
                            res.render('settings', {
                                categories: array5[0],
                                units: array5[1],
                                brands: array5[2],
                                interface: "Settings",
                                title: "Settings"

                        });
                            console.log(array5[2]);
                            });
                        });


                    // console.log(array5);
                });
        });

router.post('/addunit', function (req,res) {
    var newUnit={
        name: req.body.new_item_unit,
        value: req.body.new_item_unit,
    };

    var unitData = new unit(newUnit);
    unitData.save(function(err, docs) {
        if (err) {
            res.json(err);
        }
        else {
            // res.send('success Inserted !');
            res.redirect('/settings');
        }
    });
});


router.post('/addcategory', function (req,res) {
    var newCategory = {
        name: req.body.new_item_category,
        value: req.body.new_item_category,
    };

    var categoryData = new category(newCategory);
    categoryData.save(function (err, docs) {
        if (err) {
            res.json(err);
        }
        else {
            res.redirect('/settings');
        }
    });

});

router.post('/addbrand', function (req,res) {
    var newBrand = {
        name: req.body.new_item_brand,
        value: req.body.new_item_brand,
    };

    var brandData = new brand(newBrand);
    brandData.save(function (err, docs) {
        if (err) {
            res.json(err);
        }
        else {
            // res.send('success Inserted !');
            res.redirect('/settings');
        }
    });


});
module.exports = router;

/**
 * Created by Lahiru Senadheera on 4/29/2017.
 */
