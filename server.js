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

