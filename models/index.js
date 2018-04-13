var mongoose = require('mongoose');
var modelPackage = {};

modelPackage.pokemon = require('./pokemon');
modelPackage.character = require('./character');

mongoose.Promise = Promise;

const dbUrl = process.env.POKAPI_DATABASEURL || 'mongodb://localhost/pokapidb';
mongoose.connect(dbUrl);

module.exports = modelPackage;
