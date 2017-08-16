require('./database.connection');
const Stock = require('./models/Stock');


exports.createStock = function(stock) {
  // create a new stock
  var newStock = Stock({
    // registration_number: ,
    // make: ,
    // model: ,
    // model_year: ,
    // kms: ,
    // color: ,
    // vin: ,
    // retail_price: ,
    // cost_price: ,
    // accessories: ,
    // images: ,
    // created_at: ,
    // updated_at:
  });

  // save the stock
  newStock.save(function(err) {
    if (err) throw err;

    console.log('User created!');
  });
};

exports.readStock = function(stockId) {
  // get a stock by ID
  Stock.findById(stockId, function(err, stock) {
    if (err) throw err;

    // show the one stock
    console.log(stock);
  });
};

exports.readAllStocks = function() {
  // get all the stocks
  Stock.find({}, function(err, stocks) {
    if (err) throw err;

    // object of all the stocks
    console.log(stocks);
  });
};

exports.updateStock = function(stock) {
  // update stock by id
  User.findByIdAndUpdate(stock._id, {
    // registration_number: ,
    // make: ,
    // model: ,
    // model_year: ,
    // kms: ,
    // color: ,
    // vin: ,
    // retail_price: ,
    // cost_price: ,
    // accessories: ,
    // images: ,
    // created_at: ,
    // updated_at:
  }, function(err, stock) {
    if (err) throw err;

    // we have the updated stock returned to us
    console.log(stock);
  });
};

exports.deleteStock = function(stock) {
  // delete stock by id
  User.findByIdAndRemove(stock._id, function(err) {
    if (err) throw err;

    // we have deleted the stock
    console.log('Deleted stock ', stock._id);
  });
};

