// create database here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InfoSchema = new Schema({
    name: {type: String, max: 100},
    id: {type: Number},
    age: {type: Number},
});


// Export the model
module.exports = mongoose.model('UserInfo', InfoSchema);