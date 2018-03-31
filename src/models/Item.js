const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
  name: {type: String},
  price: {type: Number},
  image: {type: String}
}, {
  collection: 'items'
});

module.exports = mongoose.model('Item', Item);
