
/**
 * Created by Lahiru Senadheera on 7/23/2017.
 */
var express = require('express');
var router = express.Router();
router.get('/', function (req,res) {

            res.render('offerSelect', {interface: "Please select your preferred promotion type", title: "Promotions"});
        });


module.exports = router;
