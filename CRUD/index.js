// entry point of the app
const express = require('express');
const bodyParser = require('body-parser');
const userinfo = require('./routes/userinfo'); // Imports routes for the products
const config = require('./config/database')
// initialize our express app
const app = express();
// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.url,{ useNewUrlParser: true }).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// make sure that define all configurations BEFORE defining routes
app.use('/userinfo', userinfo)

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});