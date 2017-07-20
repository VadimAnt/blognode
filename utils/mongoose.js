let mongoose = require('mongoose');
let config = require('../config/database')();
let dsn = `mongodb://${config.user}:${config.pass}@${config.host}:${config.port}/${config.dbname}`;
console.log(dsn);
mongoose.connection.openUri(dsn);
mongoose.Promise = require('bluebird');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
exports.connect = mongoose.connection;
exports.Schema = mongoose.Schema;