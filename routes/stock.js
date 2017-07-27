/**
 * Created by Lahiru Senadheera on 5/12/2017.
 */
var express = require('express');
var router = express.Router();
var item = require('../models/item');

router.get('/', function (req,res) {
   res.render('stock',{interface:"Bulk upload items", title: "Bulk upload"})
});


router.post('/upload', function (req,res) {
  var fileName = req.body.fileUp;
    console.log("C:/Users/Lahiru Senadheera/Desktop/"+fileName);
  var flPath = "C:/"+fileName;
    var csv = require("fast-csv");
    array1 = Array();
    csv
        .fromPath(flPath,{headers: true})
        .on("data", function(data) {

            array1 = data;
            var dt1 = new item(array1);
            dt1.save(function(err, docs){
                if(err)
                {
                    res.json(err);

                }
                else
                {
                    //document.getElementById("item_name").value="asa";
                    // res.send('success Inserted !');
                    console.log(dt1);
                }});


        })
        .on("end", function(){
            console.log("done");
        });
res.redirect('/home');
});



module.exports = router;