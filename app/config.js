var mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/shortlydb';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', console.log.bind(console, 'Mongodb connetion open'));
//   function () {
//   console.log('Mongodb connnection open');
// });

module.exports = db;
