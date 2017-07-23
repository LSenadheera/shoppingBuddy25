
var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/shoppingbuddy');
// mongoose.connect('mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy');
var Schema = mongoose.Schema;

var brandSchema = new Schema({
    name: String,
    value: String
},{collection: 'brand'});

var brand = mongoose.model('brand', brandSchema);

module.exports = brand;
/**
 * Created by Lahiru Senadheera on 5/1/2017.
 */
/**
 * Created by Lahiru Senadheera on 7/23/2017.
 */
