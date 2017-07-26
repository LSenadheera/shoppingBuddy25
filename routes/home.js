/**
 * Created by Lahiru Senadheera on 4/28/2017.
 */
var express = require('express');
var router = express.Router();
var item = require('../models/item');
var category = require('../models/category');
router.get('/', function (req,res) {
    var array22 = new Array();
   // res.render('home',{interface: "Ongoing Promotions", title: "Ongoing Promotions"});
   category.find()
        .then(function(doc) {
            array22.push(doc);
            item.find({"category": "Electronics"})
                .then(function (doc) {
                    array22.push(doc);
                    item.find({"category":"Vegetables"})
                        .then(function (doc) {
                            array22.push(doc);
                            item.find({"category":"Friuts"})
                                .then(function (doc) {
                                    array22.push(doc);
                                    item.find({"category":"Beverages"})
                                    .then(function (doc) {
                                        array22.push(doc);
                                        item.find({"category":"Personal"})
                                            .then(function (doc) {
                                                array22.push(doc);
                                                item.find({"category":"Paper"})
                                                    .then(function (doc) {
                                                        array22.push(doc);
                                                        res.render('home', {
                                                            categories: array22[0],
                                                            electronics: array22[1],
                                                            vegetables: array22[2],
                                                            fruits: array22[3],
                                                            beverages:array22[4],
                                                            personal: array22[5],
                                                            paper: array22[6],
                                                            cate:"Electronics",
                                                            title: "Shopping Buddy | Home"
                                                    });

                                            });

                                    });

                                });
                                    // console.log(array22);
                        });

                    });

                });


        });


});

module.exports = router;
