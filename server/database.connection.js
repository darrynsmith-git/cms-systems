var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cms', {
  useMongoClient: true
});
