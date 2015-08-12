// Modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var SimpsonsCtrl = require('./controllers/SimpsonsCtrl');

// Express
var app = express();

// Express Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/simpson', SimpsonsCtrl.create);
app.get('/simpson', SimpsonsCtrl.read);
app.put('/simpson/:id', SimpsonsCtrl.update);
app.delete('/simpson/:id', SimpsonsCtrl.delete);

// Connections
var port = 11331;
var mongoUri = 'mongodb://localhost:27017/simpsons-mongoose';

mongoose.set('debug', true); 
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('listening on port: ', port);
});