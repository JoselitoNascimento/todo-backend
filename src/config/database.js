const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const conection = mongoose.connect('mongodb://localhost/todo');  

module.exports = conection;
