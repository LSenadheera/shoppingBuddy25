/**
 * Created by Lahiru Senadheera on 4/28/2017.
 */
var express = require('express');
var router = express.Router();
var item = require('../models/item');
router.get('/', function (req,res) {
    var array22 = new Array();
   // res.render('home',{interface: "Ongoing Promotions", title: "Ongoing Promotions"});
   item.find({"category":"Electronics"})
        .then(function(doc) {
            array22.push(doc);
            item.find({"category":"Friuts"})
                .then(function (doc) {
                    array22.push(doc)
                    res.render('home', {electronics: array22[0],fruits: array22[1], interface: "Food", title: "Shopping Buddy | Home"});

                });

        });





});

module.exports = router;
