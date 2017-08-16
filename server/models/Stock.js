// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var stockSchema = new Schema({
  registration_number: { type: String, required: true, unique: true },
  make: String,
  model: String,
  model_year: Number,
  kms: Number,
  color: String,
  vin: String,
  retail_price: Number,
  cost_price: Number,
  accessories: Array,
  images: Array,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Stock = mongoose.model('Stock', stockSchema);

// make this available to our stocks in our Node applications
module.exports = Stock;
