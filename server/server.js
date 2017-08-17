const express = require('express');
const api = express();
require('./database.connection');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stock = require('./models/Stock');

api.use(bodyParser.json());
api.use(cors());
api.options('*', cors());


api.get('/', function (req, res) {
  res.status(200).json({'message' : 'Hello API World!'});
})

api.get('/stock', function (req, res) {
  Stock.find({}, function(err, stocks) {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json({'data' : stocks});
  });
})

api.get('/stock/:stockId', function (req, res) {
  console.log('Fetching a Stock');
  Stock.findById(stockId, function(err, stock) {
    if (err) {
      console.log('Error Fetching a Stock ', err);
      res.status(500).json(err);
    }
    console.log('Successfully fetched a Stock ', stock);
    res.status(200).json({'data' : stock});
  });
})

api.post('/stock', function (req, res) {
  console.log('Creating a new Stock');
  var newStock = Stock(req.body);
  newStock.save(function(err) {
    if (err) {
      console.log('Error Creating a new Stock ', err);
      res.status(500).json(err);
    }
    console.log('Successfully created a new Stock ', newStock._id);
    res.status(200).json(newStock);
  });
})

api.delete('/stock/:stockId', function (req, res) {
  console.log('Deleting a Stock ', req.params.stockId);
  Stock.findByIdAndRemove(req.params.stockId, function(err) {
    if (err) {
      console.log('Error Deleting a Stock ', err);
      res.status(500).json(err);
    }
    res.status(200).json(req.params.stockId);
    console.log('Successfully deleted Stock ', req.params.stockId);
  });
})

api.put('/stock/:stockId', function (req, res) {
  console.log('Updating a Stock ');
  Stock.findByIdAndUpdate(req.params.stockId, req.body, function(err, stock) {
    if (err) {
      console.log('Error Updating a Stock ', err);
      res.status(500).json(err);
    }
    res.status(200).json({'stock' : stock});
    console.log('Successfully updated Stock ', req.params.stockId);
  });
})

api.listen(3000, function () {
  console.log('Cms Inventory Stock Manager is listening on port 3000 ...')
})
