const express = require('express');
const api = express();
const service = require('./service');

const cors = require('cors');
api.use(cors());
api.options('*', cors());

api.get('/', function (req, res) {
  res.status(200).json({'message' : 'Hello World!'});
})

api.get('/stock', function (req, res) {
  res.status(200).json({'message' : service.readAllStocks()});
})

api.get('/stock/:stockId', function (req, res) {
  res.status(200).json({'message' : 'yoyo'});
})

api.post('/stock', function (req, res) {
  console.log(req);
  console.log('Creating a new Stock');
  res.status(200).json({'message' : 'yoyo'});
})

api.delete('/stock/:stockId', function (req, res) {
  res.status(200).json({'message' : 'yoyo'});
})

api.put('/stock/:stockId', function (req, res) {
  res.status(200).json({'message' : 'yoyo'});
})

api.listen(3000, function () {
  console.log('Cms Inventory Stock Manager is listening on port 3000 ...')
})
