/**
 * Created by Lahiru Senadheera on 4/28/2017.
 */
var express = require('express');
var router = express.Router();
var item = require('../models/item');
router.get('/', function (req,res) {
   // res.render('home',{interface: "Ongoing Promotions", title: "Ongoing Promotions"});
   item.find()
        .then(function(doc) {
            res.render('home', {items: doc, interface: "Available Items", title: "Shopping Buddy | Home"});
        });
});

module.exports = router;
