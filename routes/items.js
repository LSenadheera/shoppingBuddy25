/**
 * Created by Lahiru Senadheera on 3/25/2017.
 */
var express = require('express');
var router = express.Router();
var unit = require('../models/unit');
var item = require('../models/item');
var category = require('../models/category');
var brand = require('../models/brand');
var arrayItems = new Array();
// var query = require('url');
// var swal = require('sweetalert');
// router.post('/update', function (req,res) {
//     item.find({code: req.body.updateitem})
//         .then(function (data1) {
//             res.send(data1);
//         });
// });


router.get('/', function(req, res, next) {
    // var id = query.status;
    // console.log(id);
    unit.find()
        .then(function (doc) {
            arrayItems.push(doc);
            category.find()
                .then(function (doc4) {
                    arrayItems.push(doc4);
                    brand.find()
                        .then(function (doc5) {
                            arrayItems.push(doc5)
                            item.find()
                                .then(function (doc6) {
                                    arrayItems.push(doc6);
                                    res.render('items', {
                                        units: arrayItems[0],
                                        categories: arrayItems[1],
                                        brands: arrayItems[2],
                                        items: arrayItems[3],
                                        interface: "Item Management",
                                        title: "Shopping Buddy | Manage Items"
                                    });
                                })

                        });

                });
        });


    router.post('/additem', function (req, res, next) {
        var newItem = {
            name: req.body.item_name,
            desc: req.body.item_desc,
            category: req.body.item_category,
            code: req.body.item_code,
            brand: req.body.item_brand,
            unit: req.body.item_unit,
            price: req.body.item_price,
            image: req.body.item_image,



        };

        var data = new item(newItem);
        console.log(data);
        data.save(function (err, docs) {
            if (err) {
                res.json(err);
            }
            else {
                res.send("<html><script>alert('Item added successfully');window.location='/items'</script></html>");
            }
        });
    });
});

module.exports = router;


/**
 * Created by Lahiru Senadheera on 4/4/2017.
 */
router.post('/update', function (req,res) {
    // console.log(req.body);
    item.find({code: req.body.updatevalue})
        .then(function (doc9) {
            res.send(doc9);
            console.log(doc9);
        });
});