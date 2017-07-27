
var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/shoppingbuddy');
// mongoose.connect('mongodb://admin:123@ds123351.mlab.com:23351/shoppingbuddy');
var Schema = mongoose.Schema;

var offerPromoSchema = new Schema({
    item: String,
    startDate: String,
    endDate: String,
    price: String,
    promotion:String,
    newPrice: String,
    image: String,
    brand: String,
    desc: String,
},{collection: 'offerpromo'});

var offerPromo = mongoose.model('offerPromo', offerPromoSchema);

module.exports = offerPromo;
/**
 * Created by Lahiru Senadheera on 5/1/2017.
 */
/**
 * Created by Lahiru Senadheera on 7/27/2017.
 */
