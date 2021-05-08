// The following line will avoid the warning of const.
/*jshint esversion: 6 */

const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/ExpressCRUDdb';
const app = express();

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const con = mongoose.connection;

// The following function can be written as a lambda
// con.on('open', function() {
//     console.log("connected .. ");
// });

con.on('open', () => {
    console.log("connected .. ");
});

// add a middleware to use json in the post req. body
app.use(express.json());

const studentRouter = require('./routes/students');
app.use('/students', studentRouter);

app.listen(9000, () => {
    console.log('Server started');
});