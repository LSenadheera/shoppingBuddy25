
var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/shoppingbuddy');
// mongoose.connect('mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy');
var Schema = mongoose.Schema;

var dailydealsSchema = new Schema({
    item: String,
    startDate: String,
    endDate: String,
    price: String,
    promotion:String,
    newPrice: String,
    image: String,
    brand: String,
    desc: String,
},{collection: 'dailydeals'});

var dailydeals = mongoose.model('dailydeals', dailydealsSchema);

module.exports = dailydeals;
/**
 * Created by Lahiru Senadheera on 5/1/2017.
 */
